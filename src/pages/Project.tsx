import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


// Import project data from centralized file
import projectsData from '../data/projectsData';
import type { Project } from '../data/projectsData';

export default function Project() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selected category
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay for better UX with a shorter delay
    setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(projectsData.filter(project => project.type === activeFilter));
      }
      setIsLoading(false);
    }, 200);
  }, [activeFilter]);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom hook for scroll animation
  const useScrollAnimation = (ref: React.RefObject<HTMLElement | null>) => {
    // Initialize with true to make items visible by default
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);

    return isVisible;
  };

  const isProjectsVisible = useScrollAnimation(projectsRef);
  const isFilterVisible = useScrollAnimation(filterRef);
  
  // Handle card hover
  const handleCardHover = (id: number | null) => {
    setHoveredCard(id);
  };

  // Get category counts for filter display
  const getCategoryCounts = () => {
    const counts = {
      all: projectsData.length,
      building: projectsData.filter(p => p.type === "building").length,
      road: projectsData.filter(p => p.type === "road").length,
      residential: projectsData.filter(p => p.type === "residential").length,
      commercial: projectsData.filter(p => p.type === "commercial").length,
      infrastructure: projectsData.filter(p => p.type === "infrastructure").length,
    };
    return counts;
  };
  
  const categoryCounts = getCategoryCounts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with parallax effect */}
      <div 
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(23, 37, 84, 0.8), rgba(30, 58, 138, 0.8))"
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${building1})`,
            transform: `translateY(${scrollY * 0.4}px)`,
            backgroundAttachment: "fixed"
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 transform transition-transform duration-700 hover:scale-105">
            Nos Projets
          </h1>
          <div className="h-1 w-32 bg-blue-300 mx-auto mb-6 transform transition-all duration-700 hover:w-48"></div>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Découvrez notre portfolio diversifié de projets innovants, de la construction résidentielle aux infrastructures majeures.
          </p>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-[50px]" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="#F9FAFB"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0S151.79,32.3,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* Filters section */}
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12" ref={filterRef}>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Explorez Par Catégorie</h2>
          <div className="flex flex-wrap justify-center gap-4 transition-all duration-500 opacity-100 translate-y-0">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              <span>Tous les Projets</span>
              <span className="ml-2 bg-blue-700/20 px-2 py-0.5 rounded-full text-xs">{categoryCounts.all}</span>
            </button>
            <button
              onClick={() => setActiveFilter("building")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeFilter === "building"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200"
              }`}
            >
              <span>Bâtiments</span>
              <span className="ml-2 bg-emerald-700/20 px-2 py-0.5 rounded-full text-xs">{categoryCounts.building}</span>
            </button>
            <button
              onClick={() => setActiveFilter("road")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeFilter === "road"
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
              }`}
            >
              <span>Routes</span>
              <span className="ml-2 bg-amber-700/20 px-2 py-0.5 rounded-full text-xs">{categoryCounts.road}</span>
            </button>
            <button
              onClick={() => setActiveFilter("residential")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeFilter === "residential"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
              }`}
            >
              <span>Résidentiel</span>
              <span className="ml-2 bg-purple-700/20 px-2 py-0.5 rounded-full text-xs">{categoryCounts.residential}</span>
            </button>
            <button
              onClick={() => setActiveFilter("commercial")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeFilter === "commercial"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              <span>Commercial</span>
              <span className="ml-2 bg-blue-700/20 px-2 py-0.5 rounded-full text-xs">{categoryCounts.commercial}</span>
            </button>
            <button
              onClick={() => setActiveFilter("infrastructure")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeFilter === "infrastructure"
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span>Infrastructure</span>
              <span className="ml-2 bg-gray-700/20 px-2 py-0.5 rounded-full text-xs">{categoryCounts.infrastructure}</span>
            </button>
          </div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Projects grid with animation */}
        {!isLoading && (
          <div 
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className={`
                  bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform
                  opacity-100 translate-y-0
                  ${hoveredCard !== null && hoveredCard !== project.id ? "opacity-70 scale-95" : ""}
                `}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => handleCardHover(project.id)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className="relative overflow-hidden group h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCard === project.id ? "scale-110" : "scale-100"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Animated overlay on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t ${
                      project.type === "building" ? "from-emerald-700/70" :
                      project.type === "road" ? "from-amber-700/70" :
                      project.type === "residential" ? "from-purple-700/70" :
                      project.type === "commercial" ? "from-blue-700/70" :
                      "from-gray-700/70"
                    } via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                  ></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className={`inline-block px-3 py-1 ${
                      project.type === "building" ? "bg-emerald-600/90" :
                      project.type === "road" ? "bg-amber-600/90" :
                      project.type === "residential" ? "bg-purple-600/90" :
                      project.type === "commercial" ? "bg-blue-600/90" :
                      "bg-gray-700/90"
                    } text-white text-xs font-semibold rounded mb-2 transform group-hover:translate-y-0 group-hover:opacity-100 transition-all`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                    <p className="text-white/80 text-sm group-hover:translate-y-0 transition-transform">{project.location}</p>
                  </div>
                  <div className="absolute top-0 right-0 m-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                    {project.year}
                  </div>
                  
                  {/* View details button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Voir les détails
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div 
                    className={`font-medium inline-flex items-center group ${
                      project.type === "building" ? "text-emerald-600" :
                      project.type === "road" ? "text-amber-600" :
                      project.type === "residential" ? "text-purple-600" :
                      project.type === "commercial" ? "text-blue-600" :
                      "text-gray-600"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Voir les détails
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Project type indicator */}
                <div className="absolute top-0 left-0 w-1 h-full">
                  <div 
                    className={`h-full w-full ${
                      project.type === "building" ? "bg-emerald-500" :
                      project.type === "road" ? "bg-amber-500" :
                      project.type === "residential" ? "bg-purple-500" :
                      project.type === "commercial" ? "bg-blue-500" :
                      "bg-gray-500"
                    }`}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600">Aucun projet trouvé dans cette catégorie</h3>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full font-medium"
            >
              Voir tous les projets
            </button>
          </div>
        )}
      </div>

      {/* Statistics section */}
      <div className="bg-blue-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Notre Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-transform hover:scale-105 duration-300">
              <div className="text-5xl font-bold text-white mb-2">45+</div>
              <p className="text-blue-200">Projets Réalisés</p>
            </div>
            <div className="transform transition-transform hover:scale-105 duration-300">
              <div className="text-5xl font-bold text-white mb-2">12</div>
              <p className="text-blue-200">Villes Couvertes</p>
            </div>
            <div className="transform transition-transform hover:scale-105 duration-300">
              <div className="text-5xl font-bold text-white mb-2">650K</div>
              <p className="text-blue-200">Mètres Carrés</p>
            </div>
            <div className="transform transition-transform hover:scale-105 duration-300">
              <div className="text-5xl font-bold text-white mb-2">18</div>
              <p className="text-blue-200">Années d'Expérience</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Vous avez un projet en tête?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Notre équipe d'experts est prête à vous aider à concrétiser votre vision. Contactez-nous dès aujourd'hui pour discuter de votre projet.
          </p>
          <Link 
            to="/contact" 
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-medium overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Contactez-Nous
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
