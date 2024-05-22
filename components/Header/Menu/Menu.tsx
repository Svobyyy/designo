"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Image
        src="/shared/mobile/icon-hamburger.svg"
        width={24}
        height={20}
        alt="hamburger"
        onClick={() => setMenu(true)}
        className={`md:hidden ${
          !menu ? "inline-block" : "hidden"
        } cursor-pointer`}
      />

      <Image
        src="/shared/mobile/icon-close.svg"
        width={20}
        height={20}
        alt="hamburger"
        onClick={() => setMenu(false)}
        className={`md:hidden ${
          menu ? "inline-block" : "hidden"
        } cursor-pointer`}
      />

      <ul
        className={`gap-[32px] md:hidden flex-col flex transition-all uppercase w-full paddings z-[1000]
        ${
          !menu ? "opacity-0" : "opacity-100"
        } text-[24px] tracking-[2px] leading-[25px]
        absolute bottom-0 left-0 translate-y-[100%] bg-black text-white py-12`}
      >
        <li onClick={() => setMenu(false)}>
          <Link
            href="/company"
            className="after:w-full after:h-[1px] after:bg-black after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
          >
            Our Company
          </Link>
        </li>
        <li onClick={() => setMenu(false)}>
          <Link
            href="/locations"
            className="after:w-full after:h-[1px] after:bg-black after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
          >
            Locations
          </Link>
        </li>
        <li onClick={() => setMenu(false)}>
          <Link
            href="/contact"
            className="after:w-full after:h-[1px] after:bg-black after:inline-block after:opacity-0 
              after:absolute after:bottom-0 after:left-0 relative hover:after:opacity-100 after:transition-all"
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
