import { BriefcaseBusiness } from "lucide-react";
import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="bg-[#090d18] px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-400">
            MY PROFESSIONAL JOURNEY
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Work <span className="text-blue-500">Experience</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
        </div>

        {experience.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-white/10 bg-[#111c2e] p-8 transition hover:border-blue-500/50"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <BriefcaseBusiness size={30} className="text-blue-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">
                  {item.role}
                </h3>

                <p className="mt-2 text-lg font-medium text-blue-400">
                  {item.company}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {item.duration}
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-blue-500/10 px-3 py-2 text-xs text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;