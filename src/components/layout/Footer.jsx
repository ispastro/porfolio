import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-[#001220] shadow-inner mt-12 w-full text-center text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Attribution Text */}
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Designed and Developed by Haile
        </p>

        {/* Social Links */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex justify-center text-gray-400 space-x-6 mb-4">
            <a
              href="https://www.facebook.com"
              className="hover:text-teal-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-teal-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/haile-asaye21"
              className="hover:text-teal-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://instagram.com/risedowr"
              className="hover:text-teal-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/ispastro"
              className="hover:text-teal-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>

          {/* horizontal  Line */}
          <div className="flex justify-center">
            <div className="w-48 border-t border-gray-500"></div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-gray-600 dark:text-gray-300">
          © 2025 Haile's  Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
