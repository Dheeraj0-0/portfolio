import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xl font-bold mb-2">Dheeraj Parihar</div>
          <div className="text-gray-400 mb-4">Associate Engineer & Azure Certified Professional</div>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:dheerajparihardrj@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="text-gray-500 text-sm mt-4">
            © 2024 Dheeraj Parihar. Built with passion for technology.
          </div>
        </div>
      </div>
    </footer>
  );
}
