import { Link } from 'react-router-dom';
import logo from "../assets/Images/Logo/logo2-Photoroom.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-50 w-full py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Abhaje Frere Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl">ABHAJE FRERES</span>
            </div>
            <p className="text-sm text-gray-500">
              Leader dans la construction et l'entretien des infrastructures de transport routier au Maroc depuis 2001.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/abhajefreres" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/abhajefreres" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/abhajefreres" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-blue-500">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-blue-500">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-500 hover:text-blue-500">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#routiers" className="text-sm text-gray-500 hover:text-blue-500">
                  Travaux Routiers
                </Link>
              </li>
              <li>
                <Link to="/services#batiments" className="text-sm text-gray-500 hover:text-blue-500">
                  Bâtiments
                </Link>
              </li>
              <li>
                <Link to="/services#techniques" className="text-sm text-gray-500 hover:text-blue-500">
                  Lots Techniques
                </Link>
              </li>
              <li>
                <Link to="/services#secondaires" className="text-sm text-gray-500 hover:text-blue-500">
                  Lots Secondaires
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-Nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-500 mt-0.5" />
                <div className="text-sm text-gray-500">
                  <p>Siège Social:</p>
                  <p>Ouled Berhil Taroudannt</p>
                  <p className="mt-2">Succursale:</p>
                  <p>Zone Industrielle Tassila-Agadir</p>
                  <p className="mt-2">Usine:</p>
                  <p>Ouled Aissa</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-blue-500" />
                <a href="tel:+212528531453" className="text-sm text-gray-500 hover:text-blue-500">
                  +212 528 531 453
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-blue-500" />
                <a href="mailto:info@abhaje.ma" className="text-sm text-gray-500 hover:text-blue-500">
                  info@abhaje.ma
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} ABHAJE FRERES. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-blue-500">
                Politique de Confidentialité
              </Link>
              <Link to="/terms" className="text-xs text-gray-500 hover:text-blue-500">
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;