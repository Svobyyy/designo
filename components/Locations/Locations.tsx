import Image from "next/image";

export default function Locations() {
  return (
    <section className="xs:margins flex flex-col items-center">
      <div
        className="
        max md:h-[326px] xs:rounded-[15px] flex items-center lg:gap-[30px] md:gap-[8px] xs:gap-[24px]
        md:justify-between justify-start md:flex-row flex-col overflow-hidden"
      >
        <div
          className="
        xs:rounded-[15px] w-full lg:pl-[94px] md:pl-[30px] md:pr-[10px] md:px-0 px-[58px] xs:pr-[40px] 
        text-white md:py-0 xs:py-[64px] xs:text-start text-center py-20 z-50
        bg-[#FDF3F0] h-full flex flex-col justify-center relative"
        >
          <h2 className="pb-6 text-peach">Canada</h2>
          <div className="flex justify-between max-w-[550px] xs:gap-4 gap-6 xs:flex-row flex-col">
            <p className="max-w-[458px] text-black flex-1">
              <span className="font-bold">Designo Central Office</span> <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </p>
            <p className="max-w-[458px] text-black flex-1">
              <span className="font-bold">Contact</span>
              <br />
              P : +1 253-863-8967
              <br />M : contact@designo.co
            </p>
          </div>

          <Image
            src="/shared/desktop/bg-pattern-two-circles.svg"
            fill
            alt="pattern"
            className="object-cover rounded-[15px] absolute z-40"
            quality={100}
          />
        </div>
        <Image
          src="/locations/desktop/image-map-canada.png"
          width={350}
          height={326}
          className="rounded-[15px] md:w-[350px] md:inline-block hidden h-[326px] object-cover"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/locations/tablet/image-map-canada.png"
          width={689}
          height={320}
          className="xs:rounded-[15px] md:hidden inline-block object-cover order-first w-[719px] xs:h-auto h-[320px]"
          alt="aboutus image"
          quality={100}
        />

        {/* <Image
          src="/about/mobile/bg-pattern-hero-about-mobile.svg"
          fill
          alt="pattern"
          className="absolute inline-block xs:hidden translate-y-[350px] translate-x-[100px] object-cover scale-[150%]"
          quality={100}
        /> */}
      </div>

      <div
        className="
        max md:h-[326px] xs:rounded-[15px] flex items-center lg:gap-[30px] md:gap-[8px] xs:gap-[24px]
        md:justify-between justify-start md:flex-row-reverse flex-col overflow-hidden md:mt-[32px] xs:mt-[120px]"
      >
        <div
          className="
        xs:rounded-[15px] w-full lg:pl-[94px] md:pl-[30px] md:pr-[10px] md:px-0 px-[58px] xs:pr-[40px] 
        text-white md:py-0 xs:py-[64px] xs:text-start text-center py-20 z-50
        bg-[#FDF3F0] h-full flex flex-col justify-center relative"
        >
          <h2 className="pb-6 text-peach">Australia</h2>
          <div className="flex justify-between max-w-[550px] xs:gap-4 gap-6 xs:flex-row flex-col">
            <p className="max-w-[458px] text-black flex-1">
              <span className="font-bold">Designo AU Office</span> <br />
              19 Balonne Street
              <br />
              New South Wales 2443
            </p>
            <p className="max-w-[458px] text-black flex-1">
              <span className="font-bold">Contact</span>
              <br />
              P : (02) 6720 9092
              <br />M : contact@designo.au
            </p>
          </div>

          <Image
            src="/shared/desktop/bg-pattern-two-circles.svg"
            fill
            alt="pattern"
            className="object-cover rounded-[15px] absolute z-40"
            quality={100}
          />
        </div>
        <Image
          src="/locations/desktop/image-map-australia.png"
          width={350}
          height={326}
          className="rounded-[15px] md:w-[350px] md:inline-block hidden h-[326px] object-cover"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/locations/tablet/image-map-australia.png"
          width={689}
          height={320}
          className="xs:rounded-[15px] md:hidden inline-block object-cover order-first w-[719px] xs:h-auto h-[320px]"
          alt="aboutus image"
          quality={100}
        />
      </div>

      <div
        className="
        max md:h-[326px] xs:rounded-[15px] flex items-center lg:gap-[30px] md:gap-[8px] xs:gap-[24px]
        md:justify-between justify-start md:flex-row flex-col overflow-hidden md:mt-[32px] xs:mt-[120px]"
      >
        <div
          className="
        xs:rounded-[15px] w-full lg:pl-[94px] md:pl-[30px] md:pr-[10px] md:px-0 px-[58px] xs:pr-[40px] 
        text-white md:py-0 xs:py-[64px] xs:text-start text-center py-20 z-50
        bg-[#FDF3F0] h-full flex flex-col justify-center relative"
        >
          <h2 className="pb-6 text-peach">United Kingdom</h2>
          <div className="flex justify-between max-w-[550px] xs:gap-4 gap-6 xs:flex-row flex-col">
            <p className="max-w-[458px] text-black flex-1">
              <span className="font-bold">Designo UK Office</span> <br />
              13 Colorado Way <br />
              Rhyd-y-fro SA8 9GA
            </p>
            <p className="max-w-[458px] text-black flex-1">
              <span className="font-bold">Contact</span>
              <br />
              P : 078 3115 1400
              <br />M : contact@designo.uk
            </p>
          </div>

          <Image
            src="/shared/desktop/bg-pattern-two-circles.svg"
            fill
            alt="pattern"
            className="object-cover rounded-[15px] absolute z-40"
            quality={100}
          />
        </div>
        <Image
          src="/locations/desktop/image-map-united-kingdom.png"
          width={350}
          height={326}
          className="rounded-[15px] md:w-[350px] md:inline-block hidden h-[326px] object-cover"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/locations/tablet/image-map-uk.png"
          width={689}
          height={320}
          className="xs:rounded-[15px] md:hidden inline-block object-cover order-first w-[719px] xs:h-auto h-[320px]"
          alt="aboutus image"
          quality={100}
        />
      </div>
    </section>
  );
}
