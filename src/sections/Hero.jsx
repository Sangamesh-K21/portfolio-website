import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Introduction */}
        <div>
          <p className="mb-4 font-medium text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Sangamesh <span className="text-blue-500">Kuri</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300">
            Java Full Stack Developer
          </h2>

          <p className="mt-2 text-lg text-gray-400">
            Software Developer
          </p>

          <p className="mt-6 max-w-xl leading-8 text-gray-400">
            I am a Computer Science graduate passionate about
            building modern web applications. I enjoy working
            with Java, Spring Boot, React.js and MySQL to create
            practical software solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/Sangamesh-K21"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition hover:text-blue-400"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/sangamesh-k21/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition hover:text-blue-400"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        {/* Temporary Photo Placeholder */}
        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center rounded-full border-4 border-blue-500/40 bg-blue-500/10 shadow-2xl shadow-blue-500/10 md:h-96 md:w-96">
            <span className="text-8xl font-bold text-blue-400 md:text-9xl">
              SK
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;