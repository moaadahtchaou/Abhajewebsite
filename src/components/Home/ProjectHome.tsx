import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import project1 from "../../assets/Images/Home/ProjectHome/est5.jpg"
import project2 from "../../assets/Images/Home/ProjectHome/con fac 24.jpg"
import project3 from "../../assets/Images/Home/ProjectHome/cham1.jpg"
import project4 from "../../assets/Images/Home/ProjectHome/con2.jpg"
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Project data with placeholder images
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image:string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Complexe de Bureaux Moderne",
    category: "Commercial",
    description: "Espace commercial primé avec des caractéristiques de conception durable.",
    image:project1
  },
  {
    id: 2,
    title: "Infrastructure Routière",
    category: "Infrastructure",
    description: "Projet majeur d'expansion routière achevé avant l'échéance prévue.",
    image:project2

  },
  {
    id: 3,
    title: "Tour Résidentielle de Luxe",
    category: "Résidentiel",
    description: "Complexe résidentiel haut de gamme avec des équipements premium.",
    image:project3

  },
  {
    id: 4,
    title: "Centre Communautaire",
    category: "Public",
    description: "Installation communautaire moderne servant la ville avec des ressources de pointe.",
    image:project4
  }
];


export default function ProjectHome() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const imageMaskRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextImageSrc, setNextImageSrc] = useState('');

  // Set up GSAP animations when component mounts
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations for the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      });

      // Animate the heading with a staggered effect
      const animateTextElements = headingRef.current?.querySelectorAll('.animate-text');
      if (animateTextElements) {
        tl.from(animateTextElements, {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out"
        });
      }
      
      const highlightBar = headingRef.current?.querySelector('.highlight-bar');
      if (highlightBar) {
        tl.from(highlightBar, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.8,
          ease: "power3.inOut"
        }, "-=0.5");
      }

      // Animate the featured project
      gsap.set(projectRefs.current, { opacity: 0, y: 50 });
      gsap.set(projectRefs.current[0], { opacity: 1, y: 0 });

      // Animate the decorative elements
      gsap.from('.decoration-circle', {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Create scroll-triggered animations for project images
      imagesRef.current.forEach((img, index) => {
        if (img) {
          // Add hover animation
          const hoverTl = gsap.timeline({ paused: true });
          hoverTl.to(img, {
            scale: 1.05,
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            duration: 0.5,
            ease: "power2.out"
          });

          // Add mouse events
          img.addEventListener('mouseenter', () => hoverTl.play());
          img.addEventListener('mouseleave', () => hoverTl.reverse());
          
          // Initial reveal animation
          gsap.from(img, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2 * index,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
            }
          });
        }
      });
    }, sectionRef);

    // Clean up animations on unmount
    return () => ctx.revert();
  }, []);

  // Handle project navigation with enhanced transitions
  const navigateToProject = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    
    // Store the next image source for smooth transition
    setNextImageSrc(projects[index].image);

    // Create a timeline for creative transitions
    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(index);
        setIsAnimating(false);
      }
    });

    // Animate current project content out with a slide
    tl.to(projectRefs.current[activeIndex], {
      opacity: 0,
      x: -40,
      duration: 0.5,
      ease: "power3.inOut"
    });

    // Create an impressive image transition
    if (mainImageRef.current && imageMaskRef.current) {
      // First, make sure our mask is using the next image
      gsap.set(imageMaskRef.current, {
        backgroundImage: `url(${projects[index].image})`,
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      });
      
      // Animate image mask reveal
      tl.to(imageMaskRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.3");

      // Reset the mask after transition completes
      tl.add(() => {
        if (mainImageRef.current) {
          mainImageRef.current.src = projects[index].image;
        }
        gsap.set(imageMaskRef.current, {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        });
      });
    }

    // Animate new project content in with a slide
    tl.to(projectRefs.current[index], {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.4");

    // Highlight the selected thumbnail
    projects.forEach((_, idx) => {
      const thumbEl = document.querySelector(`.project-thumb-${idx}`);
      if (thumbEl) {
        if (idx === index) {
          tl.to(thumbEl, {
            scale: 1.05,
            opacity: 1,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            duration: 0.4,
            ease: "back.out(1.7)"
          }, "-=0.4");
        } else {
          tl.to(thumbEl, {
            scale: 1,
            opacity: 0.7,
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "power2.out"
          }, "-=0.4");
        }
      }
    });
  };

  // Helper function to set refs properly
  const setProjectRef = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };

  const setImageRef = (el: HTMLImageElement | null, index: number) => {
    imagesRef.current[index] = el;
  };

  return (
    <div className="container mx-auto px-4 relative z-10 py-24" ref={sectionRef}>
      {/* Section heading with animated text */}
      <div ref={headingRef} className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full font-semibold uppercase tracking-widest text-xs mb-4 animate-text">Notre Vitrine</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
          <span className="animate-text inline-block">Nos</span>{' '}
          <span className="animate-text inline-block text-blue-200">Projets</span>{' '}
          <span className="animate-text inline-block">Phares</span>
        </h2>
        <div className="highlight-bar h-1 w-32 bg-blue-200 mx-auto mb-8"></div>
        <p className="text-white/90 text-lg animate-text">
          Transformer les visions en réalités exceptionnelles grâce à l'innovation et au savoir-faire.
        </p>
      </div>
      
      {/* Main project showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Featured project details - changes based on active project */}
        <div className="order-2 lg:order-1">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              ref={(el) => setProjectRef(el, idx)}
              className={`${idx === activeIndex ? 'opacity-100' : 'opacity-0 absolute'} transform transition-all duration-500 ease-in-out`}
              style={{
                position: idx !== activeIndex ? 'absolute' : 'relative',
                left: idx !== activeIndex ? 0 : 'auto',
                top: idx !== activeIndex ? 0 : 'auto',
                width: '100%'
              }}
            >
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-blue-200 rounded-md text-sm mb-4">{project.category}</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-white/80 text-lg mb-8">{project.description}</p>
              <div className="flex space-x-4">
                <Link 
                  to={`/project/${project.id}`} 
                  className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-300 inline-flex items-center"
                >
                  Voir les Détails du Projet
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project image showcase with enhanced transition */}
        <div className="relative order-1 lg:order-2 perspective overflow-hidden">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-2 border-white/20 relative">
            <img 
              ref={mainImageRef}
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-60 z-[1]"></div>
            
            {/* Mask layer for creative transition effect */}
            <div 
              ref={imageMaskRef}
              className="absolute inset-0 bg-blue-900 z-[2]"
              style={{ 
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-16 h-16 border-t-2 border-r-2 border-white/30 z-[3]"></div>
            <div className="absolute bottom-2 left-2 w-16 h-16 border-b-2 border-l-2 border-white/30 z-[3]"></div>
          </div>
        </div>
      </div>
      
      {/* Project thumbnail navigation with enhanced design */}
      <div className="mt-16">
        <h4 className="text-xl font-semibold mb-6 text-center text-white">Tous Nos Projets</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => navigateToProject(idx)}
              className={`group project-thumb-${idx} relative rounded-lg overflow-hidden transition-all duration-500 ${
                activeIndex === idx ? 'opacity-100 scale-105 ring-2 ring-blue-200' : 'opacity-70 hover:opacity-90'
              }`}
              style={{
                boxShadow: activeIndex === idx ? '0 10px 25px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)',
                transform: `perspective(1000px) rotateY(${(idx - activeIndex) * 5}deg)`
              }}
            >
              <div className="aspect-video overflow-hidden border border-white/20">
                <img 
                  ref={(el) => setImageRef(el, idx + 2)}
                  src={projects[idx].image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                <span className="text-white text-sm font-medium">{project.title}</span>
              </div>
              
              {/* Active indicator */}
              {activeIndex === idx && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-200 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* View all projects button */}
      <div className="mt-12 text-center">
        <Link 
          to="/projects" 
          className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 font-medium rounded-md transition-colors relative overflow-hidden group"
        >
          <span className="relative z-10">Voir Tous les Projets</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <svg className="ml-2 w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
