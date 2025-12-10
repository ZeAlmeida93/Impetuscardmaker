import { useRef, useState } from 'react';
import { FormData } from '../App';
import A3FrontDynamic from './A3FrontDynamic';
import A3BackDynamic from './A3BackDynamic';
import { Download, Loader2, Settings } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface A3PreviewProps {
  formData: FormData;
}

export default function A3Preview({ formData }: A3PreviewProps) {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  const handleExportPDF = async () => {
    if (!apiKey) {
      toast.error('Please enter your PDFShift API key');
      setShowApiKeyInput(true);
      return;
    }

    setIsExporting(true);
    
    try {
      // Step 1: Export A3-Front as PDF blob
      toast.info('Exporting A3-Front via PDFShift...');
      const frontPdfBlob = await exportFrameViaPDFShift(frontRef.current, 'A3-Front');
      
      if (!frontPdfBlob) {
        throw new Error('Failed to export A3-Front');
      }

      // Step 2: Export A3-Back as PDF blob
      toast.info('Exporting A3-Back via PDFShift...');
      const backPdfBlob = await exportFrameViaPDFShift(backRef.current, 'A3-Back');
      
      if (!backPdfBlob) {
        throw new Error('Failed to export A3-Back');
      }

      // Step 3: Combine both PDF blobs into a single merged PDF
      toast.info('Merging PDFs...');
      const mergedPdfBlob = await mergePDFs(frontPdfBlob, backPdfBlob);

      // Step 4: Download the final PDF
      const downloadUrl = URL.createObjectURL(mergedPdfBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'impetus-card-a3.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      toast.success('PDF exported successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error(`Failed to export PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsExporting(false);
    }
  };

  const exportFrameViaPDFShift = async (
    element: HTMLElement | null,
    frameName: string
  ): Promise<Blob | null> => {
    if (!element) {
      throw new Error(`Element for ${frameName} not found`);
    }

    try {
      // Get the HTML content of the frame
      const htmlContent = element.outerHTML;
      
      // Get all stylesheets from the document
      const styles = Array.from(document.styleSheets)
        .map(styleSheet => {
          try {
            return Array.from(styleSheet.cssRules)
              .map(rule => rule.cssText)
              .join('\n');
          } catch (e) {
            // Handle CORS issues with external stylesheets
            return '';
          }
        })
        .join('\n');

      // Create a complete HTML document
      const completeHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              ${styles}
              
              /* Override oklch colors with hex equivalents */
              :root {
                --foreground: #252525 !important;
                --card-foreground: #252525 !important;
                --popover: #ffffff !important;
                --popover-foreground: #252525 !important;
                --primary-foreground: #ffffff !important;
                --secondary: #f2f2f5 !important;
                --ring: #b5b5b5 !important;
                --background: #ffffff !important;
              }
              
              body {
                margin: 0;
                padding: 0;
                background: white;
              }
            </style>
          </head>
          <body>
            ${htmlContent}
          </body>
        </html>
      `;

      // Call PDFShift API
      const response = await fetch('https://api.pdfshift.io/v3/convert/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`api:${apiKey}`)}`
        },
        body: JSON.stringify({
          source: completeHtml,
          landscape: true,
          format: 'A3',
          margin: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          },
          use_print: false,
          wait_for: 0
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `PDFShift API error: ${response.status} ${response.statusText}`);
      }

      const pdfBlob = await response.blob();
      return pdfBlob;
    } catch (error) {
      console.error(`Error exporting ${frameName}:`, error);
      throw error;
    }
  };

  const mergePDFs = async (
    frontBlob: Blob,
    backBlob: Blob
  ): Promise<Blob> => {
    try {
      const { PDFDocument } = await import('pdf-lib');

      // Load both PDFs
      const frontPdfBytes = await frontBlob.arrayBuffer();
      const backPdfBytes = await backBlob.arrayBuffer();

      const frontPdf = await PDFDocument.load(frontPdfBytes);
      const backPdf = await PDFDocument.load(backPdfBytes);

      // Create a new PDF document
      const mergedPdf = await PDFDocument.create();

      // Copy pages from front PDF
      const frontPages = await mergedPdf.copyPages(
        frontPdf,
        frontPdf.getPageIndices()
      );
      frontPages.forEach((page) => {
        mergedPdf.addPage(page);
      });

      // Copy pages from back PDF
      const backPages = await mergedPdf.copyPages(
        backPdf,
        backPdf.getPageIndices()
      );
      backPages.forEach((page) => {
        mergedPdf.addPage(page);
      });

      // Serialize the merged PDF to bytes
      const mergedPdfBytes = await mergedPdf.save();

      return new Blob([mergedPdfBytes], { type: 'application/pdf' });
    } catch (error) {
      console.error('Error merging PDFs:', error);
      throw error;
    }
  };

  return (
    <div className="bg-gray-100 min-h-full p-8">
      <div className="max-w-[1440px] mx-auto">
        {/* API Key Configuration */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Settings className="w-5 h-5 text-gray-400 mt-1" />
            </div>
            <div className="flex-1">
              <h3 className="text-black mb-1">PDFShift API Configuration</h3>
              <p className="text-gray-600 text-sm mb-3">
                Enter your PDFShift API key to enable PDF export. Get your free API key at{' '}
                <a
                  href="https://pdfshift.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  pdfshift.io
                </a>
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your PDFShift API key"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                />
                {apiKey && (
                  <button
                    onClick={() => setApiKey('')}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Export Button */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-black mb-1">Export Options</h2>
              <p className="text-gray-600 text-sm">
                Export both A3-Front and A3-Back as a combined PDF file via PDFShift API
              </p>
            </div>
            <button
              onClick={handleExportPDF}
              disabled={isExporting || !apiKey}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                isExporting || !apiKey
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-zinc-700 hover:bg-zinc-600 text-white'
              }`}
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Export PDF
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preview Sections */}
        <div className="space-y-6">
          {/* A3 Front Preview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-black mb-4">A3-Front Preview</h3>
            <div className="overflow-auto border border-gray-300 rounded">
              <div ref={frontRef} className="inline-block">
                <A3FrontDynamic formData={formData} />
              </div>
            </div>
          </div>

          {/* A3 Back Preview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-black mb-4">A3-Back Preview</h3>
            <div className="overflow-auto border border-gray-300 rounded">
              <div ref={backRef} className="inline-block">
                <A3BackDynamic />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}