import React, { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { TbCarCrane } from "react-icons/tb";


// Animated element for fade-in effect
interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [delay]);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >{children}</div>
  );
};

// Service card component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
  align: 'left' | 'right';
}

const ServicesCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay, align }) => {
  return (
    <AnimatedElement delay={delay}>
      <div className={`relative group flex flex-col md:flex-row items-center md:items-stretch ${align === 'left' ? 'md:flex-row-reverse' : ''} md:even:flex-row-reverse`}> 
        {/* Timeline dot/line */}
        <div className="hidden md:flex flex-col items-center mx-6">
          <div className="w-2 h-2 rounded-full bg-blue-500 mb-1"></div>
          <div className="w-1 h-full bg-blue-100"></div>
        </div>
        {/* Card */}
        <div className={`flex-1 max-w-md p-8 bg-white rounded-3xl shadow-2xl border border-gray-100 transition-transform duration-300 group-hover:-translate-y-2 z-10 ${align === 'left' ? 'md:ml-auto' : 'md:mr-auto'}`}
          style={{ boxShadow: '0 8px 32px 0 rgba(0, 60, 255, 0.08)' }}>
          <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-all duration-300 text-blue-600 group-hover:text-white text-3xl shadow-lg">
            {icon}
          </div>
          <h3 className="text-2xl font-extrabold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

// Main Services component
const Services: React.FC = () => {
  const services = [
    {
      title: "Construction de Bâtiments",
      description: "Nous nous spécialisons dans la construction résidentielle et commerciale avec des normes de haute qualité et des conceptions innovantes.",
      icon: (
        <BsFillBuildingsFill />
),
    },
    {
      title: "Construction de Routes",
      description: "Notre équipe d'experts réalise des projets routiers de haute qualité, des autoroutes aux rues résidentielles, avec durabilité et précision.",
      icon: (<FaRoad />),
    },
    {
      title: "Développement d'Infrastructure",
      description: "Nous gérons des projets d'infrastructure complexes comprenant des ponts, des systèmes hydrauliques et des installations publiques avec excellence en ingénierie.",
      icon: (<TbCarCrane/>),
    },
    
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute left-0 top-0 w-1/2 h-96 opacity-20 -z-10" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" fill="#3B82F6" /></svg>
      <svg className="absolute right-0 bottom-0 w-1/3 h-80 opacity-10 -z-10" viewBox="0 0 300 300" fill="none"><rect width="300" height="300" rx="80" fill="#2563EB" /></svg>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <AnimatedElement delay={0.1}>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold uppercase tracking-widest text-xs mb-4">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Ce Que Nous <span className="text-blue-600">Construisons</span> Pour Vous</h2>
            <div className="mx-auto w-24 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">Du concept à la création, nous offrons l'excellence dans chaque projet. Découvrez notre gamme de services de construction conçus pour donner vie à votre vision.</p>
          </AnimatedElement>
        </div>
        {/* Zig-zag timeline cards */}
        <div className="relative flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <ServicesCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={idx * 0.1 + 0.2}
              align={idx % 2 === 0 ? 'left' : 'right'}
            />
          ))}
          {/* Vertical timeline line */}
        </div>
        {/* CTA Section */}
        <AnimatedElement delay={0.8} className="mt-24 text-center">
          <div className="bg-white/90 p-10 rounded-3xl shadow-2xl border border-blue-100 max-w-2xl mx-auto backdrop-blur">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Prêt à Démarrer Votre Projet?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Contactez-nous dès aujourd'hui pour une consultation et un devis gratuits. Nous sommes prêts à donner vie à votre vision.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-md transition-colors text-lg shadow-lg"
            >
              Obtenir un Devis Gratuit
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Services;
