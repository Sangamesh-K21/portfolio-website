import { Code2 } from "lucide-react";
import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="bg-[#090d18] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-400">MY TECHNICAL EXPERTISE</p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Technical <span className="text-blue-500">Skills</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-xl border border-white/10 bg-[#111c2e] p-7 transition hover:-translate-y-2 hover:border-blue-500/50"
            >
              <Code2 size={30} className="mb-5 text-blue-400" />

              <h3 className="mb-5 text-xl font-bold text-white">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;