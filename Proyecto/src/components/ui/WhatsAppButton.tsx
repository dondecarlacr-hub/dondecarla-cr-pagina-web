import React from "react";
import { MessageCircleIcon } from "lucide-react";

interface WhatsAppButtonProps {
  className?: string;
  label?: string;
}

const WhatsAppButton = ({
  className = "",
  label = "Ordenar por WhatsApp",
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/50685098985?text=Hola,%20quiero%20hacer%20un%20pedido",
      "_blank"
    );
  };

  return (
    <div role="button" className="inline-block">
      <button
        onClick={handleWhatsAppClick}
        className={`font-opensans flex items-center justify-center bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-white-1 text-white text-base font-medium py-2.5 px-5 rounded-md transition-colors ${className}`}
        aria-label={label}
      >
        <MessageCircleIcon size={20} className="mr-2" aria-label="Icono de WhatsApp de diálogo"/>
        <span>{label}</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
