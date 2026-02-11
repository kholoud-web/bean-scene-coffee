import footer from "../../assets/images/fotter_image.svg";
import logo from '../../assets/images/Bean Scene.svg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer
      className="py-20  bg-cover bg-center relative  bg-amber-950 opacity-90"
      style={{ backgroundImage: `url(${footer})` }} id="contact"
    >
      <div className="@container px-12">
        <div className="max-w-7xl ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* Logo or Brand */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-3xl rounded-2xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-3xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-3xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-3xl">
              <FaLinkedinIn />
            </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-white ">
              © {new Date().getFullYear()} Bean Scene Coffee. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
