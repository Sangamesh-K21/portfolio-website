import { Code2, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111c2e] transition duration-300 hover:-translate-y-2 hover:border-blue-500/50">

      {/* Project Image Placeholder */}
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-900/40 to-slate-900">
        <Code2 size={65} className="text-blue-400" />
      </div>

      {/* Project Details */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-blue-500/10 px-3 py-2 text-xs text-blue-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-6 flex gap-4">

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
            >
              <Code2 size={18} />
              GitHub
            </a>
          ) : (
            <span className="text-sm text-gray-500">
              GitHub link coming soon
            </span>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;