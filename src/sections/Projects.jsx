import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-[#0d1422] px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-400">
            MY RECENT WORK
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;