import clsx from "clsx";
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="font-['Montserrat:Bold',sans-serif] font-['Montserrat:Regular',sans-serif] font-bold font-normal leading-[20px] relative shrink-0 text-[0px] text-[14px] text-nowrap text-zinc-800 whitespace-pre">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
      <InputTextAddress additionalClassNames="h-[47px]" />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-nowrap text-zinc-800 whitespace-pre">{text}</p>
      <InputTextAddress additionalClassNames="h-[47px]" />
    </div>
  );
}
type InputTextAddressProps = {
  additionalClassNames?: string;
};

function InputTextAddress({ additionalClassNames = "" }: InputTextAddressProps) {
  return (
    <div className={clsx("relative rounded-[5px] shrink-0 w-[353px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-solid border-zinc-400 inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

export default function BackofficeDesktopView() {
  return (
    <div className="bg-white relative size-full" data-name="Backoffice-Desktop View">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[498px] py-[58px] relative size-full">
          <div className="content-stretch flex flex-col gap-[34px] items-center relative shrink-0 w-[443px]">
            <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 text-black text-center w-[352px]">
              <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[51.678px] relative shrink-0 text-[29.069px] w-full">Impetus CardMaker</p>
              <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[32.954px] relative shrink-0 text-[18.537px] w-full">Insert your text and generate your pdf</p>
            </div>
            <div className="content-stretch flex flex-col gap-[41px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full">
                <Text text="Address" />
                <Text text="Person" />
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-nowrap text-zinc-800 whitespace-pre">Text A</p>
                  <InputTextAddress additionalClassNames="h-[189px]" />
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-nowrap text-zinc-800 whitespace-pre">Text B</p>
                  <InputTextAddress additionalClassNames="h-[183px]" />
                </div>
                <Text text="Wishes" />
                <Helper text="Second" text1="Wishes" />
                <Helper text="Signature" text1="Person" />
              </div>
              <div className="bg-zinc-700 h-[36px] relative rounded-[5px] shrink-0 w-[255.5px]">
                <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip px-[15px] py-[10px] relative rounded-[inherit] w-[255.5px]">
                  <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Generate PDF</p>
                </div>
                <div aria-hidden="true" className="absolute border border-gray-500 border-solid inset-0 pointer-events-none rounded-[5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}