import React, { useState, useEffect } from "react";
import { Mail, ArrowRight, Code, Server, Brain } from "lucide-react";
import AboutImg from "../assets/about-img.jpeg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Machine Learning", icon: Brain },
    { name: "Python/Django", icon: Server },
    { name: "Web Development", icon: Code },
  ];

  const experiences = [
    {
      year: "2025",
      title: "Django Developer",
      company: "Self Employed",
      description:
        "Currently creating different Django projects using Template engine and RESTful API's.",
    },
    {
      year: "2025",
      title: "Machine Learning Enthuiast",
      company: "Self Employed",
      description:
        "Currently Researching in different datasets and applying machine learning algorithms to solve real-world problems.",
    },
    {
      year: "2024",
      title: "Web Developer",
      company: "Self Employed",
      description:
        "Built and maintained multiple client applications using modern technologies for the Crypto Token Websites.",
    },
  ];

  return (
    <section id="about-section" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I’m a Django Developer and Web Developer with a growing passion for Machine Learning. I specialize in building scalable, secure, and user-friendly web applications using Django and modern web technologies. I enjoy exploring how machine learning can be integrated into real-world applications to solve complex problems and enhance user experiences. Always eager to learn and innovate at the intersection of web development and AI.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg 
                    hover:scale-105 hover:shadow-md transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-600 space-y-2 
                    hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600" />
                    <div className="text-sm text-blue-600 font-semibold">
                      {exp.year}
                    </div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">
                      {exp.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md 
              hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Image Section */}
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
                src={AboutImg}
                alt="Professional headshot"
                className="relative rounded-2xl w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
