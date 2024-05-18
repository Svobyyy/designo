import Image from "next/image";
import Wrapper from "@/components/UI/Wrapper";
import Card from "../UI/Card";
import CardInfo from "../UI/CardInfo";
import Button from "../UI/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="flex items-center flex-col sm:margins">
        <section
          className="
      max bg-peach md:h-[640px] h-[845px] xs:rounded-[15px]
      flex flex-col md:justify-center justify-start md:items-start items-center md:text-start text-center
      md:gap-10 gap-5
      md:pl-[95px] sm:pt-[60px] pt-[80px] paddings
      text-white relative  overflow-hidden
    "
        >
          <h1 className="max-w-[540px] text-white">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="max-w-[445px]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link href="company">
            <Button title={"LEARN MORE"} dark />
          </Link>

          <Image
            src={"/home/desktop/bg-pattern-hero-home.svg"}
            width={640}
            height={640}
            quality={100}
            alt="pattern"
            className="
          absolute right-0 md:top-0 top-[100px] object-scale-down
          translate-x-[125px] lg:md:translate-x-0
          "
          />

          <Image
            src={"/home/desktop/image-hero-phone.png"}
            width={624}
            height={913}
            quality={100}
            alt="pattern"
            className="
          absolute md:right-[-70px] right-0 md:bottom-[-250px] sm:bottom-[-300px] xs:bottom-[-230px] bottom-[-100px]  z-10
          "
          />
        </section>
      </main>

      <Wrapper>
        <div
          className="
        grid md:grid-cols-2 grid-cols-1 gap-6 items-center justify-center
        w-full max md:pt-[160px] pt-[120px] max"
        >
          <Card title="web design" big className="row-span-2 md:flex hidden" />
          <Card title="web design" className="md:hidden" />
          <Card title="app design" />
          <Card title="graphic design" />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="flex md:flex-row flex-col md:gap-[30px] xs:gap-12 gap-8 md:mt-40 xs:mt-[140px] mt-[120px] justify-start items-start">
          <CardInfo
            title="PASSIONATE"
            ilustration="/home/desktop/illustration-passionate.svg"
            pattern="/shared/desktop/bg-pattern-small-circle.svg"
            description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          />

          <CardInfo
            title="Resourceful"
            ilustration="/home/desktop/illustration-resourceful.svg"
            pattern="/shared/desktop/bg-pattern-small-circle.svg"
            description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
            rotate
          />

          <CardInfo
            title="Friendly"
            ilustration="/home/desktop/illustration-friendly.svg"
            pattern="/home/desktop/bg-pattern-hero-home.svg"
            description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          />
        </div>
      </Wrapper>
    </>
  );
}
