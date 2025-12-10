import { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';
import { FormData } from '../App';
import A3FrontDynamic from './A3FrontDynamic';
import A3BackDynamic from './A3BackDynamic';
import { Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface A3PreviewProps {
  formData: FormData;
}

export default function A3Preview({ formData }: A3PreviewProps) {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    const removeFallbacks = injectColorFallbacks();

    if (!frontRef.current || !backRef.current) {
      toast.error('Pré-visualizações não encontradas');
      removeFallbacks();
      return;
    }

    setIsExporting(true);
    
    try {
      toast.info('Exportando A3-Front...');
      const frontImage = await captureSection(frontRef.current);

      toast.info('Exportando A3-Back...');
      const backImage = await captureSection(backRef.current);

      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a3'
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      doc.addImage(frontImage, 'PNG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');
      doc.addPage();
      doc.addImage(backImage, 'PNG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');

      doc.save('impetus-card-a3.pdf');

      toast.success('PDF exported successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error(`Failed to export PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      removeFallbacks();
      setIsExporting(false);
    }
  };

  const captureSection = async (element: HTMLElement): Promise<string> => {
    const width = Math.max(element.scrollWidth, element.offsetWidth);
    const height = Math.max(element.scrollHeight, element.offsetHeight);

    return toPng(element, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: '#ffffff',
      width,
      height,
      style: {
        width: `${width}px`,
        height: `${height}px`,
        transform: 'none',
        transformOrigin: 'top left'
      }
    });
  };

  const injectColorFallbacks = () => {
    const existing = document.querySelector('style[data-export-fallbacks]');
    if (existing) return () => {};

    const style = document.createElement('style');
    style.setAttribute('data-export-fallbacks', 'true');
    style.textContent = `
      :root {
        --color-blue-600: #2563eb;
        --color-gray-100: #f5f5f5;
        --color-gray-300: #d4d4d8;
        --color-gray-400: #a1a1aa;
        --color-gray-500: #71717a;
        --color-gray-600: #52525b;
        --color-gray-700: #3f3f46;
        --color-gray-800: #27272a;
        --color-zinc-400: #a1a1aa;
        --color-zinc-500: #71717a;
        --color-zinc-600: #52525b;
        --color-zinc-700: #3f3f46;
        --color-zinc-800: #27272a;
        --foreground: #252525;
        --card: #ffffff;
        --card-foreground: #252525;
        --popover: #ffffff;
        --popover-foreground: #252525;
        --primary: #111827;
        --primary-foreground: #ffffff;
        --secondary: #f2f2f5;
        --secondary-foreground: #252525;
        --muted: #f4f4f5;
        --muted-foreground: #52525b;
        --accent: #e5e7eb;
        --accent-foreground: #111827;
        --destructive: #ef4444;
        --destructive-foreground: #ffffff;
        --border: #e5e7eb;
        --input: #e5e7eb;
        --ring: #b5b5b5;
        --background: #ffffff;
        --chart-1: #2563eb;
        --chart-2: #10b981;
        --chart-3: #f59e0b;
        --chart-4: #8b5cf6;
        --chart-5: #ec4899;
        --sidebar: #ffffff;
        --sidebar-foreground: #111827;
        --sidebar-primary: #111827;
        --sidebar-primary-foreground: #ffffff;
        --sidebar-accent: #e5e7eb;
        --sidebar-accent-foreground: #111827;
        --sidebar-border: #e5e7eb;
        --sidebar-ring: #b5b5b5;
      }
      :root.dark {
        --foreground: #f9fafb;
        --card: #111827;
        --card-foreground: #f9fafb;
        --popover: #111827;
        --popover-foreground: #f9fafb;
        --primary: #f9fafb;
        --primary-foreground: #111827;
        --secondary: #1f2937;
        --secondary-foreground: #f9fafb;
        --muted: #1f2937;
        --muted-foreground: #9ca3af;
        --accent: #1f2937;
        --accent-foreground: #f9fafb;
        --destructive: #ef4444;
        --destructive-foreground: #f9fafb;
        --border: #1f2937;
        --input: #1f2937;
        --ring: #4b5563;
        --background: #111827;
        --chart-1: #60a5fa;
        --chart-2: #34d399;
        --chart-3: #fbbf24;
        --chart-4: #c084fc;
        --chart-5: #f472b6;
        --sidebar: #1f2937;
        --sidebar-foreground: #f9fafb;
        --sidebar-primary: #60a5fa;
        --sidebar-primary-foreground: #0b1224;
        --sidebar-accent: #111827;
        --sidebar-accent-foreground: #f9fafb;
        --sidebar-border: #1f2937;
        --sidebar-ring: #4b5563;
      }
    `;

    document.head.appendChild(style);
    return () => style.remove();
  };

  return (
    <div className="bg-gray-100 min-h-full p-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Export Button */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-black mb-1">Export Options</h2>
              <p className="text-gray-600 text-sm">
                Export both A3-Front and A3-Back as a combined PDF file
              </p>
            </div>
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                isExporting
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
