import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 px-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg">
            Made with <FaHeart className="inline text-red-500 mx-1" /> by Laxman Panjalingam
          </p>
        </div>

        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://www.linkedin.com/in/laxman-panjalingam-4a5163260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/laxmanp090404/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="mailto:laxman.p2022cse@sece.ac.in"
            className="text-white hover:text-gray-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
