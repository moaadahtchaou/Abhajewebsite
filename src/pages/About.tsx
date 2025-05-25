import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUsers, FaMedal, FaHandshake, FaChartLine, FaBuilding, FaRoad } from 'react-icons/fa';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 -z-10"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20opacity%3D%22.5%22%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9z%22%2F%3E%3Cpath%20d%3D%22M6%205V0H5v5H0v1h5v94h1V6h94V5H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] -z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-blue-300/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headingRef} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full font-semibold uppercase tracking-widest text-xs mb-4 animate-text">
              Notre Profil
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="animate-text inline-block">À Propos de</span>{' '}
              <span className="animate-text inline-block text-blue-200">ABHAJE FRERES</span>
            </h1>
            <p className="text-white/90 text-lg animate-text">
              Leader dans la construction et l'entretien des infrastructures de transport routier au Maroc depuis 2001
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Notre Histoire
              </h2>
              <p className="text-gray-600 text-lg">
                ABHAJE FRERES est un leader de la construction et de l'entretien des infrastructures de transport routier au Maroc. Depuis 2001, l'entreprise n'a cessé de renforcer et d'accroître sa position au sein de l'industrie.
              </p>
              <p className="text-gray-600 text-lg">
                La compétence de notre main-d'œuvre, l'étendue de nos champs d'expertise et la puissance de nos moyens techniques témoignent du savoir-faire grandissant qui nous anime et qui fait notre renommée.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/path-to-your-company-image.jpg" 
                  alt="ABHAJE FRERES Histoire" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Domaines d'Activité
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une expertise complète dans tous les domaines de la construction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRoad className="w-8 h-8 text-blue-600" />,
                title: "Travaux Routiers",
                description: "Terrassements, ouvrages d'art routier, enrobés routiers"
              },
              {
                icon: <FaBuilding className="w-8 h-8 text-blue-600" />,
                title: "Bâtiments",
                description: "Gros œuvre, étanchéité, lots techniques et secondaires"
              },
              {
                icon: <FaUsers className="w-8 h-8 text-blue-600" />,
                title: "Expertise Technique",
                description: "Électricité, ventilation, climatisation, plomberie et sanitaire"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Implantations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Présents dans plusieurs régions pour mieux servir nos clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Siège Social",
                location: "Ouled Berhil Taroudannt"
              },
              {
                title: "Succursale",
                location: "Zone Industrielle Tassila-Agadir"
              },
              {
                title: "Usine",
                location: "Ouled Aissa"
              }
            ].map((location, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{location.title}</h3>
                <p className="text-gray-600">{location.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contactez-Nous
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Pour toute question ou demande de devis
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a 
              href="tel:+212528531453" 
              className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              +212 528 531 453
            </a>
            <a 
              href="mailto:info@abhaje.ma" 
              className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              info@abhaje.ma
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;