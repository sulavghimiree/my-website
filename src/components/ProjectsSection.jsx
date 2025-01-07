import React, { useState, useEffect } from "react";
import { ExternalLink, Code, X, Search, Filter } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectI from "../assets/project-I.png";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Air Quality Predictor",
      description: "Air Quality Predicttor using machine learning predictions",
      longDescription:
        "The Air Quality Predictor is a machine learning-based web app that forecasts air pollution levels using environmental data for better health and safety decisions.",
      image: ProjectI,
      category: "machine-learning",
      tech: ["Python", "Jupyter", "Scikit-Learn"],
      featured: true,
      demoLink: "https://rabbzy.com",
      codeLink: "https://github.com/sulavghimiree/Air_Quality_Detector_WebApp",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management",
      longDescription:
        "Modern e-commerce platform with advanced features including real-time inventory tracking, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      category: "web-development",
      tech: ["Next.js", "Node.js", "MongoDB"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example",
    },
    // Add more projects as needed
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web-development", name: "Web Development" },
    { id: "machine-learning", name: "Machine Learning" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "all" || project.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const ProjectCard = ({ project }) => (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-4">
          <button
            onClick={() => setSelectedProject(project)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md
                     hover:bg-blue-700 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            View Details
          </button>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600
                     rounded-md hover:bg-blue-50 transition-colors duration-200"
          >
            <Code className="w-4 h-4" />
            View Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects-section"
      className="py-10 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`space-y-4 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            A collection of my work showcasing web development and machine
            learning projects.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeFilter === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 dark:border-gray-700
                       rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200
                       focus:border-blue-600 focus:outline-none transition-colors duration-200"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="sm:max-w-2xl">
            {selectedProject && (
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {selectedProject.longDescription}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md
                           hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600
                           rounded-md hover:bg-blue-50 transition-colors duration-200"
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
