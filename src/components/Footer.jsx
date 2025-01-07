import React from "react";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  ArrowUp,
  Heart,
  Mail,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/sulavghimiree",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-500",
    },
    {
      icon: Github,
      url: "https://github.com/sulavghimiree",
      label: "GitHub",
      hoverColor: "hover:text-gray-700",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/sulavghimiree",
      label: "Twitter",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      url: "https://instagram.com/sulavghimiree",
      label: "Instagram",
      hoverColor: "hover:text-pink-500",
    },
  ];

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about-section" },
    { name: "Projects", id: "projects-section" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Left Section - About */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
              Crafting innovative web solutions
              <br />
              Made with <Heart className="w-4 h-4 inline text-red-500 mx-1" />
              and modern tech
            </p>
          </div>

          {/* Center Section - Navigation */}
          <nav className="flex flex-col items-center space-y-4">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    onClick={() =>
                      window.open(social.url, "_blank", "noopener,noreferrer")
                    }
                    className={`transform transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright Notice */}
            <p className="text-gray-500 text-sm">
              © {currentYear} Sulav Ghimire. All rights reserved.
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
