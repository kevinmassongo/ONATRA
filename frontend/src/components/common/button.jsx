import React, { useState } from "react";

export const Button = ({ className = "", children, onClick,type }) => {
  const [state, setState] = useState("default");

  const handleMouseEnter = () => setState("hover");
  const handleMouseLeave = () => setState("default");

  return (
    <button
    type={type}
      onClick={onClick} // Permet d'ajouter un événement au clic
    //   href={href} // Permet la navigation si nécessaire
      className={`inline-flex items-center px-6 py-3 mt-4 w-[300px] cursor-pointer overflow-hidden rounded-lg justify-center relative 
        ${state === "hover" ? "bg-[#2e434d] shadow-[0px_6px_10px_#00000040]" : 
          (state === "pressed") ? "bg-[#1a2a32] shadow-[0px_2px_4px_#00000026]" : 
          "bg-[#22333b] shadow-[0px_4px_8px_#00000033]"} 
        ${state === "disabled" ? "bg-[#22333b99] text-[#f2f1ed99]" : "text-[#f2f1ed]"} 
        ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={state === "disabled"}
    >
      <div className="w-fit tracking-[0] text-sm font-bold text-center whitespace-nowrap leading-5">
        {children} {/* Affiche le texte dynamique ou un texte par défaut */}
      </div>
    </button>
  );
};
