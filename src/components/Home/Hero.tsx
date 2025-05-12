// Import images directly
import image1 from "../../assets/Images/Home/Hero/1.jpg";
import image2 from "../../assets/Images/Home/Hero/cham9.jpg";
import image3 from "../../assets/Images/Home/Hero/bu1.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
    // Use imported images directly
    const images = [
        image1,
        image2,
        image3
    ]

    return (          
        <div className="container mx-auto px-4 relative mt-16 md:mt-0">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6 text-white">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white/90 w-fit ">
                <span className="flex h-2 w-2 rounded-full bg-blue-200 mr-2"></span>
                Excellence en Construction
              </div>
  
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                  Bâtir <span className="text-blue-200">l'Excellence</span>, Tracer{" "}
                  <span className="text-blue-200">le Progrès</span>
                </h1>
                <p className="max-w-[600px] text-white/90 text-lg md:text-xl">
                  Abhaje Frère se spécialise dans la construction de haute qualité de bâtiments et de routes, offrant l'excellence dans
                  chaque projet avec innovation et précision.
                </p>
              </div>
  
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center text-sm text-white/90">
                  <svg
                    className="mr-2 h-4 w-4 text-blue-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Artisanat de Qualité</span>
                </div>
                <div className="flex items-center text-sm text-white/90">
                  <svg
                    className="mr-2 h-4 w-4 text-blue-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Livraison à Temps</span>
                </div>
                <div className="flex items-center text-sm text-white/90">
                  <svg
                    className="mr-2 h-4 w-4 text-blue-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Équipe d'Experts</span>
                </div>
              </div>
  
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-md transition-colors"
                >
                  Obtenir un Devis Gratuit
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <Link
                  to="projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 font-medium rounded-md transition-colors"
                >
                  Voir Nos Projets
                </Link>
              </div>
            </div>
  
            <div className="relative mt-8 lg:mt-0">
                {/*photos*/}
                <div className="relative w-full h-[550px] flex items-center justify-center">
                    {/* Image grid with modern layout */}
                    <div className="relative h-full w-full max-w-3xl mx-auto">
                        {/* Main large image */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-2xl overflow-hidden shadow-2xl">
                            <img src={images[2]} alt="Projet d'Infrastructure" className="w-72 h-72 md:w-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        </div>
                        
                        {/* Top right image */}
                        <div className="absolute top-0 right-0 z-20 rounded-2xl overflow-hidden shadow-xl">
                            <img src={images[1]} alt="Projet Routier" className="w-64 h-48 object-cover hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
                        </div>
                        
                        {/* Bottom left image */}
                        <div className="absolute bottom-0 left-0 z-20 rounded-2xl overflow-hidden shadow-xl">
                            <img src={images[0]} alt="Projet de Construction" className="w-64 h-48 object-cover hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
                        </div>
                        
                        {/* Top left decorative element */}
                        <div className="absolute top-16 left-16 w-32 h-32 bg-blue-400/20 rounded-full blur-xl z-10"></div>
                        
                        {/* Bottom right decorative element */}
                        <div className="absolute bottom-16 right-16 w-40 h-40 bg-blue-300/20 rounded-full blur-xl z-10"></div>
                        
                        {/* Decorative borders */}
                        <div className="absolute top-[15%] left-[15%] w-48 h-48 border-2 border-white/20 rounded-2xl z-0"></div>
                        <div className="absolute bottom-[15%] right-[15%] w-48 h-48 border-2 border-white/20 rounded-2xl z-0"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}

export default Hero;
