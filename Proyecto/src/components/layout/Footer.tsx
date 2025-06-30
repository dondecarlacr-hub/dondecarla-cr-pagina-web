import React from "react";
import { Link } from "react-router-dom";
import Order from "./Order";
import { MapPinIcon, ClockIcon, InstagramIcon, PhoneIcon } from "lucide-react";

interface FooterProps {
  useElementOnScreen: (options: any) => [React.RefObject<any>, boolean];
}

const Footer: React.FC<FooterProps> = ({ useElementOnScreen }) => {
  return (
    <footer className="bg-primary text-white-1">
      <Order useElementOnScreen={useElementOnScreen} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section aria-labelledby="footer-about">
            <h3
              id="footer-about"
              className="font-lato text-xl font-semibold mb-4"
            >
              Donde Carla
            </h3>
            <p className="font-opensans text-sm mb-4">
              Comida casera, de alta calidad y con un servicio rápido y
              personalizado en Juan Viñas, Costa Rica.
            </p>
            <nav aria-label="Redes sociales" className="flex space-x-4">
              <a
                href="https://www.instagram.com/p/DBUyxSAx3kf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6 hover:text-secondary-3 active:text-secondary-2 transition-colors" />
              </a>
              <a
                href="https://wa.me/50612345678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <PhoneIcon className="w-6 h-6 hover:text-secondary-3 active:text-secondary-2 transition-colors" />
              </a>
            </nav>
          </section>

          <nav aria-label="Enlaces del sitio">
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="font-opensans hover:text-secondary-3 active:text-secondary-2 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="font-opensans hover:text-secondary-3 active:text-secondary-2 transition-colors"
                >
                  Menú
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-opensans hover:text-secondary-3 active:text-secondary-2 transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-opensans hover:text-secondary-3 active:text-secondary-2 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="font-lato text-xl font-semibold mb-4">
              Información
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <p className="font-opensans">Juan Viñas, Cartago, Costa Rica</p>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <div className="font-opensans">
                  <p>Lunes: 11:00 AM - 8:00 PM</p>
                  <p>Martes: Cerrado</p>
                  <p>Miércoles y Domingo: 11:00 AM - 9:00 PM</p>
                  <p>Jueves: 11:00 AM - 9:30 PM</p>
                  <p>Viernes y Sábado: 11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </address>
        </div>

        <div className="font-opensans mt-8 pt-6 text-center">
          <small>
            © {new Date().getFullYear()} Donde Carla. Todos los derechos
            reservados.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
