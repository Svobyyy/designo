import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu/Menu";

export default function Header() {
  return (
    <header className="flex w-full justify-center items-center md:py-[64px] py-[32px] relative">
      <nav className="max flex justify-between items-center margins">
        <Link href={"/"}>
          <Image
            src="/shared/desktop/logo-dark.png"
            width={202}
            height={27}
            alt="logo"
            quality={100}
          />
        </Link>

        <ul className="gap-[42px] hidden md:flex leading-[14px] font-normal text-[14px] tracking-[2px];">
          <li>
            <Link
              href="/company"
              className="after:w-full after:h-[1px] after:bg-black after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
            >
              Our Company
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className="after:w-full after:h-[1px] after:bg-black after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="after:w-full after:h-[1px] after:bg-black after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Menu />
      </nav>
    </header>
  );
}
