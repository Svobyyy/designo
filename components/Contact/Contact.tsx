import Image from "next/image";
import CardInfo from "../UI/CardInfo";
import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";

export default function Contact() {
  return (
    <section className="xs:margins flex flex-col items-center">
      <div
        className="
      max bg-peach md:h-[480px] xs:rounded-[15px] flex items-center xs:gap-10 gap-12 relative
      justify-start md:flex-row flex-col overflow-hidden"
      >
        <div className="md:pl-[94px] md:px-0 xs:px-[58px] px-[24px] text-white md:py-0 xs:py-[64px] md:text-start text-center pt-[72px] z-50 flex-1 xs:pb-0">
          <h2 className="pb-8">Contact Us</h2>
          <p className="max-w-[458px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <form
          className="z-50 outline-none flex flex-col gap-[25px] w-full 
        md:max-w-[380px] md:mr-[96px] md:p-0 xs:px-[58px] px-[24px] 
        flex-1"
        >
          <input
            type="text"
            className="bg-transparent border-b border-white text-white font-medium leading-[26px] placeholder:text-white placeholder:opacity-50 pb-[11px]
            outline-none focus:border-b-[3px] focus:placeholder:opacity-100 transition-all origin-bottom
            pl-4"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="bg-transparent border-b border-white text-white font-medium leading-[26px] placeholder:text-white placeholder:opacity-50 pb-[11px]
            outline-none focus:border-b-[3px] focus:placeholder:opacity-100 transition-all origin-bottom
            pl-4"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            className="bg-transparent border-b border-white text-white font-medium leading-[26px] placeholder:text-white placeholder:opacity-50 pb-[11px]
            outline-none focus:border-b-[3px] focus:placeholder:opacity-100 transition-all origin-bottom
            pl-4"
            placeholder="Phone"
            required
          />
          <textarea
            className="bg-transparent border-b border-white text-white font-medium leading-[26px] placeholder:text-white placeholder:opacity-50 pb-[11px]
            outline-none focus:border-b-[3px] focus:placeholder:opacity-100 transition-all origin-bottom resize-none
            pl-4"
            placeholder="Your Message"
            required
            rows={3}
          />
          <div className="xs:justify-end justify-center flex md:mb-0 mb-[72px] pt-5">
            <Button title="SUBMIT" dark />
          </div>
        </form>

        <Image
          src="/contact/desktop/bg-pattern-hero-desktop.svg"
          fill
          alt="pattern"
          className="object-none overflow-visible rounded-[15px] absolute xs:inline-block hidden md:translate-x-[-250px] md:translate-y-[-70px] xs:translate-y-[-200px] xs:translate-x-[-100px] z-40"
          quality={100}
        />

        <Image
          src="/contact/mobile/bg-pattern-hero-contact-mobile.svg"
          fill
          alt="pattern"
          className="absolute inline-block xs:hidden object-cover translate-x-[25%] overflow-visible"
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
    </section>
  );
}
