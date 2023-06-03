import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="bottom-0 flex-shrink-0 bg-orange-300 text-blue-950 py-8 w-full flex flex-col items-center justify-center">
        <div className="flex space-x-4 mb-4">
          <a
            className="text-red-600 hover:text-red-800 transition-all duration-200"
            href="https://www.instagram.com/2system_dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} />
          </a>

          <a
            className="text-gray-600 hover:text-gray-800 transition-all duration-200"
            href="https://github.com/ElvisFelix-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} />
          </a>

          <a
            className="text-blue-600 hover:text-blue-800 transition-all duration-200"
            href="https://www.linkedin.com/in/elvis-felix/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            className="text-green-600 hover:text-green-800 transition-all duration-200"
            href="https://wa.me/5516996318063"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
        <p className="text-sm text-black hover:text-gray-400 transition-all duration-200 inline-block">
          <a
            href="https://2system.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Desenvolvido por 2System
          </a>
        </p>
      </footer>
    </>
  )
}
