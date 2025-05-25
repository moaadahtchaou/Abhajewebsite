import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitError('Une erreur est survenue. Veuillez réessayer plus tard.');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const ContactHero = () => {
        return (
            <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 -z-10"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20opacity%3D%22.5%22%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9z%22%2F%3E%3Cpath%20d%3D%22M6%205V0H5v5H0v1h5v94h1V6h94V5H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] -z-10"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-400/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-blue-300/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)]"></div>

                <div className="container mx-auto px-4 relative mt-16 md:mt-0">
                    <div className="flex flex-col justify-center space-y-6 text-white max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white/90 w-fit mx-auto">
                            <span className="flex h-2 w-2 rounded-full bg-blue-200 mr-2"></span>
                            Contactez-Nous
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                                Discutons de Votre <span className="text-blue-200">Projet</span>
                            </h1>
                            <p className="max-w-[600px] text-white/90 text-lg md:text-xl mx-auto">
                                Notre équipe d'experts est prête à vous aider à réaliser vos projets de construction avec excellence et précision.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-white">
                        <path
                            fill="currentColor"
                            fillOpacity="1"
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                        ></path>
                    </svg>
                </div>
            </section>
        )
    }

    return (
        <div>
            <ContactHero />
            
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
                            
                            {submitSuccess ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                                    Votre message a été envoyé avec succès. Nous vous contacterons bientôt!
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {submitError && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                                            {submitError}
                                        </div>
                                    )}
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom Complet</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="+212 XXXXXXXXX"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value="">Sélectionnez un sujet</option>
                                                <option value="devis">Demande de devis</option>
                                                <option value="information">Demande d'information</option>
                                                <option value="collaboration">Proposition de collaboration</option>
                                                <option value="autre">Autre</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Décrivez votre projet ou votre demande..."
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
                                    >
                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                                    </button>
                                </form>
                            )}
                        </div>
                        
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Nos Coordonnées</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-blue-100 p-3 rounded-full">
                                            <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Adresses</h3>
                                            <div className="mt-2 text-gray-600 space-y-2">
                                                <p className="font-medium">Siège Social:</p>
                                                <p>Ouled Berhil Taroudannt</p>
                                                <p className="font-medium mt-3">Succursale:</p>
                                                <p>Zone Industrielle Tassila-Agadir</p>
                                                <p className="font-medium mt-3">Usine:</p>
                                                <p>Ouled Aissa</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-blue-100 p-3 rounded-full">
                                            <FaPhone className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Téléphone</h3>
                                            <a href="tel:+212528531453" className="mt-2 text-gray-600 hover:text-blue-600 block">
                                                +212 528 531 453
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-blue-100 p-3 rounded-full">
                                            <FaEnvelope className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Email</h3>
                                            <a href="mailto:info@abhaje.ma" className="mt-2 text-gray-600 hover:text-blue-600 block">
                                                info@abhaje.ma
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-nous</h3>
                                <div className="flex space-x-4">
                                    <a href="https://facebook.com/abhajefreres" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                                        <FaFacebook className="h-6 w-6" />
                                    </a>
                                    <a href="https://linkedin.com/company/abhajefreres" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                                        <FaLinkedin className="h-6 w-6" />
                                    </a>
                                    <a href="https://instagram.com/abhajefreres" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                                        <FaInstagram className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Heures d'Ouverture</h3>
                                <ul className="space-y-2">
                                    <li className="flex justify-between">
                                        <span className="text-gray-600">Lundi - Vendredi:</span>
                                        <span className="font-medium">8:30 - 17:30</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-600">Samedi:</span>
                                        <span className="font-medium">9:00 - 13:00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-600">Dimanche:</span>
                                        <span className="font-medium">Fermé</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Map Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Notre Emplacement</h2>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
                        {/* Google Maps iframe */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5157.882957030172!2d-9.530628023252293!3d30.391392302047013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c83ea5dfa633%3A0x2406c9c1afb54dab!2sAbhaje%20Freres!5e1!3m2!1sen!2sma!4v1748203212539!5m2!1sen!2sma" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy"
                            title="ABHAJE FRERES Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;