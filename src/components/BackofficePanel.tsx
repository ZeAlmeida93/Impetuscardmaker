import { FormData } from '../App';

interface BackofficePanelProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export default function BackofficePanel({ formData, setFormData }: BackofficePanelProps) {
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-full p-8">
      <div className="w-full max-w-[443px]">
        <div className="flex flex-col gap-[5px] items-center text-black text-center mb-[34px]">
          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[51.678px] text-[29.069px]">
            Impetus CardMaker
          </p>
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[32.954px] text-[18.537px]">
            Insert your text and generate your pdf
          </p>
        </div>

        <div className="flex flex-col gap-[9px] mb-[41px]">
          {/* Address */}
          <div className="flex items-center justify-between w-full">
            <label className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-nowrap text-zinc-800 shrink-0">
              Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-[353px] h-[47px] rounded-[5px] border border-solid border-zinc-400 px-3 py-2"
            />
          </div>

          {/* Person */}
          <div className="flex items-center justify-between w-full">
            <label className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-nowrap text-zinc-800 shrink-0">
              Person
            </label>
            <input
              type="text"
              value={formData.person}
              onChange={(e) => handleInputChange('person', e.target.value)}
              className="w-[353px] h-[47px] rounded-[5px] border border-solid border-zinc-400 px-3 py-2"
            />
          </div>

          {/* Text A */}
          <div className="flex items-center justify-between w-full">
            <label className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-nowrap text-zinc-800 shrink-0">
              Text A
            </label>
            <textarea
              value={formData.textA}
              onChange={(e) => handleInputChange('textA', e.target.value)}
              className="w-[353px] h-[189px] rounded-[5px] border border-solid border-zinc-400 px-3 py-2 resize-none"
            />
          </div>

          {/* Text B */}
          <div className="flex items-center justify-between w-full">
            <label className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-nowrap text-zinc-800 shrink-0">
              Text B
            </label>
            <textarea
              value={formData.textB}
              onChange={(e) => handleInputChange('textB', e.target.value)}
              className="w-[353px] h-[183px] rounded-[5px] border border-solid border-zinc-400 px-3 py-2 resize-none"
            />
          </div>

          {/* Wishes */}
          <div className="flex items-center justify-between w-full">
            <label className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-nowrap text-zinc-800 shrink-0">
              Wishes
            </label>
            <input
              type="text"
              value={formData.wishes}
              onChange={(e) => handleInputChange('wishes', e.target.value)}
              className="w-[353px] h-[47px] rounded-[5px] border border-solid border-zinc-400 px-3 py-2"
            />
          </div>

          {/* Second Wishes */}
          <div className="flex items-center justify-between w-full">
            <label className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-nowrap text-zinc-800 shrink-0">
              <p className="mb-0">Second</p>
              <p>Wishes</p>
            </label>
            <input
              type="text"
              value={formData.secondWishes}
              onChange={(e) => handleInputChange('secondWishes', e.target.value)}
              className="w-[353px] h-[47px] rounded-[5px] border border-solid border-zinc-400 px-3 py-2"
            />
          </div>

          {/* Signature Person */}
          <div className="flex items-center justify-between w-full">
            <label className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-nowrap text-zinc-800 shrink-0">
              <p className="mb-0">Signature</p>
              <p>Person</p>
            </label>
            <input
              type="text"
              value={formData.signaturePerson}
              onChange={(e) => handleInputChange('signaturePerson', e.target.value)}
              className="w-[353px] h-[47px] rounded-[5px] border border-solid border-zinc-400 px-3 py-2"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-zinc-700 h-[36px] rounded-[5px] w-[255.5px] border border-gray-500 border-solid hover:bg-zinc-600 cursor-pointer transition-colors">
            <div className="flex h-[36px] items-center justify-center px-[15px] py-[10px]">
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[16px] text-[12px] text-center text-nowrap text-white">
                Update Layout (See Preview)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
