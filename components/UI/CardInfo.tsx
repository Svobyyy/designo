import Image from "next/image";

type props = {
  rotate?: boolean;
  ilustration: string;
  pattern: string;
  title: string;
  description?: string;
  button?: string;
};

export default function CardInfo({
  rotate,
  ilustration,
  pattern,
  title,
  description,
  button,
}: props) {
  return (
    <div className="md:max-w-[350px] flex md:flex-col xs:flex-row flex-col items-center justify-center md:text-center xs:text-start text-center gap-[42px] xs:gap-8 md:gap-0">
      <div className="relative">
        <Image
          src={ilustration}
          width={202}
          height={202}
          alt={`${title} ilustration`}
          quality={100}
        />
        <Image
          src={pattern}
          width={202}
          height={202}
          alt="pattern"
          className={`absolute top-0 left-50 -z-10 ${rotate && "-rotate-90"}`}
          quality={100}
        />
      </div>

      {description && (
        <div className="max-w-[430px] w-full flex-1">
          <h3 className="md:pt-12 md:pb-8 xs:pb-3 pb-8 uppercase">{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
