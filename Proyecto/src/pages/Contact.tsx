import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import AppService from "../services/AppService";
import {
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
  MessageCircleIcon,
} from "lucide-react";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import PrivacyPolicyModal from "../components/ui/PrivacyPolicy";

interface ContactProps {
  useElementOnScreen: (options: any) => [React.RefObject<any>, boolean];
}

const Contact: React.FC<ContactProps> = ({ useElementOnScreen }) => {
  const [bannerRef, bannerVisible] = useElementOnScreen({ threshold: 0.3 });
  const [infoRef, infoVisible] = useElementOnScreen({ threshold: 0 });
  const [formRef, formVisible] = useElementOnScreen({ threshold: 0 });
  const [showPolicy, setShowPolicy] = useState(false);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const appServiceRef = useRef(new AppService());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!acceptedPolicy) {
      Swal.fire({
        title: "Política de Privacidad",
        text: "Debes aceptar nuestra política de privacidad para continuar",
        icon: "warning",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#8B6F47",
      });
      return;
    }

    const form = e.currentTarget;

    const contacto = {
      nombre: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("phone") as HTMLInputElement).value,
      asunto: (form.elements.namedItem("subject") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      await appServiceRef.current.insertarContacto(contacto);

      Swal.fire({
        title: "Mensaje enviado",
        text: "¡Gracias por contactarnos!",
        icon: "success",
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#8B6F47",
      });

      form.reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
        icon: "error",
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#8B6F47",
      });
    }
  };

  const handleAcceptPolicy = () => {
    setAcceptedPolicy(true);
    setShowPolicy(false);
  };

  return (
    <main className="w-full bg-background-white">
      {/* Banner */}
      <header className="relative bg-secondary-1 text-white">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative h-[50vh] md:h-[25vh] flex items-center justify-center overflow-hidden">
          <img
            src="assets/banner.jpg"
            alt="Interior del restaurante Donde Carla con estilo moderno con paredes oscuras, mesas de madera y sillas, un refrigerador de bebidas iluminado, luces colgantes y una decoración de plantas en el techo"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125"
          />
          <div
            ref={bannerRef}
            className="container mx-auto px-4 z-20 text-center text-white-1"
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                bannerVisible
                  ? "animate__animated animate__fadeInDown"
                  : "opacity-0"
              }`}
            >
              <span className="text-3xl font-merriweather font-bold">
                Contáctanos
              </span>
            </h1>
            <p
              className={`font-opensans text-xl md:text-2xl max-w-2xl mx-auto ${
                bannerVisible
                  ? "animate__animated animate__fadeInUp"
                  : "opacity-0"
              }`}
            >
              Estamos listos para atenderte
            </p>
          </div>
        </div>
      </header>

      {/* Información y Formulario */}
      <section className="py-16 bg-background-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información */}
            <aside
              ref={infoRef}
              className={`${
                infoVisible
                  ? "animate__animated animate__fadeInLeft"
                  : "opacity-0"
              }`}
            >
              <h2 className="font-lato text-2xl font-bold text-primary mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-6 mb-8">
                <article className="flex items-start">
                  <MapPinIcon
                    className="w-6 h-6 text-secondary-1 mr-3 flex-shrink-0 mt-0.5"
                    aria-label="Icono de un marcador de ubicación o pin"
                  />
                  <div>
                    <h3 className="font-lato font-semibold text-primary">
                      Dirección
                    </h3>
                    <p className="font-opensans text-white-2">
                      De la entrada de los Alpes, 50 mts al sur, Provincia de
                      Cartago, Jiménez, Juan Viñas.
                    </p>
                  </div>
                </article>
                <article className="flex items-start">
                  <ClockIcon
                    className="w-6 h-6 text-secondary-1 mr-3 flex-shrink-0 mt-0.5"
                    aria-label="Icono de un reloj con las manecillas apuntando hacia la derecha"
                  />
                  <div>
                    <h3 className="font-lato font-semibold text-primary">
                      Horario
                    </h3>
                    <p className="font-opensans text-white-2">
                      Lunes: 11:00 AM - 8:00 PM <br />
                      Martes: Cerrado <br />
                      Miércoles: 11:00 AM - 9:00 PM <br />
                      Jueves: 11:00 AM - 9:30 PM <br />
                      Viernes: 11:00 AM - 10:00 PM <br />
                      Sábado: 11:00 AM - 10:00 PM <br />
                      Domingo: 11:00 AM - 9:00 PM <br />
                    </p>
                  </div>
                </article>
                <article className="flex items-start">
                  <MessageCircleIcon
                    className="w-6 h-6 text-secondary-1 mr-3 flex-shrink-0 mt-0.5"
                    aria-label="Icono de WhatsApp de diálogo"
                  />
                  <div>
                    <h3 className="font-lato font-semibold text-primary">
                      WhatsApp
                    </h3>
                    <p className="font-opensans text-white-2">+506 8509-8985</p>
                    <WhatsAppButton className="inline-block mt-2 bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-white-1 font-medium py-2 px-4 rounded-md transition-colors" />
                  </div>
                </article>
                <article className="flex items-start">
                  <InstagramIcon
                    className="w-6 h-6 text-secondary-1 mr-3 flex-shrink-0 mt-0.5"
                    aria-label="Icono de Instagram con un cuadrado de bordes redondeados y un círculo en el centro"
                  />
                  <div>
                    <h3 className="font-lato font-semibold text-primary">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/p/DBUyxSAx3kf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-opensans text-secondary-1 hover:text-secondary-3 active:text-secondary-2"
                    >
                      @dondecarla
                    </a>
                  </div>
                </article>
              </div>
            </aside>
            <div className="h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4500462559276!2d-83.74132442500607!3d9.896423690203747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d7738f7306e7%3A0xab310527000c6174!2sDonde%20Carla!5e0!3m2!1ses!2scr!4v1750784570277!5m2!1ses!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Donde Carla"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
