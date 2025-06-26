import React from "react";
import { CheckIcon } from "lucide-react";
import 'animate.css';

interface AboutProps {
  useElementOnScreen: (options: any) => [React.RefObject<any>, boolean];
}

const About: React.FC<AboutProps> = ({ useElementOnScreen }) => {
  const [bannerContactRef, bannerContacVisible] = useElementOnScreen({ threshold: 0.3 });
  const [nuestraHistoriaRef, nuestraHistoriaVisible] = useElementOnScreen({ threshold: 0.1 });
  const [misionRef, misionVisible] = useElementOnScreen({ threshold: 0 });
  const [visionRef, visionVisible] = useElementOnScreen({ threshold: 0 });
  const [valoresRef, valoresVisible] = useElementOnScreen({ threshold: 0 });

  return (
    <div className="w-full bg-background-white">
      {/* Hero Section */}
      <section className="relative bg-[#2D1B14] text-white">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative h-[28vh] md:h-[35vh] flex items-center justify-center overflow-hidden">
          <img
            src="src/assets/banner.jpeg"
            alt="Interior de Donde Carla"
            className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125"
          />
          <div ref={bannerContactRef} className={`container mx-auto px-4 z-20 text-center text-white-1`}>
            <h1 className={`text-2xl md:text-3xl lg:text-4xl mb-4 ${bannerContacVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
              <span className="text-3xl font-merriweather font-bold">Sobre Nosotros </span>
            </h1>
            <p className={`font-opensans text-sm md:text-xl max-w-2xl mx-auto ${bannerContacVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
              Conoce la historia y los valores detrás de Donde Carla
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 bg-white-1">
        <div className="container mx-auto px-4">
          <div ref={nuestraHistoriaRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`font-lato font-bold text-2xl text-primary mb-4 ${nuestraHistoriaVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}>
                Nuestra Historia
              </h2>
              <p className={`font-opensans text-sm md:text-base text-white-2 mb-4 ${nuestraHistoriaVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}>
                Donde Carla nació hace más de 15 años como un pequeño negocio familiar en Juan Viñas. Fundado por Carla Rodríguez, quien siempre soñó con compartir sus recetas familiares con la comunidad.
              </p>
              <p className={`font-opensans text-sm md:text-base text-white-2 mb-4 ${nuestraHistoriaVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}>
                Lo que comenzó como un modesto local con apenas cinco mesas, se ha convertido en uno de los restaurantes más queridos de la zona, manteniendo siempre la esencia casera y el toque personal que nos caracteriza.
              </p>
              <p className={`font-opensans text-sm md:text-base text-white-2 mb-4 ${nuestraHistoriaVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}>
                A lo largo de los años, hemos crecido gracias al apoyo de nuestros fieles clientes, quienes nos han permitido expandir nuestro menú y mejorar nuestras instalaciones, pero siempre conservando la calidad y el sabor que nos distingue.
              </p>
            </div>
            <div className={`rounded-lg overflow-hidden shadow-lg ${nuestraHistoriaVisible ? 'animate__animated animate__fadeInRight' : 'opacity-0'}`}>
              <img
                src="src/assets/nuestra-historia.jpeg"
                alt="Cocineros preparando comida en Donde Carla"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-16 bg-background-beige">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${misionVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}>
            <h2 className="font-lato font-bold text-2xl text-primary mb-4">
              Misión, Visión y Valores
            </h2>
            <p className="font-opensans text-sm md:text-base text-white-2 max-w-3xl mx-auto">
              En Donde Carla, nos guiamos por principios claros que definen quiénes somos y hacia dónde vamos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <div ref={misionRef} className={`bg-white-1 p-6 rounded-lg shadow-md ${misionVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}>
              <h3 className="font-lato text-xl font-semibold text-primary mb-4">Misión</h3>
              <p className="font-opensans text-sm md:text-base text-white-2">
                Promover la calidad y satisfacción del cliente a través de una cocina consistente, atención personalizada y productos frescos, manteniendo la autenticidad de los sabores y la calidez del servicio para fidelizar a nuestros clientes y destacar en el mercado local.
              </p>
            </div>

            {/* Visión */}
            <div ref={visionRef} className={`bg-white-1 p-6 rounded-lg shadow-md ${visionVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}>
              <h3 className="font-lato text-xl font-semibold text-primary mb-4">Visión</h3>
              <p className="font-opensans text-sm md:text-base text-white-2">
                Consolidarnos como un referente gastronómico en la zona, reconocido por nuestra excelencia culinaria y servicio ágil, innovando con nuevos platillos y mejoras continuas en el local para atraer a más clientes y, a largo plazo, establecernos en un espacio propio que refleje nuestra identidad y crecimiento.
              </p>
            </div>

            {/* Valores */}
            <div ref={valoresRef} className={`bg-white-1 p-6 rounded-lg shadow-md ${valoresVisible ? 'animate__animated animate__fadeInRight' : 'opacity-0'}`}>
              <h3 className="font-lato text-xl font-semibold text-primary mb-4">Valores</h3>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-secondary-1 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="font-opensans text-sm md:text-base text-white-2">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const values = [
  "Entregar calidad en cada platillo",
  "Mantener la satisfacción del cliente",
  "Honestidad, transparencia y sinceridad",
  "Compromiso con la comunidad",
  "Trabajo en equipo",
  "Mejora continua",
];

export default About;
