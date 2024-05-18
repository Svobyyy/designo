import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";

type props = {
  extra?: boolean;
};

export default function Footer({ extra }: props) {
  return (
    <section className="relative flex-1 flex flex-col justify-end">
      {extra && (
        <section className="flex justify-center items-center md:mt-[160px] xs:mt-0 mt-[-69px] margins text-white">
          <div className="flex md:flex-row flex-col md:justify-between justify-center items-center bg-peach md:px-[95px] px-5 max w-full md:h-[292px] md:py-0 xs:py-[57px] py-[64px] rounded-[15px] md:translate-y-[72px]  translate-y-[190px] md:gap-5  gap-8">
            <div className="md:max-w-[460px] max-w-[440px] md:text-start text-center md:flex-1">
              <h2 className="mb-4">
                Let’s talk about <br /> your project
              </h2>
              <p>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>

            <Link href="contact"><Button title="GET IN TOUCH" dark /></Link>

            <Image
              src="/shared/desktop/bg-pattern-call-to-action.svg"
              alt="extra pattern"
              fill
              className="object-none rounded-[15px] z-[-1]"
            />
          </div>
        </section>
      )}

      <footer
        className={`bg-black text-white flex items-center flex-col paddings w-full ${
          !extra && "md:mt-[160px] mt-[120px]"
        }`}
      >
        <div
          className={`md:pt-[144px] ${
            extra ? "pt-[253px]" : "pt-[64px]"
          }  flex justify-between items-center max md:flex-row flex-col`}
        >
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
    </section>
  );
}
