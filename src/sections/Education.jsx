import { GraduationCap } from "lucide-react";
import education from "../data/education";

function Education() {
  return (
    <section id="education" className="bg-[#0d1422] px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-400">
            MY ACADEMIC BACKGROUND
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            My <span className="text-blue-500">Education</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 rounded-xl border border-white/10 bg-[#111c2e] p-6 transition hover:border-blue-500/50"
            >

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <GraduationCap size={30} className="text-blue-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {item.degree}
                </h3>

                <p className="mt-2 font-medium text-blue-400">
                  {item.institution}
                </p>

                {item.university && (
                  <p className="mt-1 text-sm text-gray-400">
                    {item.university}
                  </p>
                )}

                <p className="mt-3 text-sm text-gray-500">
                  {item.duration}
                </p>

                {item.result && (
                  <p className="mt-2 text-sm text-gray-300">
                    {item.result}
                  </p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;