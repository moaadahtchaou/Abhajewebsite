import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaIndustry, FaWarehouse } from 'react-icons/fa';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const blur1Ref = useRef<HTMLDivElement>(null);
  const blur2Ref = useRef<HTMLDivElement>(null);
  const contactInfoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading with a staggered effect
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

      // Animate decorative blurs in hero section
      if (blur1Ref.current && blur2Ref.current && heroSectionRef.current) {
        // Parallax effect
        gsap.fromTo(blur1Ref.current,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              scrub: 1.5,
              start: "top bottom", // Start when hero top enters viewport bottom
              end: "bottom top",   // End when hero bottom exits viewport top
            }
          }
        );
        gsap.fromTo(blur2Ref.current,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              scrub: 1.2,
              start: "top bottom",
              end: "bottom top",
            }
          }
        );
        // Subtle pulse effect
        gsap.to([blur1Ref.current, blur2Ref.current], {
          scale: 1.08,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 0.7, // Stagger the pulse animation
        });
      }

      // Animate form elements
      const formElements = formRef.current?.querySelectorAll('input, textarea, button');
      if (formElements) {
        gsap.from(formElements, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          }
        });
      }

      // Animate contact information section
      if (contactInfoContainerRef.current) {
        // Animate direct children of the contact info container (the two main blocks)
        gsap.from(Array.from(contactInfoContainerRef.current.children), {
          y: 30,
          opacity: 0,
          stagger: 0.2, // Slightly more stagger for distinct blocks
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactInfoContainerRef.current,
            start: "top 85%", // Adjust trigger point as needed
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen" ref={sectionRef}>
      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 -z-10"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20opacity%3D%22.5%22%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9z%22%2F%3E%3Cpath%20d%3D%22M6%205V0H5v5H0v1h5v94h1V6h94V5H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] -z-10"></div>
        
        {/* Decorative elements */}
        <div ref={blur1Ref} className="absolute top-20 right-[10%] w-64 h-64 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div ref={blur2Ref} className="absolute bottom-20 left-[10%] w-64 h-64 bg-blue-300/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headingRef} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full font-semibold uppercase tracking-widest text-xs mb-4 animate-text">
              Contactez-Nous
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="animate-text inline-block">Discutons de</span>{' '}
              <span className="animate-text inline-block text-blue-200">Votre Projet</span>
            </h1>
            <p className="text-white/90 text-lg animate-text">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="bg-blue-600 w-2 h-8 rounded-full mr-3"></span>
                Envoyez-nous un Message
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Votre prénom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Votre adresse e-mail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone <span className="text-gray-400 text-xs">(Optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Écrivez votre message ici..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 shadow-sm hover:shadow-md focus:shadow-lg resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={contactInfoContainerRef} className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="bg-blue-600 w-2 h-8 rounded-full mr-3"></span>
                  Nos Coordonnées
                </h2>
                <div className="grid gap-6">
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <FaBuilding className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Siège Social</h3>
                      <p className="text-gray-600 mt-1">Ouled Berhil Taroudannt</p>
                    </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <FaIndustry className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Succursale</h3>
                      <p className="text-gray-600 mt-1">Zone Industrielle Tassila-Agadir</p>
                    </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <FaWarehouse className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Usine</h3>
                      <p className="text-gray-600 mt-1">Ouled Aissa</p>
                    </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <FaPhone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Téléphone</h3>
                      <a href="tel:+212528531453" className="text-blue-600 hover:text-blue-700 mt-1 inline-block">
                        +212 528 531 453
                      </a>
                    </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <FaEnvelope className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Email</h3>
                      <a href="mailto:info@abhaje.ma" className="text-blue-600 hover:text-blue-700 mt-1 inline-block">
                        info@abhaje.ma
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="bg-blue-600 w-2 h-8 rounded-full mr-3"></span>
                  Heures d'Ouverture
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300">
                    <span className="font-medium text-gray-700">Lundi - Vendredi</span>
                    <span className="text-blue-600 font-semibold">8h30 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300">
                    <span className="font-medium text-gray-700">Samedi</span>
                    <span className="text-blue-600 font-semibold">9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300">
                    <span className="font-medium text-gray-700">Dimanche</span>
                    <span className="text-red-500 font-semibold">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative bg-white">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-[60px]" 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none"
            fill="#F9FAFB"
          >
            <path 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contact;