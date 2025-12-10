import { useState } from 'react';
import BackofficePanel from './components/BackofficePanel';
import A3Preview from './components/A3Preview';
import { Toaster } from 'sonner@2.0.3';

export interface FormData {
  address: string;
  person: string;
  textA: string;
  textB: string;
  wishes: string;
  secondWishes: string;
  signaturePerson: string;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    address: 'Cher',
    person: '{Nom}',
    textA: `Nous avons le plaisir de vous offrir, pour ce Noel, une tenue d'intérieur IMPETUS.\nCette tenue d'intérieur n'est pas seulement un pyjama, c'est un symbole de confort unique, de couleurs vibrantes et d'un choix plaisir.`,
    textB: `Fabriqué en maille double face à l'extérieur offre un confort thermique, durabilité et des couleurs vives après lavage ; à l'intérieur le tissue apporte douceur et bien-être.\nCréé pour ceux qui apprécient l'exclusivité et le bien-être, il représente l'avenir de la mode durable.\nNous souhaitons que chaque détail vous transmette la chaleur et l'inspiration qui nous animent et que vous vivrez cette expérience unique.\nVous pourrez, ainsi, mieux partager cette belle expérience avec vos clients`,
    wishes: 'Joyeuses fêtes de fin d\'année',
    secondWishes: 'Bien à vous',
    signaturePerson: 'Alain Gerault'
  });

  const [activeView, setActiveView] = useState<'backoffice' | 'preview'>('backoffice');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Toaster position="top-right" richColors />
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="bg-white border-b border-gray-300 px-6 py-4 shadow-sm">
          <h1 className="text-black">Impetus CardMaker CMS</h1>
          <p className="text-gray-600 text-sm">Manage your A3 card content and export to PDF</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-300 px-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveView('backoffice')}
              className={`px-4 py-3 border-b-2 transition-colors ${
                activeView === 'backoffice'
                  ? 'border-zinc-700 text-zinc-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Backoffice Editor
            </button>
            <button
              onClick={() => setActiveView('preview')}
              className={`px-4 py-3 border-b-2 transition-colors ${
                activeView === 'preview'
                  ? 'border-zinc-700 text-zinc-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              A3 Preview
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {activeView === 'backoffice' ? (
            <BackofficePanel formData={formData} setFormData={setFormData} />
          ) : (
            <A3Preview formData={formData} />
          )}
        </div>
      </div>
    </div>
  );
}