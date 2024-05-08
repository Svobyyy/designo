import Image from "next/image";
import { projects, projectsType } from "@/constants";
import Project from "../UI/Project";

type props = {
  title: string;
};

export default function ProjectsPage({ title }: props) {
  const project = projects[title.replace("%20", "") as keyof projectsType];

  return (
    <section className="flex items-center flex-col xs:margins">
      <div className="max bg-peach w-full xs:h-[252px] h-[320px] xs:rounded-[15px] relative flex items-center justify-center text-center text-white flex-col gap-6 paddings">
        <h1 className="capitalize">{title.replace("%20", " ")}</h1>
        <p className="max-w-[400px]">{project.text}</p>
        <Image
          src={`/${title.replace("%20", "")}/desktop/pattern-${title.replace(
            "%20",
            ""
          )}.svg`}
          alt="extra pattern"
          fill
          quality={100}
          className="object-none absolute right-0 top-0 xs:rounded-[15px]"
        />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-[30px] xs:gap-y-8 gap-y-[40px] max xs:p-0 paddings pt-[96px] xs:pt-[120px] md:pt-[160px] xs:justify-items-start justify-items-center">
        {project.projects.map(({ title: projectTitle, text, img }) => {
          return (
            <Project
              key={projectTitle}
              title={projectTitle}
              text={text}
              img={img}
              folder={title.replace("%20", "")}
            />
          );
        })}
      </div>
    </section>
  );
}
