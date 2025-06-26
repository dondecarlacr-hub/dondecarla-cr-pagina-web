import React from "react";
import Data from "../json/menu.json";
import { Link } from "react-router-dom";
import InstagramFeed from "../components/layout/instagramFeed/instagramFeed";
import {
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
} from "lucide-react";
import WhatsAppButton from "../components/ui/WhatsAppButton";

interface HomeProps {
  useElementOnScreen: (options: any) => [React.RefObject<any>, boolean];
}

const Home: React.FC<HomeProps> = ({ useElementOnScreen }) => {
  // refs y estados de visibilidad para cada animación
  const [bannerButtonsRef, bannerButtonsVisible] = useElementOnScreen({ threshold: 0.3 });
  const [welcomeDescRef, welcomeDescVisible] = useElementOnScreen({ threshold: 0 });
  const [welcomeImageRef, welcomeImageVisible] = useElementOnScreen({ threshold: 0 });
  const [featuredTitleRef, featuredTitleVisible] = useElementOnScreen({ threshold: 0.3 });
  const [featuredItemsRef, featuredItemsVisible] = useElementOnScreen({ threshold: 0 });
  const [featuredBtnRef, featuredBtnVisible] = useElementOnScreen({ threshold: 0 });
  const [findUsDescRef, findUsDescVisible] = useElementOnScreen({ threshold: 0 });
  const [findUsImageRef, findUsImageVisible] = useElementOnScreen({ threshold: 0 });
  const [instagramTitleRef, instagramTitleVisible] = useElementOnScreen({ threshold: 0.3 });
  const [instagramFeedRef, instagramFeedVisible] = useElementOnScreen({ threshold: 0.3 });
  const [instagramLinkRef, instagramLinkVisible] = useElementOnScreen({ threshold: 0.3 });

  // Filtrar solo los especiales
  const specialItems = menuItems.filter((item) => item.isSpecial);

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative h-[50vh] md:h-[46vh] flex items-center justify-center overflow-hidden">
          <img
            src="../assets/banner.jpeg"
            alt="Interior de Donde Carla"
            className="absolute object-cover inset-0 w-full h-full brightness-50 contrast-125"
          />
          <div ref={bannerButtonsRef} className="container mx-auto px-4 z-20 text-center">
            <h1  className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-4 ${bannerButtonsVisible ? "animate__animated animate__fadeInDown" : "opacity-0"}`}>
              <span className="font-playfair text-white-1">Donde </span>
              <span className="font-dancing text-golden-1">Carla</span>
            </h1>
            <p className={`text-white-1 font-opensans text-xl md:text-2xl m-8 max-w-2xl mx-auto ${bannerButtonsVisible ? "animate__animated animate__fadeInUp" : "opacity-0"}`}>
              Disfruta de la mejor comida y siéntete como en casa.
            </p>
            <div
              className={`grid justify-items-stretch gap-4 md:flex md:flex-row md:justify-center md:gap-40
                ${bannerButtonsVisible ? "animate__animated animate__fadeIn" : "opacity-0"}`}
            >
              <Link
                to="/menu"
                className="font-opensans justify-self-center md:flex md:items-center md:justify-center bg-secondary-1 hover:bg-secondary-3 active:bg-secondary-2 text-white-1 font-medium text-sm py-2.5 px-4 rounded-md w-[20em] sm:w-[50vw] md:w-48 text-center"
              >
                Ver Menú
              </Link>
              <WhatsAppButton className="font-opensans justify-self-center w-[20em] sm:w-[50vw] md:w-48 text-sm py-2.5 px-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Bienvenida */}
      <section className="py-16 bg-background-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              ref={welcomeDescRef}
              className={`${
                welcomeDescVisible
                  ? "animate__animated animate__fadeInLeft"
                  : "opacity-0"
              }`}
            >
              <h2 className="font-lato text-3xl font-bold text-primary mb-4">
                Bienvenidos a Donde Carla
              </h2>
              <p className="font-opensans text-white-2 mb-6">
                Desde hace 2 años, Donde Carla ha sido el destino favorito para
                disfrutar de comida casera de alta calidad en Juan Viñas.
              </p>
              <Link
                to="/about"
                className="font-opensans inline-flex items-center text-secondary-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors"
              >
                Conoce nuestra historia
                <ArrowRightIcon size={16} className="ml-2" />
              </Link>
            </div>
            <div
              ref={welcomeImageRef}
              className={`rounded-lg overflow-hidden shadow-lg ${
                welcomeImageVisible
                  ? "animate__animated animate__fadeInRight"
                  : "opacity-0"
              }`}
            >
              <img
                src="src/assets/bienvenida-imagen.jpg"
                alt="Interior de Donde Carla"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platillos Destacados */}
      <section className="py-16 bg-background-beige">
        <div className="container mx-auto px-4">
          <h2
            ref={featuredTitleRef}
            className={`font-lato text-3xl font-bold text-center text-primary mb-12 ${
              featuredTitleVisible ? "animate__animated animate__fadeInDown" : "opacity-0"
            }`}
          >
            Nuestros Platillos Destacados
          </h2>

          <div
            ref={featuredItemsRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
              featuredItemsVisible ? "animate__animated animate__fadeIn" : "opacity-0"
            }`}
          >
            {specialItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <img src={item.image} alt={item.alt} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-lato text-xl font-semibold text-[#2D1B14]">{item.name}</h3>
                    <span className="font-opensans text-[#8B6F47] font-bold">₡{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-opensans inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {getCategoryName(item.category)}
                    </span>
                    <span className="font-opensans inline-block bg-[#D4AF37] text-white text-xs px-2 py-1 rounded">
                      Especial
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={featuredBtnRef}
            className={`mt-10 text-center ${
              featuredBtnVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
            }`}
          >
            <Link
              to="/menu"
              className="font-opensans inline-flex items-center bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-white-1 font-medium py-3 px-6 rounded-md transition-colors"
            >
              Ver Menú Completo
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Encuéntranos */}
      <section className="py-16 bg-background-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              ref={findUsDescRef}
              className={`order-2 md:order-1 ${
                findUsDescVisible ? "animate__animated animate__fadeInLeft" : "opacity-0"
              }`}
            >
              <h2 className="font-lato text-3xl font-bold text-primary mb-4">Encuéntranos</h2>
              <p className="font-opensans text-white-2 mb-6">
                Estamos ubicados en el corazón de Juan Viñas, con fácil acceso y
                estacionamiento disponible.
              </p>
              <div className="space-y-3 mb-6 text-white-2">
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-secondary-1 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="font-opensans">Juan Viñas, Cartago, Costa Rica</p>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-secondary-1 mr-2 flex-shrink-0 mt-0.5" />
                  <div className="font-opensans">
                    <p>Lunes: 11:00 AM - 8:00 PM</p>
                    <p>Martes: Cerrado</p>
                    <p>Miércoles: 11:00 AM - 9:00 PM</p>
                    <p>Jueves: 11:00 AM - 9:30 PM</p>
                    <p>Viernes: 11:00 AM - 10:00 PM</p>
                    <p>Sábado: 11:00 AM - 10:00 PM</p>
                    <p>Domingo: 11:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className={`font-opensans inline-flex items-center text-secondary-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
                  findUsDescVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
                }`}
              >
                Ver ubicación y contacto
                <ArrowRightIcon size={16} className="ml-2" />
              </Link>
            </div>
            <div
              ref={findUsImageRef}
              className={`order-1 md:order-2 rounded-lg overflow-hidden shadow-lg h-64 md:h-auto ${
                findUsImageVisible ? "animate__animated animate__fadeInRight" : "opacity-0"
              }`}
            >
              <img
                src="src/assets/local-donde-Carla.jpeg"
                alt="Exterior of Donde Carla restaurant with a warm, inviting facade, large windows, and an outdoor seating area visible, surrounded by lush green foliage under a clear sky."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 bg-background-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              ref={instagramTitleRef}
              className={`font-lato text-3xl font-bold text-[#2D1B14] mb-4 ${
                instagramTitleVisible ? "animate__animated animate__fadeInDown" : "opacity-0"
              }`}
            >
              Síguenos en Instagram
            </h2>
            <p
              className={`font-opensans text-gray-700 max-w-2xl mx-auto ${
                instagramTitleVisible ? "animate__animated animate__fadeInDown" : "opacity-0"
              }`}
            >
              Mantente al día con nuestras últimas creaciones y promociones especiales siguiéndonos en Instagram.
            </p>
          </div>
          <div
            ref={instagramFeedRef}
            className={`flex justify-center ${
              instagramFeedVisible ? "animate__animated animate__fadeIn" : "opacity-0"
            }`}
          >
            <InstagramFeed className="w-full" />
          </div>
          <div
            ref={instagramLinkRef}
            className={`text-center mt-8 ${
              instagramLinkVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
            }`}
          >
            <a
              href="https://www.instagram.com/p/DBUyxSAx3kf/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-opensans inline-flex items-center font-medium text-secondary-1 hover:text-secondary-3 active:text-secondary-2"
            >
              <InstagramIcon size={20} className="mr-2" />
              @dondecarla
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const featuredItems = [
  {
    name: "Casado Tradicional",
    price: "4500",
    description:
      "Arroz, frijoles, ensalada, plátano maduro y su elección de proteína.",
    image:
      "https://images.unsplash.com/photo-1599789197514-47270cd526b4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Arroz con Pollo",
    price: "3800",
    description: "Arroz salteado con pollo, vegetales y especias caseras.",
    image:
      "https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Batido de Frutas",
    price: "2200",
    description: "Batido natural con las frutas más frescas de la temporada.",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2071&auto=format&fit=crop",
  },
];

const getCategoryName = (categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "";
};

// Datos del menú en formato JSON
const categories = Data.categories;
const menuItems = Data.menuItems;

export default Home;