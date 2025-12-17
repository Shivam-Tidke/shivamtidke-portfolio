import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";
import {
  IoMdPhonePortrait,
} from "react-icons/io";
import {
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-400 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 lg:px-20 py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand / Intro */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Shivam<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed">
              Full Stack MERN Developer building scalable, high-performance web
              applications with clean UI and strong backend architecture.
            </p>

            {/* Social */}
            <div className="flex gap-5 mt-6">
              <a
                href="https://www.linkedin.com/in/shivam-tidke-9a2569269/"
                target="_blank"
                className="hover:text-primary transition text-2xl"
              >
                <IoLogoLinkedin />
              </a>

              <a
                href="https://github.com/Shivam-Tidke"
                target="_blank"
                className="hover:text-primary transition text-2xl"
              >
                <IoLogoGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#project" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-lime-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <IoMdPhonePortrait className="text-primary" />
                <span>+91 7030560392</span>
              </p>

              <p className="flex items-center gap-3">
                <IoMailOutline className="text-primary" />
                <a
                  href="mailto:work.shivamtidke@gmail.com"
                  className="hover:text-lime-500 transition"
                >
                  work.shivamtidke@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-3">
                <IoLocationOutline className="text-primary" />
                <span>Pune, Maharashtra, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} Shivam Tidke. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
