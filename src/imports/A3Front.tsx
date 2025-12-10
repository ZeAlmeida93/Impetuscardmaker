import clsx from "clsx";
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div style={{ "--transform-inner-width": "16", "--transform-inner-height": "17" } as React.CSSProperties} className={additionalClassNames}>
      {children}
    </div>
  );
}
type A3FrontHelper2Props = {
  additionalClassNames?: string;
};

function A3FrontHelper2({ children, additionalClassNames = "" }: React.PropsWithChildren<A3FrontHelper2Props>) {
  return (
    <div style={{ "--transform-inner-width": "388.9375", "--transform-inner-height": "551" } as React.CSSProperties} className={clsx("absolute flex h-[388.941px] items-center justify-center translate-x-[-50%] w-[551px]", additionalClassNames)}>
      <div className="flex-none rotate-[90deg]">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("h-[17px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[normal] text-[14px] text-black text-center text-nowrap whitespace-pre">{children}</p>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative shrink-0 w-[263px]", additionalClassNames)}>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[16px] text-[9px] text-black text-center">{children}</p>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute bottom-[-1.47%] left-0 right-[-1.56%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          {children}
        </svg>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute bottom-0 left-0 right-[-1.56%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 38">
          {children}
        </svg>
      </div>
    </div>
  );
}
type A3FrontHelper1Props = {
  additionalClassNames?: string;
};

function A3FrontHelper1({ additionalClassNames = "" }: A3FrontHelper1Props) {
  return (
    <Wrapper4 additionalClassNames={clsx("absolute flex h-[16px] items-center justify-center top-[808px] w-[17px]", additionalClassNames)}>
      <div className="flex-none rotate-[270deg]">
        <Frame />
      </div>
    </Wrapper4>
  );
}
type A3FrontHelperProps = {
  additionalClassNames?: string;
};

function A3FrontHelper({ additionalClassNames = "" }: A3FrontHelperProps) {
  return (
    <Wrapper4 additionalClassNames={clsx("absolute flex h-[16px] items-center justify-center top-[19px] w-[17px]", additionalClassNames)}>
      <div className="flex-none rotate-[90deg]">
        <Frame />
      </div>
    </Wrapper4>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <Wrapper additionalClassNames={clsx("absolute h-[38px] top-[404px] w-[16px]", additionalClassNames)}>
      <g id="Frame 3">
        <path d="M16 0V15" id="Vector 1" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
        <path d="M15 17L1.19209e-07 17" id="Vector 2" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
        <path d="M16 19V34" id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
      </g>
    </Wrapper>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("absolute h-[17px] top-[18px] w-[16px]", additionalClassNames)}>
      <g id="Trim Cutters">
        <path d="M16 0V15" id="Vector 1" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
        <path d="M15 17L1.19209e-07 17" id="Vector 2" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
      </g>
    </Wrapper1>
  );
}
type SignaturePersonTextProps = {
  text: string;
};

function SignaturePersonText({ text }: SignaturePersonTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-[263px]">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[16px] text-[8px] text-black text-center">{text}</p>
    </div>
  );
}
type SecondWishesTextProps = {
  text: string;
};

function SecondWishesText({ text }: SecondWishesTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-[263px]">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[16px] text-[9px] text-black text-center">{text}</p>
    </div>
  );
}
type WishesTextProps = {
  text: string;
};

function WishesText({ text }: WishesTextProps) {
  return <Wrapper2 additionalClassNames="h-[16px]">{text}</Wrapper2>;
}

function TextSection() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Wrapper2 additionalClassNames="h-[80px]">
        {"Nous avons le plaisir de vous offrir, pour ce Noel, une tenue d’intérieur IMPETUS."}
        <br aria-hidden="true" />
        {"Cette tenue d’intérieur n’est pas seulement un pyjama, c’est un symbole de confort unique, de couleurs vibrantes et d’un choix plaisir."}
      </Wrapper2>
      <div className="h-[160px] relative shrink-0 w-[263px]">
        <div className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[16px] text-[9px] text-black text-center">
          <p className="mb-0">
            {`Fabriqué en maille double face à l'extérieur offre un confort thermique, durabilité et des couleurs vives après lavage ; à l'intérieur le tissue apporte douceur et bien-être.`}
            <br aria-hidden="true" />
            {"Créé pour ceux qui apprécient l’exclusivité et le bien-être, il représente l’avenir de la mode durable."}
            <br aria-hidden="true" />
            {"Nous souhaitons que chaque détail vous transmette la chaleur et l’inspiration qui nous animent et que vous vivrez cette expérience unique."}
          </p>
          <p className="whitespace-pre-wrap">{`Vous pourrez, ainsi, mieux partager cette belle expérience avec vos clients  `}</p>
        </div>
      </div>
    </div>
  );
}

function VariablePerson() {
  return <Wrapper3 additionalClassNames="w-[47px]">{`{Nom}`}</Wrapper3>;
}
type AddressTextProps = {
  text: string;
};

function AddressText({ text }: AddressTextProps) {
  return <Wrapper3 additionalClassNames="w-[35px]">{text}</Wrapper3>;
}

function Frame() {
  return (
    <Wrapper1 additionalClassNames="h-[17px] relative w-[16px]">
      <g id="Frame 6">
        <path d="M16 0V15" id="Vector 1" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
        <path d="M15 17L1.19209e-07 17" id="Vector 2" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
      </g>
    </Wrapper1>
  );
}

export default function A3Front() {
  return (
    <div className="bg-white relative size-full" data-name="A3-Front">
      <A3FrontHelper2 additionalClassNames="left-[calc(50%-274.5px)] top-[32px]">
        <div className="bg-[rgba(234,234,234,0)] h-[551px] overflow-clip relative w-[388.941px]" data-name="A5 - 1">
          <div className="absolute content-stretch flex flex-col gap-[35px] items-center left-[calc(50%+0.03px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[263px]">
            <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="Heading">
              <AddressText text="Cher" />
              <VariablePerson />
            </div>
            <div className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-full" data-name="Copy Section">
              <TextSection />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Signature Section">
                <WishesText text="Joyeuses fêtes de fin d’année" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Last Footer">
                  <SecondWishesText text="Bien à vous" />
                  <SignaturePersonText text="Alain Gerault" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </A3FrontHelper2>
      <A3FrontHelper2 additionalClassNames="left-[calc(50%+274.5px)] top-[32px]">
        <div className="bg-[rgba(234,234,234,0)] h-[551px] overflow-clip relative w-[388.941px]" data-name="A5 - 3">
          <div className="absolute content-stretch flex flex-col gap-[35px] items-center left-[calc(50%+0.03px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[263px]">
            <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="Heading">
              <AddressText text="Cher" />
              <VariablePerson />
            </div>
            <div className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-full" data-name="Copy Section">
              <TextSection />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Signature Section">
                <WishesText text="Joyeuses fêtes de fin d’année" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Last Footer">
                  <SecondWishesText text="Bien à vous" />
                  <SignaturePersonText text="Alain Gerault" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </A3FrontHelper2>
      <Helper additionalClassNames="left-[32px]" />
      <Helper additionalClassNames="left-[580px]" />
      <A3FrontHelper additionalClassNames="left-[596px]" />
      <A3FrontHelper additionalClassNames="left-[1143px]" />
      <A3FrontHelper2 additionalClassNames="left-[calc(50%-274.5px)] top-[421px]">
        <div className="bg-[rgba(234,234,234,0)] h-[551px] overflow-clip relative w-[388.941px]" data-name="A5 - 2">
          <div className="absolute content-stretch flex flex-col gap-[35px] items-center left-[calc(50%+0.03px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[263px]">
            <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="Heading">
              <AddressText text="Cher" />
              <VariablePerson />
            </div>
            <div className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-full" data-name="Copy Section">
              <TextSection />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Signature Section">
                <WishesText text="Joyeuses fêtes de fin d’année" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Last Footer">
                  <SecondWishesText text="Bien à vous" />
                  <SignaturePersonText text="Alain Gerault" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </A3FrontHelper2>
      <A3FrontHelper2 additionalClassNames="left-[calc(50%+274.5px)] top-[421px]">
        <div className="bg-[rgba(234,234,234,0)] h-[551px] overflow-clip relative w-[388.941px]" data-name="A5 - 4">
          <div className="absolute content-stretch flex flex-col gap-[35px] items-center left-[calc(50%+0.03px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[263px]">
            <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="Heading">
              <AddressText text="Cher" />
              <VariablePerson />
            </div>
            <div className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-full" data-name="Copy Section">
              <TextSection />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Signature Section">
                <WishesText text="Joyeuses fêtes de fin d’année" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Last Footer">
                  <SecondWishesText text="Bien à vous" />
                  <SignaturePersonText text="Alain Gerault" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </A3FrontHelper2>
      <div className="absolute flex h-[38px] items-center justify-center left-[596px] top-[400px] w-[16px]">
        <div className="flex-none rotate-[180deg]">
          {[...Array(2).keys()].map((_, i) => (
            <Wrapper additionalClassNames="h-[38px] relative w-[16px]">
              <g id="Frame 7">
                <path d="M16 0V15" id="Vector 1" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
                <path d="M15 17L1.19209e-07 17" id="Vector 2" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
                <path d="M16 19V34" id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
              </g>
            </Wrapper>
          ))}
        </div>
      </div>
      <div className="absolute flex h-[38px] items-center justify-center left-[1143px] top-[400px] w-[16px]">
        <div className="flex-none rotate-[180deg]" />
      </div>
      <div className="absolute h-0 left-[32px] top-[19px] w-[13px]" />
      <div className="absolute h-0 left-[580px] top-[19px] w-[13px]" />
      <Helper1 additionalClassNames="left-[32px]" />
      <Helper1 additionalClassNames="left-[580px]" />
      <A3FrontHelper1 additionalClassNames="left-[31px]" />
      <A3FrontHelper1 additionalClassNames="left-[579px]" />
      <div className="absolute flex h-[17px] items-center justify-center left-[596px] top-[808px] w-[16px]">
        <div className="flex-none rotate-[180deg]">
          <Frame />
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[1143px] top-[807.5px] w-[16px]">
        <div className="flex-none rotate-[180deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}