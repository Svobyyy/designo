import ProjectsPage from "@/components/Projects/ProjectsPage";

export default function page({
  params: { project },
}: {
  params: { project: string };
}) {
  return <ProjectsPage title={project} />;
}
