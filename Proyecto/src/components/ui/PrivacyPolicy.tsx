import React, { useEffect, useRef } from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  onAccept,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [isOpen]);

  // Cerrar al hacer clic fuera del modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Fondo oscuro con overlay y efecto blur - Capa separada */}
      <div
        className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-[999]"
        aria-hidden="true"
      />

      {/* Contenedor del modal */}
      <div
        className="fixed inset-0 z-[1000] overflow-y-auto"
        aria-labelledby="modal-title"
        aria-modal="true"
        role="dialog"
      >
        {/* Contenedor principal con centrado perfecto */}
        <div className="flex items-center justify-center min-h-screen pt-16 pb-4 px-4 sm:pt-0 sm:px-0">
          {/* Contenedor del modal con dimensiones responsivas */}
          <article
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-3xl mx-auto flex flex-col max-h-[calc(100vh-8rem)] sm:max-h-[90vh]"
          >
            {/* Encabezado sticky con botón X */}
            <header className="sticky top-0 bg-ternary-1 px-6 py-4 z-10 flex justify-between items-center">
              <h2
                id="modal-title"
                className="text-xl sm:text-2xl font-bold text-white-1 text-center flex-1"
              >
                Política de Privacidad
              </h2>
              <button
                onClick={onClose}
                className="text-white-1 hover:text-gray-200 focus:outline-none ml-4"
                aria-label="Cerrar modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </header>

            {/* Contenido con scroll controlado */}
            <main className="px-6 py-4 bg-slate-50 flex-1 overflow-y-auto">
              <section className="prose prose-sm sm:prose-base max-w-none">
                {/* Sección 1 */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    1. Información que Recopilamos
                  </h3>
                  <p className="text-gray-700 mb-3">
                    En Donde Carla, recopilamos información personal que usted
                    nos proporciona voluntariamente cuando:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                    {[
                      "Realiza una reservación o pedido",
                      "Se suscribe a nuestro boletín",
                      "Participa en encuestas o promociones",
                      "Nos contacta a través de formularios o correo electrónico",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Sección 2 */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    2. Uso de la Información
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Utilizamos su información personal para:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                    {[
                      "Procesar sus reservaciones y pedidos",
                      "Mejorar nuestros servicios y experiencia del cliente",
                      "Enviar comunicaciones importantes sobre su reservación",
                      "Personalizar su experiencia según sus preferencias",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Sección 3 */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    3. Protección de Datos
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Implementamos medidas de seguridad físicas, electrónicas y
                    administrativas para proteger sus datos contra:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                    {[
                      "Acceso no autorizado",
                      "Alteración o destrucción",
                      "Divulgación no autorizada",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Sección 4 */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    4. Compartición de Información
                  </h3>
                  <p className="text-gray-700 mb-3">
                    No vendemos ni alquilamos su información personal a
                    terceros. Solo compartimos información cuando:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                    {[
                      "Es necesario para proveer nuestros servicios",
                      "Lo requiera la ley o procesos legales",
                      "Usted nos dé su consentimiento explícito",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Sección 5 */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    5. Sus Derechos
                  </h3>
                  <p className="text-gray-700 mb-3">Usted tiene derecho a:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                    {[
                      "Acceder a sus datos personales",
                      "Solicitar corrección de información incorrecta",
                      "Solicitar eliminación de sus datos",
                      "Oponerse al procesamiento de sus datos",
                      "Retirar su consentimiento en cualquier momento",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Sección 6 */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    6. Cambios a esta Política
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Podemos actualizar esta política periódicamente. Le
                    notificaremos sobre cambios importantes mediante:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                    {[
                      "Un aviso visible en nuestro sitio web",
                      "Notificación por correo electrónico (si nos ha proporcionado su dirección)",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </main>

            {/* Footer sticky */}
            <footer className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row-reverse sm:justify-between gap-3">
              <button
                type="button"
                onClick={onAccept}
                className="px-6 py-2 bg-ternary-1 text-white-1 font-medium rounded-md hover:bg-ternary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-ternary-500 focus:ring-offset-2"
              >
                Aceptar Política
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Cerrar
              </button>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyModal;
