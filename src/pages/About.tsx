import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUsers, FaBuilding, FaRoad, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import aboutImage from '../assets/Images/Home/Hero/1.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const animateTextElements = headingRef.current?.querySelectorAll('.animate-text');
      if (animateTextElements) {
        gsap.from(animateTextElements, {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          }
        });
      }

      // Story section animations
      const storyContent = storyRef.current?.querySelector('.story-content');
      if (storyContent) {
        gsap.from(storyContent, {
          x: -100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 70%",
          }
        });
      }

      const storyImage = storyRef.current?.querySelector('.story-image');
      if (storyImage) {
        gsap.from(storyImage, {
          x: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 70%",
          }
        });
      }

      // Enhanced Services section animations




      // Animate the services section header with enhanced effects
      const servicesHeader = servicesRef.current?.querySelector('.text-center');
      if (servicesHeader) {
        const headerElements = servicesHeader.children;
        
        gsap.from(headerElements, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesHeader,
            start: "top 80%",
          }
        });

        // Add a subtle background animation
        const headerBg = servicesHeader.querySelector('.header-bg');
        if (headerBg) {
          gsap.to(headerBg, {
            scale: 1.1,
            rotation: 5,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      }

 

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen" ref={sectionRef}>
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 -z-10"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20opacity%3D%22.5%22%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] -z-10"></div>
       
        {/* Enhanced decorative elements */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[20%] left-[5%] w-48 h-48 border-2 border-white/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute bottom-[20%] right-[5%] w-48 h-48 border-2 border-white/20 rounded-2xl -rotate-12 animate-float-delayed"></div>
       
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headingRef} className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white/90 rounded-full font-semibold uppercase tracking-widest text-sm mb-6 animate-text">
              Notre Profil
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              <span className="animate-text inline-block">À Propos de</span>{' '}
              <span className="animate-text inline-block text-blue-200 relative">
                ABHAJE FRERES
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200/50 rounded-full"></span>
              </span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl animate-text leading-relaxed">
              Leader dans la construction et l'entretien des infrastructures de transport routier au Maroc depuis 2001
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Company Story Section */}
      <section ref={storyRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 story-content">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2">
                Notre Histoire
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Plus de 20 ans <br />d'Excellence
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  ABHAJE FRERES est un leader de la construction et de l'entretien des infrastructures de transport routier au Maroc. Depuis 2001, l'entreprise n'a cessé de renforcer et d'accroître sa position au sein de l'industrie.
                </p>
                <p>
                  La compétence de notre main-d'œuvre, l'étendue de nos champs d'expertise et la puissance de nos moyens techniques témoignent du savoir-faire grandissant qui nous anime et qui fait notre renommée.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Professionnels</div>
                </div>
              </div>
            </div>
            <div className="story-image relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={aboutImage}
                  alt="ABHAJE FRERES Histoire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section ref={servicesRef} className="py-24 bg-gray-50 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="header-bg absolute inset-0 w-64 h-64 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full blur-3xl opacity-20 mx-auto -top-32"></div>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Nos Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Domaines d'Activité
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Une expertise complète dans tous les domaines de la construction
            </p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="icon-container w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-500 relative z-10">
                <FaRoad className="service-icon w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="service-title text-2xl font-bold text-gray-900 mb-4 relative z-10">Travaux Routiers</h3>
              <p className="service-description text-gray-600 text-lg leading-relaxed relative z-10">Terrassements, ouvrages d'art routier, enrobés routiers</p>
              
              {/* Animated decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700"></div>
            </div>

            <div className="service-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="icon-container w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-500 relative z-10">
                <FaBuilding className="service-icon w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="service-title text-2xl font-bold text-gray-900 mb-4 relative z-10">Bâtiments</h3>  
              <p className="service-description text-gray-600 text-lg leading-relaxed relative z-10">Gros œuvre, étanchéité, lots techniques et secondaires</p>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700"></div>
            </div>

            <div className="service-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="icon-container w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-500 relative z-10">
                <FaUsers className="service-icon w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="service-title text-2xl font-bold text-gray-900 mb-4 relative z-10">Expertise Technique</h3>
              <p className="service-description text-gray-600 text-lg leading-relaxed relative z-10">Électricité, ventilation, climatisation, plomberie et sanitaire</p>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Locations Section */}
      <section ref={locationsRef} className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="header-bg absolute inset-0 w-64 h-64 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full blur-3xl opacity-20 mx-auto -top-32"></div>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Nos Implantations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Localisations
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Présents dans plusieurs régions pour mieux servir nos clients
            </p>
          </div>
         
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Siège Social",
                location: "Ouled Berhil Taroudannt"
              },
              {
                icon: <FaBuilding />,
                title: "Succursale",
                location: "Zone Industrielle Tassila-Agadir"
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Usine",
                location: "Ouled Aissa"
              }
            ].map((location, index) => (
              <div
                key={index}
                className="service-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="icon-container w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-500 relative z-10">
                  <div className="text-blue-600 text-3xl group-hover:text-white transition-colors duration-500">
                    {location.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-gray-900 transition-colors duration-500">
                  {location.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed relative z-10 group-hover:text-gray-600 transition-colors duration-500">
                  {location.location}
                </p>
                
                {/* Animated decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%23fff%22%20fill-opacity%3D%220.05%22%20d%3D%22M1%201h2v2H1V1z%22%2F%3E%3C%2Fsvg%3E')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Prêt à Démarrer Votre Projet?
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en construction
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="tel:+212528531453"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
              >
                <FaPhone className="w-5 h-5" />
                +212 528 531 453
              </a>
              <a
                href="mailto:info@abhaje.ma"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
              >
                <FaEnvelope className="w-5 h-5" />
                info@abhaje.ma
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced animations with more keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-12deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #3b82f6, #1d4ed8, #2563eb, #3b82f6);
          background-size: 400% 400%;
          border-radius: 18px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
          animation: gradient-shift 3s ease infinite;
        }
        .service-card:hover::before {
          opacity: 1;
        }
        .service-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        .header-bg {
          animation: pulse-glow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;