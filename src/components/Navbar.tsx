import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Images/Logo/logo2-Photoroom.png';
import { useEffect, useState } from 'react';
import './style.css'
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation();
  
    // Handle scroll effect
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }
  
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])



      const navLinks = [
        { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ]

    return (
        <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
          </Link>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
                  pathname === link.href ? "text-yellow-600" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <div  className="bg-yellow-600 hover:bg-yellow-700">
                Get a Quote
              </div>
            </Link>
            
          </nav>
  
          {/* Mobile Navigation */}
          <div className="flex flex-col gap-3 items-center md:hidden">

            <button className={`${isOpen ? 'opened' : ''} menu bg-transparent cursor-pointer flex w-10 p-0 pb-4 border-[none] bg-red-200 z-10 `}   onClick={() => {
        setIsOpen(!isOpen)
            }} aria-label="Main Menu">
                            <svg viewBox="0 0 100 100">
                                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                <path className="line line2" d="M 20,50 H 80" />
                                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                            </svg>
                        </button>


                <div className= {isOpen ? `content active bg-[rgb(28,28,28,.95)] h-full fixed right-0 top-0 w-[225px] z-[99999] mt-10 flex flex-col` : `hidden`}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-yellow-600 ${
                        pathname === link.href ? "text-yellow-600" : "text-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <a className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700">Get a Quote</a>
                  </Link>
                </div>
            </div>
          </div>

      </header>
    );

}
export default Navbar;
