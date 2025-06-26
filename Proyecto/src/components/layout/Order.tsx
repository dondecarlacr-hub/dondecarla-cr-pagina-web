import React from "react";
import WhatsAppButton from "../ui/WhatsAppButton";
import 'animate.css';

interface OrderProps {
  useElementOnScreen: (options: any) => [React.RefObject<any>, boolean];
}

const Order: React.FC<OrderProps> = ({ useElementOnScreen }) => {
  const [orderRef, orderVisible] = useElementOnScreen({ threshold: 0.2 });

  return (
    <section ref={orderRef} className="py-12 bg-primary text-white-1">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`font-lato text-2xl font-bold mb-6 ${orderVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
          ¿Listo para ordenar?
        </h2>
        <p className={`font-opensans text-lg mb-8 max-w-2xl mx-auto ${orderVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
          Ordena ahora por WhatsApp y disfruta de nuestra deliciosa comida en casa o pasa a visitarnos.
        </p>
        <div className={`max-w-xs mx-auto ${orderVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}>
          <WhatsAppButton className="font-opensans w-full bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-sm py-2.5 px-4" />
        </div>
      </div>
    </section>
  );
};

export default Order;
