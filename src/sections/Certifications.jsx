import { Award } from "lucide-react";

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#090d18] px-6 py-24"
    >
      <div className="mx-auto max-w-5xl text-center">

        <p className="font-semibold text-blue-400">
          PROFESSIONAL DEVELOPMENT
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          My <span className="text-blue-500">Certifications</span>
        </h2>

        <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>

        <div className="mt-12 rounded-xl border border-white/10 bg-[#111c2e] p-10">
          <Award size={48} className="mx-auto text-blue-400" />

          <h3 className="mt-5 text-xl font-bold text-white">
            Certifications Coming Soon
          </h3>

          <p className="mt-3 text-gray-400">
            Professional certifications and course achievements
            will be added here.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Certifications;