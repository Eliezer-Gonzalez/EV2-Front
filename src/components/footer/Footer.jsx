import React from 'react';
import "../global.css";
import logo from '../../assets/logo1.png';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-cuarto py-12 px-8 w-full">
            <div className="contenedor mx-auto px-4 lg:px-8">
                {/* Grid principal de 4 bloques (4 en línea en desktop, apilados en móvil) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Bloque 1: Información de contacto */}
                    <div className="flex flex-col items-center justify-start">
                        <h3 className="text-white text-4xl font-bold mb-4 text-center">Contacto</h3>
                        <div className="flex flex-col space-y-4 items-center">
                            <a href="https://maps.app.goo.gl/nbao6Ebr1CbKqQBRA" 
                               className="flex items-center text-white hover:text-gray-300 transition-colors duration-300">
                                <HiLocationMarker className="text-6xl mr-4 text-red-500" />
                                <span className="text-sm">Jose J. Perez 449, Cholchol</span>
                            </a>
                            <a href="https://wa.me/56912345678" 
                               className="flex items-center text-white hover:text-gray-300 transition-colors duration-300">
                                <BsWhatsapp className="text-6xl mr-4 text-green-500" />
                                <span className="text-sm">+56 9 452 734200</span>
                            </a>
                            <a href="mailto:contacto@municholchol.cl" 
                               className="flex items-center text-white hover:text-gray-300 transition-colors duration-300">
                                <HiMail className="text-6xl mr-4 text-blue-500" />
                                <span className="text-sm">contacto@municholchol.cl</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Bloque 2: Mapa */}
                    <div className="flex flex-col items-center justify-start">
                        <h3 className="text-white text-4xl font-bold mb-4 text-center">Encuéntranos</h3>
                        <div className="w-full h-48 rounded-lg overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.5642622436047!2d-72.8498582!3d-38.6002556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e8e920a41681%3A0x8b0f09f3c85f15b7!2sJos%C3%A9%20Joaqu%C3%ADn%20P%C3%A9rez%20449%2C%20Cholchol%2C%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1716080101018!5m2!1ses!2scl" 
                                width="100%" 
                                height="100%" 
                                style={{border: 0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    
                    {/* Bloque 3: Logo y Copyright */}
                    <div className="flex flex-col items-center justify-start">
                        <img src={logo} alt="Logo Municipalidad de Cholchol" className="h-72 mb-4" />
                        <p className="text-white text-sm text-center font-medium">
                        </p>
                    </div>
                    
                    {/* Bloque 4: Redes sociales */}
                    <div className="flex flex-col items-center justify-center">
                        <h6 className="text-white text-4xl font-bold mb-4 text-center">Siguenos</h6>
                        <div className="flex justify-center space-x-4 mt-8">
                            <a href="https://www.facebook.com/Municholchol" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="transition-colors duration-300">
                                <FaFacebookF className="text-7xl text-blue-600 hover:text-blue-400" />
                            </a>
                            <a href="https://www.instagram.com/municholchol_oficial/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="transition-colors duration-300">
                                <FaInstagram className="text-7xl text-pink-500 hover:text-pink-400" />
                            </a>
                            <a href="https://www.youtube.com/@MunicipalidaddeCholcholOficial/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="transition-colors duration-300">
                                <FaYoutube className="text-7xl text-red-600 hover:text-red-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>  
    );
}

export default Footer;