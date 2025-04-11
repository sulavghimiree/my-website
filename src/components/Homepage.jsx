import React, { useEffect, useState } from "react";
import {
  Download,
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import ProfileImage from "../assets/profile-img.jpg";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="home" className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-50" />
      </div>

      {/* Main content container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hi, I'm Sulav Ghimire
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
                Django Developer | Machine Learning Enthusiast | Web
                Developer
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
            Passionate Django Developer and Web Developer with a strong interest in Machine Learning. Skilled in building robust web applications and integrating intelligent solutions to create impactful digital experiences
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1YlY0gzrOfFuZc2x69SAVizpE2pncJEuk/view?usp=sharing",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/sulavghimiree",
                  label: "GitHub",
                },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com/in/sulavghimiree",
                  label: "LinkedIn",
                },
                {
                  Icon: Instagram,
                  href: "https://instagram.com/sulavghimiree",
                  label: "Instagram",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all duration-200 group"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image/Illustration */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl" />
              <img
                src={ProfileImage}
                alt="Profile"
                className="relative rounded-2xl w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
