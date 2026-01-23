import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-800 py-12"
           style={{
                  color: "var(--text-color)",
                }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-400">
            © 2024 Rakesh Karmaker. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className=" hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className=" hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className=" hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
