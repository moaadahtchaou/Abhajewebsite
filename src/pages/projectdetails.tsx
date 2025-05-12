import  { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

// Import project data from centralized file
import projectsData from '../data/projectsData';
import type { Project } from '../data/projectsData';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // State for image gallery pagination
  const [exteriorPage, setExteriorPage] = useState(0);
  const [interiorPage, setInteriorPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeGallery, setActiveGallery] = useState<'main' | 'exterior' | 'interior'>('main');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const IMAGES_PER_PAGE = 6;

  // Animation refs
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = [
      descriptionRef.current,
      featuresRef.current,
      contactRef.current,
      relatedRef.current
    ];
    
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [project]);

  // Find the project based on the ID from URL
  useEffect(() => {
    setLoading(true);
    const projectId = parseInt(id || "0");
    const foundProject = projectsData.find(p => p.id === projectId) || null;
    setProject(foundProject);
    
    // Find related projects with the same type
    if (foundProject) {
      const related = projectsData
        .filter(p => p.type === foundProject.type && p.id !== foundProject.id)
        .slice(0, 3);
      setRelatedProjects(related);
    }
    
    setLoading(false);
    
    // Reset gallery state
    setExteriorPage(0);
    setInteriorPage(0);
    setSelectedImage(null);
    setActiveGallery('main');
    setCurrentImageIndex(0);
    
    // Scroll to top when component mounts or id changes
    window.scrollTo(0, 0);
  }, [id]);

  // Add keyboard navigation for the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      // Handle escape key to close lightbox
      if (e.key === 'Escape') {
        setSelectedImage(null);
        return;
      }
      
      // Only handle arrow keys for galleries with multiple images
      if (activeGallery === 'main') return;
      
      const images = activeGallery === 'exterior' 
        ? project?.vueExterieure || [] 
        : project?.vueInterieure || [];
      
      if (images.length <= 1) return;
      
      // Left arrow key
      if (e.key === 'ArrowLeft') {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
        setSelectedImage(images[newIndex]);
      }
      // Right arrow key
      else if (e.key === 'ArrowRight') {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
        setSelectedImage(images[newIndex]);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, activeGallery, currentImageIndex, project]);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate pagination
  const getPageCount = (imageArray?: string[]) => {
    if (!imageArray || imageArray.length === 0) return 0;
    return Math.ceil(imageArray.length / IMAGES_PER_PAGE);
  };
  
  const getPaginatedImages = (imageArray?: string[], page = 0) => {
    if (!imageArray || imageArray.length === 0) return [];
    const start = page * IMAGES_PER_PAGE;
    const end = start + IMAGES_PER_PAGE;
    return imageArray.slice(start, end);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Projet Non Trouvé</h1>
        <p className="text-gray-600 mb-8">Le projet que vous cherchez n'existe pas ou a été déplacé.</p>
        <Link 
          to="/projects" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Retour à la liste des projets
        </Link>
      </div>
    );
  }
  
  const exteriorPageCount = getPageCount(project.vueExterieure);
  const interiorPageCount = getPageCount(project.vueInterieure);
  const paginatedExteriorImages = getPaginatedImages(project.vueExterieure, exteriorPage);
  const paginatedInteriorImages = getPaginatedImages(project.vueInterieure, interiorPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
      
      {/* Hero section with parallax effect */}
      <div 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`,
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className={`inline-block px-4 py-1 mb-4 ${
            project.type === "building" ? "bg-emerald-600" :
            project.type === "road" ? "bg-amber-600" :
            project.type === "residential" ? "bg-purple-600" :
            project.type === "commercial" ? "bg-blue-600" :
            "bg-gray-700"
          } text-white text-sm font-semibold rounded`}>
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            {project.location}
          </p>
        </div>
        
        {/* Back button */}
        <Link 
          to="/projects" 
          className="absolute top-20 left-6 bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg font-medium hover:bg-white/30 transition-colors z-20 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux projets
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-20 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          {/* Project details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className={`p-6 rounded-lg ${
              project.type === "building" ? "bg-emerald-50 text-emerald-900" :
              project.type === "road" ? "bg-amber-50 text-amber-900" :
              project.type === "residential" ? "bg-purple-50 text-purple-900" :
              project.type === "commercial" ? "bg-blue-50 text-blue-900" :
              "bg-gray-50 text-gray-900"
            }`}>
              <h3 className="text-sm font-semibold mb-2 opacity-70">Année</h3>
              <p className="text-2xl font-bold">{project.year}</p>
            </div>
            <div className={`p-6 rounded-lg ${
              project.type === "building" ? "bg-emerald-50 text-emerald-900" :
              project.type === "road" ? "bg-amber-50 text-amber-900" :
              project.type === "residential" ? "bg-purple-50 text-purple-900" :
              project.type === "commercial" ? "bg-blue-50 text-blue-900" :
              "bg-gray-50 text-gray-900"
            }`}>
              <h3 className="text-sm font-semibold mb-2 opacity-70">Client</h3>
              <p className="text-2xl font-bold">{project.client}</p>
            </div>
            <div className={`p-6 rounded-lg ${
              project.type === "building" ? "bg-emerald-50 text-emerald-900" :
              project.type === "road" ? "bg-amber-50 text-amber-900" :
              project.type === "residential" ? "bg-purple-50 text-purple-900" :
              project.type === "commercial" ? "bg-blue-50 text-blue-900" :
              "bg-gray-50 text-gray-900"
            }`}>
              <h3 className="text-sm font-semibold mb-2 opacity-70">Localisation</h3>
              <p className="text-2xl font-bold">{project.location}</p>
            </div>
          </div>

          {/* Project description */}
          <div className="mb-12 opacity-0" ref={descriptionRef}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">À Propos du Projet</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">{project.description}</p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies 
                lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nunc. Sed euismod, nunc sit 
                amet ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nunc.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta 
                gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis 
                consectetur purus sit amet fermentum.
              </p>
            </div>
          </div>

          {/* Project gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Galerie du Projet</h2>
            
            {/* Gallery tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                className={`px-6 py-3 font-medium text-sm transition-colors ${
                  activeGallery === 'main' 
                    ? 'border-b-2 border-blue-600 text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveGallery('main')}
              >
                Vue Principale
              </button>
              {project.vueExterieure && project.vueExterieure.length > 0 && (
                <button
                  className={`px-6 py-3 font-medium text-sm transition-colors ${
                    activeGallery === 'exterior' 
                      ? 'border-b-2 border-blue-600 text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveGallery('exterior')}
                >
                  Vue Extérieure ({project.vueExterieure.length})
                </button>
              )}
              {project.vueInterieure && project.vueInterieure.length > 0 && (
                <button
                  className={`px-6 py-3 font-medium text-sm transition-colors ${
                    activeGallery === 'interior' 
                      ? 'border-b-2 border-blue-600 text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveGallery('interior')}
                >
                  Vue Intérieure ({project.vueInterieure.length})
                </button>
              )}
            </div>
            
            {/* Gallery content based on active tab */}
            {activeGallery === 'main' && (
              <div className="mb-8">
                <div 
                  className="aspect-[16/9] md:h-[500px] rounded-lg overflow-hidden relative cursor-pointer shadow-xl"
                  onClick={() => {
                    setSelectedImage(project.image);
                    setActiveGallery('main');
                  }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <span className="text-white text-lg font-semibold">Vue principale du projet</span>
                    <button className="bg-white/90 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                      Agrandir
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeGallery === 'exterior' && project.vueExterieure && project.vueExterieure.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-700">Vue Extérieure</h3>
                  {exteriorPageCount > 1 && (
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setExteriorPage(prev => Math.max(0, prev - 1))}
                        disabled={exteriorPage === 0}
                        className={`p-2 rounded-full ${exteriorPage === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <span className="text-gray-600 font-medium">
                        {exteriorPage + 1} / {exteriorPageCount}
                      </span>
                      <button 
                        onClick={() => setExteriorPage(prev => Math.min(exteriorPageCount - 1, prev + 1))}
                        disabled={exteriorPage === exteriorPageCount - 1}
                        className={`p-2 rounded-full ${exteriorPage === exteriorPageCount - 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {paginatedExteriorImages.map((img, index) => (
                    <div 
                      key={`ext-${exteriorPage}-${index}`} 
                      className="aspect-video rounded-lg overflow-hidden relative cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => {
                        setSelectedImage(img);
                        setActiveGallery('exterior');
                        setCurrentImageIndex(exteriorPage * IMAGES_PER_PAGE + index);
                      }}
                    >
                      <img 
                        src={img} 
                        alt={`Vue extérieure ${exteriorPage * IMAGES_PER_PAGE + index + 1} de ${project.title}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <span className="text-white text-sm">Vue extérieure {exteriorPage * IMAGES_PER_PAGE + index + 1}</span>
                        <div className="bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-sm font-medium">
                          Agrandir
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeGallery === 'interior' && project.vueInterieure && project.vueInterieure.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-700">Vue Intérieure</h3>
                  {interiorPageCount > 1 && (
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setInteriorPage(prev => Math.max(0, prev - 1))}
                        disabled={interiorPage === 0}
                        className={`p-2 rounded-full ${interiorPage === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <span className="text-gray-600 font-medium">
                        {interiorPage + 1} / {interiorPageCount}
                      </span>
                      <button 
                        onClick={() => setInteriorPage(prev => Math.min(interiorPageCount - 1, prev + 1))}
                        disabled={interiorPage === interiorPageCount - 1}
                        className={`p-2 rounded-full ${interiorPage === interiorPageCount - 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {paginatedInteriorImages.map((img, index) => (
                    <div 
                      key={`int-${interiorPage}-${index}`} 
                      className="aspect-video rounded-lg overflow-hidden relative cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => {
                        setSelectedImage(img);
                        setActiveGallery('interior');
                        setCurrentImageIndex(interiorPage * IMAGES_PER_PAGE + index);
                      }}
                    >
                      <img 
                        src={img} 
                        alt={`Vue intérieure ${interiorPage * IMAGES_PER_PAGE + index + 1} de ${project.title}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <span className="text-white text-sm">Vue intérieure {interiorPage * IMAGES_PER_PAGE + index + 1}</span>
                        <div className="bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-sm font-medium">
                          Agrandir
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image lightbox */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedImage(null);
                }
              }}
            >
              <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center p-4">
                {/* Image counter */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium z-10">
                  {activeGallery === 'main' ? (
                    <span>Image principale</span>
                  ) : (
                    <span>
                      Image {currentImageIndex + 1} sur {activeGallery === 'exterior' 
                        ? (project.vueExterieure?.length || 0) 
                        : (project.vueInterieure?.length || 0)}
                    </span>
                  )}
                </div>
                
                {/* Main image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={selectedImage} 
                    alt="Image agrandie" 
                    className="max-w-full max-h-[80vh] object-contain" 
                  />
                </div>
                
                {/* Navigation buttons */}
                {activeGallery !== 'main' && (
                  <>
                    <button 
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        const images = activeGallery === 'exterior' 
                          ? project.vueExterieure || [] 
                          : project.vueInterieure || [];
                        
                        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
                        setCurrentImageIndex(newIndex);
                        setSelectedImage(images[newIndex]);
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        const images = activeGallery === 'exterior' 
                          ? project.vueExterieure || [] 
                          : project.vueInterieure || [];
                        
                        const newIndex = (currentImageIndex + 1) % images.length;
                        setCurrentImageIndex(newIndex);
                        setSelectedImage(images[newIndex]);
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Close button */}
                <button 
                  className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Thumbnails at bottom */}
                {activeGallery !== 'main' && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center overflow-x-auto py-2 px-4">
                    <div className="flex space-x-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg">
                      {(activeGallery === 'exterior' ? project.vueExterieure : project.vueInterieure)?.map((img, idx) => (
                        <button 
                          key={`thumb-${idx}`}
                          className={`w-16 h-12 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                            currentImageIndex === idx ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                            setSelectedImage(img);
                          }}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Project features */}
          <div className="mb-12 opacity-0" ref={featuresRef}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Caractéristiques du Projet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  project.type === "building" ? "bg-emerald-100 text-emerald-600" :
                  project.type === "road" ? "bg-amber-100 text-amber-600" :
                  project.type === "residential" ? "bg-purple-100 text-purple-600" :
                  project.type === "commercial" ? "bg-blue-100 text-blue-600" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Conception Innovante</h3>
                  <p className="text-gray-600">Architecture de pointe qui redéfinit les standards du secteur.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  project.type === "building" ? "bg-emerald-100 text-emerald-600" :
                  project.type === "road" ? "bg-amber-100 text-amber-600" :
                  project.type === "residential" ? "bg-purple-100 text-purple-600" :
                  project.type === "commercial" ? "bg-blue-100 text-blue-600" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Matériaux Durables</h3>
                  <p className="text-gray-600">Utilisation de matériaux écologiques et durables.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  project.type === "building" ? "bg-emerald-100 text-emerald-600" :
                  project.type === "road" ? "bg-amber-100 text-amber-600" :
                  project.type === "residential" ? "bg-purple-100 text-purple-600" :
                  project.type === "commercial" ? "bg-blue-100 text-blue-600" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Gestion Efficace</h3>
                  <p className="text-gray-600">Projet livré dans les délais et selon le budget prévu.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  project.type === "building" ? "bg-emerald-100 text-emerald-600" :
                  project.type === "road" ? "bg-amber-100 text-amber-600" :
                  project.type === "residential" ? "bg-purple-100 text-purple-600" :
                  project.type === "commercial" ? "bg-blue-100 text-blue-600" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Impact Social</h3>
                  <p className="text-gray-600">Contribution positive à la communauté locale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="opacity-0" ref={contactRef}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Intéressé par ce projet?</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-600 mb-6">
                Contactez-nous dès aujourd'hui pour discuter de votre propre projet ou pour en savoir plus sur notre approche.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className={`px-6 py-3 text-white rounded-lg font-medium transition-colors ${
                    project.type === "building" ? "bg-emerald-600 hover:bg-emerald-700" :
                    project.type === "road" ? "bg-amber-600 hover:bg-amber-700" :
                    project.type === "residential" ? "bg-purple-600 hover:bg-purple-700" :
                    project.type === "commercial" ? "bg-blue-600 hover:bg-blue-700" :
                    "bg-gray-700 hover:bg-gray-800"
                  }`}
                >
                  Contactez-nous
                </Link>
                <Link 
                  to="/projects" 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Voir d'autres projets
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <div className="mb-12 opacity-0" ref={relatedRef}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Projets Similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map(relatedProject => (
                <Link 
                  key={relatedProject.id} 
                  to={`/project/${relatedProject.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white">{relatedProject.title}</h3>
                      <p className="text-white/80 text-sm">{relatedProject.location}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to action */}
      <div className="bg-blue-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à Démarrer Votre Prochain Projet?</h2>
          <p className="text-blue-200 max-w-2xl mx-auto mb-8">
            Notre expertise couvre un large éventail de projets. Contactez-nous pour transformer votre vision en réalité.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-blue-800 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Démarrez Aujourd'hui
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Back to top button */}
      {showBackToTop && (
        <button 
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-30"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
