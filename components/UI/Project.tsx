import Image from "next/image";

type props = {
  title: string;
  text: string;
  img: string;
  folder: string;
};

export default function Project({ title, text, img, folder }: props) {
  return (
    <div
      className="group bg-[#FDF3F0] hover:bg-peach hover:text-white hover:transition-colors transition-colors rounded-[15px]
      md:max-w-[350px] xs:w-full max-w-[350px] xs:max-w-full cursor-pointer flex md:flex-col xs:flex-row flex-col"
    >
      <Image
        src={`/${folder}/desktop/${img}`}
        width={350}
        height={320}
        quality={100}
        alt={`${title} image`}
        className="rounded-tl-[15px] md:rounded-bl-[0px] xs:rounded-bl-[15px] md:rounded-tr-[15px] xs:rounded-tr-[0px] rounded-tr-[15px]
        md:w-auto sm:w-[300px] xs:w-[220px] w-[350px] "
      />
      <div className="text-center flex justify-center items-center flex-col gap-4 p-8">
        <h3 className="text-peach group-hover:text-white uppercase">{title}</h3>
        <p className="max-w-[285px]">{text}</p>
      </div>
    </div>
  );
}
