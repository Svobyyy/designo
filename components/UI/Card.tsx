import Image from "next/image";
import Link from "next/link";

type props = {
  title: string;
  big?: boolean;
  className?: string;
};

export default function Card({ title, big, className }: props) {
  return (
    <Link
      href={`${title}`}
      className={`
      ${className}
      md:max-w-[541px] max-w-full w-full relative text-white 
      ${big ? "h-[640px]" : "md:h-[308px] xs:h-[200px] h-[250px]"}
      flex xs:gap-6 gap-3 flex-col justify-center items-center text-center
      after:transition-all before:transition-all rounded-[15px] cursor-pointer
      before:absolute before:w-full before:h-full before:bg-black before:opacity-50 hover:before:opacity-0 before:rounded-[15px]
      after:absolute after:w-full after:h-full after:bg-peach after:-z-10 after:opacity-0 after:rounded-[15px]
      hover:after:opacity-80

    `}
    >
      <Image
        src={
          big ? `/home/desktop/${title}-big.jpg` : `/home/desktop/${title}.jpg`
        }
        fill
        quality={100}
        className="absolute -z-10 object-cover rounded-[15px] md:inline-block hidden"
        alt={`card of ${title}`}
      />

      <Image
        src={`/home/tablet/${title}.jpg`}
        fill
        quality={100}
        className="absolute -z-10 object-cover rounded-[15px] md:hidden xs:inline-block hidden"
        alt={`card of ${title}`}
      />

      <Image
        src={`/home/mobile/${title}.jpg`}
        fill
        quality={100}
        className="absolute -z-10 object-cover rounded-[15px] xs:hidden inline-block"
        alt={`card of ${title}`}
      />

      <h2 className="uppercase">{title}</h2>

      <div className="flex justify-center items-center gap-5">
        <p className="tracking-[5px] text-[15px]">VIEW PROJECTS</p>
        <Image
          src={"/shared/desktop/icon-right-arrow.svg"}
          width={8}
          height={16}
          quality={100}
          className="z-10"
          alt={`card of ${title}`}
        />
      </div>
    </Link>
  );
}
