import { GraduationCap, Code2, Rocket } from "lucide-react";

function About() {
  return (
    <section id="about" className="bg-[#0d1422] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-400">GET TO KNOW ME</p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
        </div>

        {/* About Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <h3 className="text-2xl font-bold leading-relaxed text-white">
              Passionate Java Full Stack Developer
              focused on building useful software solutions.
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              I am a Computer Science and Engineering graduate
              from Karavali Institute of Technology, affiliated
              with Visvesvaraya Technological University.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I have completed Java Full Stack Development
              internship training at KodNest, where I worked
              on practical software development concepts and
              projects.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I enjoy learning new technologies, solving
              programming problems and developing responsive
              web applications using Java, Spring Boot,
              React.js and MySQL.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid gap-5">

            <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-[#111c2e] p-6">
              <GraduationCap size={38} className="shrink-0 text-blue-400" />
              <div>
                <h4 className="font-bold text-white">Education</h4>
                <p className="mt-1 text-sm text-gray-400">
                  B.E. Computer Science and Engineering
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-[#111c2e] p-6">
              <Code2 size={38} className="shrink-0 text-blue-400" />
              <div>
                <h4 className="font-bold text-white">Development</h4>
                <p className="mt-1 text-sm text-gray-400">
                  Java Full Stack Development
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-[#111c2e] p-6">
              <Rocket size={38} className="shrink-0 text-blue-400" />
              <div>
                <h4 className="font-bold text-white">Career Goal</h4>
                <p className="mt-1 text-sm text-gray-400">
                  Software Developer
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;