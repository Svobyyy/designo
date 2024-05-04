import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex items-center flex-col paddings mt-[160px]">
      <div className="md:pt-[144px] pt-[64px] flex justify-between items-center max md:flex-row flex-col">
        <Link href={""}>
          <Image
            src={"/shared/desktop/logo-light.png"}
            width={202}
            height={27}
            quality={100}
            alt="footer logo"
          />
        </Link>

        <ul className="md:gap-[42px] gap-8 md:pt-0 pt-8 flex leading-[14px] font-normal text-[14px] tracking-[2px] uppercase md:flex-row flex-col md:text-start text-center">
          <li>
            <Link
              href="/company"
              className="after:w-full after:h-[1px] after:bg-white after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
            >
              Our Company
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className="after:w-full after:h-[1px] after:bg-white after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="after:w-full after:h-[1px] after:bg-white after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="max w-full h-[1px] bg-white opacity-10 mt-10" />

      <div className="flex md:justify-between w-full max margins md:pt-[31px] pt-[40px] md:pb-[72px] pb-[64px] md:flex-row flex-col justify-start text-center md:gap-0 gap-10">
        <div className="opacity-50">
          <p className="font-bold">Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>

        <div className="opacity-50">
          <p className="font-bold">Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>

        <ul className="flex gap-4 items-end md:justify-start justify-center">
          <li>
            <a href="" target="_blank">
              <Image
                src={"/shared/desktop/icon-facebook.svg"}
                width={24}
                height={24}
                alt="socail"
                quality={100}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <Image
                src={"/shared/desktop/icon-youtube.svg"}
                width={24}
                height={24}
                alt="socail"
                quality={100}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <Image
                src={"/shared/desktop/icon-twitter.svg"}
                width={24}
                height={24}
                alt="socail"
                quality={100}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <Image
                src={"/shared/desktop/icon-pinterest.svg"}
                width={24}
                height={24}
                alt="socail"
                quality={100}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <Image
                src={"/shared/desktop/icon-instagram.svg"}
                width={24}
                height={24}
                alt="socail"
                quality={100}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
