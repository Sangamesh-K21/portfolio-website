import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email error:", error);
      setStatus("Unable to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#0d1422] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>

          <p className="mt-5 text-gray-400">
            Have an opportunity or project in mind? Feel free to contact me.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Let's Connect
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              I am interested in Java Full Stack Development
              and Software Developer opportunities.
              Let's connect and discuss professional opportunities.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={25} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">Your email address</p>
                </div>
              </div>

              <a
                href="https://github.com/Sangamesh-K21"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400"
              >
                <FaGithub size={25} />
                GitHub Profile
              </a>

              <a
                href="https://www.linkedin.com/in/sangamesh-k21/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400"
              >
                <FaLinkedin size={25} />
                LinkedIn Profile
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-white/10 bg-[#111c2e] p-7"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-[#090d18] p-4 text-white outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-[#090d18] p-4 text-white outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-[#090d18] p-4 text-white outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-lg border border-white/10 bg-[#090d18] p-4 text-white outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={status === "Sending..."}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              <Send size={18} />
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p role="status" aria-live="polite" className="text-center text-sm text-blue-400">
                {status}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;