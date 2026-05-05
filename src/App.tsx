/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Calendar, 
  Menu, 
  X, 
  Scissors, 
  Sparkles, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';

/**
 * Peluquería José del Cid - Web Elegante en Negro y Dorado
 * San Fernando, Cádiz
 */

// Tipos para los servicios
interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  icono: React.ReactNode;
}

const SERVICIOS: Servicio[] = [
  {
    id: '1',
    nombre: 'Corte de Autor',
    descripcion: 'Diseños personalizados que realzan tu belleza natural y estilo.',
    icono: <Scissors className="w-6 h-6" />,
  },
  {
    id: '2',
    nombre: 'Coloración Luxcolor',
    descripcion: 'Técnicas avanzadas de color para un brillo y durabilidad excepcionales.',
    icono: <Sparkles className="w-6 h-6" />,
  },
  {
    id: '3',
    nombre: 'Tratamientos Personalizados',
    descripcion: 'Cuidado intensivo adaptado a las necesidades específicas de tu cabello.',
    icono: <Award className="w-6 h-6" />,
  },
  {
    id: '4',
    nombre: 'Styling Medavita',
    descripcion: 'Peinados y acabados profesionales para cualquier ocasión especial.',
    icono: <Clock className="w-6 h-6" />,
  },
];

const MARCAS = [
  { nombre: 'Termix', logo: 'TERMIX' },
  { nombre: 'Medavita', logo: 'MEDAVITA' },
  { nombre: 'Luxcolor', logo: 'LUXCOLOR' },
  { nombre: 'Sweet', logo: 'SWEET' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    // Aquí se puede añadir un link a un sistema de reservas real o abrir WhatsApp
    window.open('https://wa.me/34722561763', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Botón Flotante de WhatsApp */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleBooking}
        className="fixed bottom-6 right-6 z-[100] bg-green-600 p-4 rounded-full shadow-2xl transition-colors hover:bg-green-500 md:hidden"
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.button>
      {/* --- Navegación --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-gold-500/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-2xl font-serif font-bold gold-text-gradient tracking-tighter">
              JOSÉ DEL CID
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 -mt-1 ml-1 text-gold-200">
              Peluquería de Autor
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-widest font-medium">
            <a href="#inicio" className="hover:text-gold-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-gold-400 transition-colors">Servicios</a>
            <a href="#marcas" className="hover:text-gold-400 transition-colors">Marcas</a>
            <a href="#contacto" className="hover:text-gold-400 transition-colors">Contacto</a>
            <button 
              onClick={handleBooking}
              className="px-6 py-2 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black transition-all rounded-full flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Reservar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gold-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 text-xl uppercase tracking-widest md:hidden"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="gold-text-gradient font-serif text-3xl">Inicio</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="hover:text-gold-400 transition-colors">Servicios</a>
            <a href="#marcas" onClick={() => setIsMenuOpen(false)} className="hover:text-gold-400 transition-colors">Marcas</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="hover:text-gold-400 transition-colors">Contacto</a>
            <button 
              onClick={() => { handleBooking(); setIsMenuOpen(false); }}
              className="mt-4 px-10 py-4 bg-gold-400 text-black font-bold rounded-full flex items-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              Reservar Cita
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SECCIÓN HERO --- */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        {/* 
            PARA CAMBIAR LA FOTO DE PORTADA:
            Cambia el valor de 'src' en la etiqueta <img> de abajo.
            Puedes usar una ruta local como '/tu_foto.jpg' o un enlace de internet.
        */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1560066914-1f29c2cc161a?q=80&w=2600&auto=format&fit=crop" 
            alt="Interior elegante de peluquería"
            className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-1000 scale-105"
            onLoad={(e) => e.currentTarget.classList.remove('scale-105')}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-6">
              Arte en tu <br />
              <span className="gold-text-gradient">Cabello</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-lg mb-10 leading-relaxed">
              En Peluquería José del Cid, fusionamos la elegancia clásica con las tendencias más modernas para ofrecerte una experiencia de lujo inolvidable en San Fernando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleBooking}
                className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all flex items-center justify-center gap-2 group"
              >
                Solicitar Cita
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#servicios"
                className="px-8 py-4 border border-white/20 hover:border-gold-400 transition-all rounded-full flex items-center justify-center"
              >
                Ver Servicios
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Socials */}
        <div className="absolute bottom-10 left-6 hidden md:flex flex-col space-y-6 text-white/40">
          <a href="#" className="hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
          <div className="w-px h-20 bg-white/20 mx-auto" />
          <span className="vertical-text text-[10px] tracking-widest uppercase">Redes Sociales</span>
        </div>
      </section>

      {/* --- SECCIÓN SERVICIOS --- */}
      <section id="servicios" className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Lo que hacemos</span>
              <h2 className="text-4xl md:text-5xl font-serif flex items-center gap-2">
                Nuestros <span className="gold-text-gradient">Servicios</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-md font-light">
              Utilizamos técnicas vanguardistas y los mejores productos del mercado para garantizar resultados de salón de alta gama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICIOS.map((servicio, index) => (
              <motion.div 
                key={servicio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-black border border-white/5 hover:border-gold-500/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:translate-x-10 -group-hover:translate-y-10" />
                <div className="text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {servicio.icono}
                </div>
                <h3 className="text-xl font-serif mb-4 group-hover:text-gold-300 transition-colors">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {servicio.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN MARCAS --- */}
      <section id="marcas" className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-xs mb-12 block">Marcas de Prestigio</span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
            {MARCAS.map((marca) => (
              <span 
                key={marca.nombre}
                className="text-2xl md:text-4xl font-serif tracking-[0.2em] font-light cursor-default hover:text-gold-300 transition-colors"
                title={marca.nombre}
              >
                {marca.logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN SOBRE NOSOTROS / CALL TO ACTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             {/* 
                 PARA CAMBIAR ESTA IMAGEN SECUNDARIA:
                 Cambia el valor de 'src' abajo.
             */}
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500/30" />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500/30" />
             <img 
               src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop" 
               alt="Detalle de servicio" 
               className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
             />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Excelencia Profesional en <br />
              <span className="gold-text-gradient">San Fernando</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                En nuestro salón en el corazón de Cádiz, entendemos que tu cabello es tu mejor accesorio. Por eso solo trabajamos con productos terminados de alta gama como **Termix** y sistemas de coloración nutritivos como **Medavita**.
              </p>
              <p>
                Cada visita comienza con un diagnóstico personalizado para asegurar que el tratamiento Sweet o el color Luxcolor respete la salud de tu fibra capilar.
              </p>
            </div>
            <button 
              onClick={handleBooking}
              className="mt-10 px-10 py-4 border-2 border-gold-500 text-gold-500 font-bold rounded-full hover:bg-gold-500 hover:text-black transition-all"
            >
              Vive la Experiencia
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTACTO Y PIE DE PÁGINA --- */}
      <footer id="contacto" className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <span className="text-xl font-serif gold-text-gradient font-bold block mb-4">
                JOSÉ DEL CID
              </span>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
                Redefiniendo el lujo en el cuidado del cabello en San Fernando desde 1972.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-gold-400 font-serif text-lg mb-6 underline underline-offset-8 decoration-gold-900">Ubicación</h4>
              <ul className="space-y-4 font-light text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <span>
                    Calle Méndez Núñez, 2<br />
                    11100 San Fernando, Cádiz
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold-400 font-serif text-lg mb-6 underline underline-offset-8 decoration-gold-900">Contacto</h4>
              <ul className="space-y-4 font-light text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-600" />
                  <a href="tel:722561763" className="hover:text-gold-400 transition-colors">722 56 17 63</a>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gold-600" />
                  <span>Lunes a Sábado</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold-400 font-serif text-lg mb-6 underline underline-offset-8 decoration-gold-900">Marcas</h4>
              <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-tighter opacity-60">
                <span>Termix</span>
                <span>Medavita</span>
                <span>Luxcolor</span>
                <span>Sweet</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs text-center font-light">
              &copy; {new Date().getFullYear()} Peluquería José del Cid. Todos los derechos reservados.
            </p>
            <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-gray-600 underline">
              <a href="#" className="hover:text-gold-500">Privacidad</a>
              <a href="#" className="hover:text-gold-500">Legal</a>
              <a href="#" className="hover:text-gold-500">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
