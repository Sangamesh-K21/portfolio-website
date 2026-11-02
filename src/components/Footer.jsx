import { ArrowUp, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const quickLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="border-t border-white/10 bg-[#070b14] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row">

          {/* Branding */}
          <div>
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-white">
              <Code2 className="text-blue-500" size={26} />
              Sangamesh Kuri
            </a>

            <p className="mt-3 text-sm text-gray-400">
              Java Full Stack Developer | Software Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>

            <div className="flex flex-wrap gap-5">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 transition hover:text-blue-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Connect With Me</h3>

            <div className="flex gap-5">
              <a
                href="https://github.com/Sangamesh-K21"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition hover:text-blue-400"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/sangamesh-k21/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-sm text-gray-500">
            © 2026 Sangamesh Kuri. All rights reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;