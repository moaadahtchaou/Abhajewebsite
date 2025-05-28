import { Link } from 'react-router-dom';
import { Hammer, Ruler, ArrowLeft, HardHat } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20opacity%3D%22.5%22%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] -z-10"></div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[15%] left-[15%] w-48 h-48 border-2 border-white/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute bottom-[15%] right-[15%] w-48 h-48 border-2 border-white/20 rounded-2xl -rotate-12 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Enhanced 404 Display */}
          <div className="relative mb-16 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <Ruler className="h-24 w-24 text-white/80 transform -rotate-45 hover:rotate-0 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2">
                  <HardHat className="h-8 w-8 text-yellow-400 animate-bounce" />
                </div>
              </div>
              <div className="text-[12rem] font-bold text-white leading-none tracking-tighter flex items-center">
                <span className="transform hover:scale-110 transition-transform duration-300">4</span>
                <Hammer className="h-24 w-24 text-white/80 mx-4 animate-bounce" style={{ animationDuration: '2s' }} />
                <span className="transform hover:scale-110 transition-transform duration-300">4</span>
              </div>
            </div>
          </div>

          {/* Enhanced Warning Tape */}
          <div className="w-full h-16 my-12 relative overflow-hidden transform -rotate-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-12 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-lg">
                <div className="w-full h-full flex items-center justify-center space-x-8 animate-marquee">
                  <span className="text-black font-bold text-2xl">ZONE EN CONSTRUCTION</span>
                  <span className="text-3xl">⚠️</span>
                  <span className="text-black font-bold text-2xl">ZONE EN CONSTRUCTION</span>
                  <span className="text-3xl">⚠️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Message */}
          <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl font-bold text-white mb-6 text-shadow-lg">
              Cette Page est en Construction
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              La page que vous recherchez n'existe pas ou est temporairement indisponible.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Retour à l'Accueil
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              Page Précédente
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-12deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}