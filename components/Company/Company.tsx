import Image from "next/image";
import Wrapper from "../UI/Wrapper";
import CardInfo from "../UI/CardInfo";

export default function Company() {
  return (
    <section className="xs:margins flex flex-col items-center">
      <div
        className="
      max bg-peach md:h-[480px] xs:rounded-[15px] flex items-center md:gap-10 relative
      md:justify-between justify-start md:flex-row flex-col overflow-hidden"
      >
        <div className="md:pl-[94px] md:px-0 px-[58px] text-white md:py-0 xs:py-[64px] md:text-start text-center py-20 z-50">
          <h2 className="pb-8">About Us</h2>
          <p className="max-w-[458px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <Image
          src="/about/desktop/image-about-hero.jpg"
          width={476}
          height={480}
          className="rounded-tr-[15px] rounded-br-[15px] lg:w-[476px] md:w-[350px] md:inline-block hidden h-[480px] object-cover"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/about/tablet/image-about-hero.jpg"
          width={689}
          height={320}
          className="rounded-tl-[15px] rounded-tr-[15px]  md:hidden object-cover order-first w-[719px] xs:inline-block hidden"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/about/mobile/image-about-hero.jpg"
          width={480}
          height={320}
          className="object-cover order-first inline-block xs:hidden w-[500px] h-[320px]"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/about/desktop/bg-pattern-hero-about-desktop.svg"
          fill
          alt="pattern"
          className="md:object-none object-contain rounded-[15px] absolute xs:inline-block hidden md:translate-x-[-245px] xs:translate-x-[-220px] z-40"
          quality={100}
        />

        <Image
          src="/about/mobile/bg-pattern-hero-about-mobile.svg"
          fill
          alt="pattern"
          className="absolute inline-block xs:hidden translate-y-[350px] translate-x-[100px] object-cover scale-[150%]"
          quality={100}
        />
      </div>

      <div
        className="
      max bg-[#FDF3F0] md:h-[640px] xs:rounded-[15px] flex items-center md:gap-10 relative
      md:justify-between justify-start md:flex-row-reverse flex-col overflow-hidden md:mt-[160px] xs:mt-[120px]"
      >
        <div className="md:pr-[94px] md:px-0 px-[58px] md:py-0 xs:py-[64px] md:text-start text-center py-20 z-50">
          <h2 className="pb-8 text-peach">World-class talent</h2>
          <p className="max-w-[458px]">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
            <br />
            <br /> Clients have always been impressed with our high-quality
            outcomes that encapsulates their brand’s story and mission.
          </p>
        </div>
        <Image
          src="/about/desktop/image-world-class-talent.jpg"
          width={476}
          height={713}
          className="rounded-tr-[15px] rounded-br-[15px] lg:w-[476px] md:w-[350px] md:inline-block hidden h-[713px] object-cover"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/about/tablet/image-world-class-talent.jpg"
          width={689}
          height={320}
          className="rounded-tl-[15px] rounded-tr-[15px]  md:hidden object-cover order-first w-[719px] xs:inline-block hidden"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/about/mobile/image-world-class-talent.jpg"
          width={480}
          height={320}
          className="object-cover order-first inline-block xs:hidden w-[500px] h-[320px]"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/shared/desktop/bg-pattern-three-circles.svg"
          fill
          alt="pattern"
          className="rounded-[15px] absolute xs:translate-x-[80px] translate-x-[20px] md:translate-y-0 xs:translate-y-[50px] translate-y-[150px] z-40 object-contain"
          quality={100}
        />
      </div>

      <Wrapper className="w-full justify-center">
        <div className="max flex md:flex-row flex-col md:gap-[30px] xs:gap-20 gap-[42px] md:mt-40 xs:mt-[140px] mt-[120px] justify-evenly  md:items-start items-center">
          <CardInfo
            title="CANADA"
            button
            ilustration="/shared/desktop/illustration-canada.svg"
            pattern="/shared/desktop/bg-pattern-small-circle.svg"
          />

          <CardInfo
            title="AUSTRALIA"
            button
            ilustration="/shared/desktop/illustration-australia.svg"
            pattern="/shared/desktop/bg-pattern-small-circle.svg"
            rotate
          />

          <CardInfo
            title="UNITED KINGDOM"
            button
            ilustration="/shared/desktop/illustration-united-kingdom.svg"
            pattern="/home/desktop/bg-pattern-hero-home.svg"
          />
        </div>
      </Wrapper>

      <div
        className="
      max bg-[#FDF3F0] md:h-[640px] xs:rounded-[15px] flex items-center md:gap-10 relative
      md:justify-between justify-start md:flex-row flex-col overflow-hidden md:mt-[160px] mt-[120px]"
      >
        <div className="md:pl-[94px] md:px-0 px-[58px] md:py-0 xs:py-[64px] md:text-start text-center py-20 z-50">
          <h2 className="pb-8 text-peach">The real deal</h2>
          <p className="max-w-[458px]">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. We strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
            <br />
            <br /> We are visual storytellers in appealing and captivating ways.
            By combining business and marketing strategies.
          </p>
        </div>
        <Image
          src="/about/desktop/image-real-deal.jpg"
          width={476}
          height={713}
          className="rounded-tr-[15px] rounded-br-[15px] lg:w-[476px] md:w-[350px] md:inline-block hidden h-[713px] object-cover"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/about/tablet/image-real-deal.jpg"
          width={689}
          height={320}
          className="rounded-tl-[15px] rounded-tr-[15px]  md:hidden object-cover order-first w-[719px] xs:inline-block hidden"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/about/mobile/image-real-deal.jpg"
          width={480}
          height={320}
          className="object-cover order-first inline-block xs:hidden w-[500px] h-[320px]"
          alt="aboutus image"
          quality={100}
        />

        <Image
          src="/shared/desktop/bg-pattern-three-circles.svg"
          fill
          alt="pattern"
          className="rounded-[15px] absolute xs:translate-x-[180px] translate-x-[20px] md:translate-y-0 xs:translate-y-[50px] translate-y-[150px] z-40 object-contain"
          quality={100}
        />
      </div>
    </section>
  );
}
