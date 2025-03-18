import React, { useState } from "react";

export const CtaLink = ({ className = "", children, href, onClick }) => {
  const [state, setState] = useState("default");

  return (
    <a
    onClick={onClick}
      href={href}  // Permet la navigation
      className={`inline-flex flex-col items-center cursor-pointer gap-0.5 px-1 py-0 overflow-hidden rounded justify-center relative ${className}`}
      onMouseEnter={() => setState("hover")}
      onMouseLeave={() => setState("default")}
    >
      <div
        className={`[font-family:'Montserrat-MediumItalic',Helvetica] w-fit mt-[-1px] italic text-sm text-center leading-5 transition-all
          ${state === "hover" ? "text-[#db995c] underline" : "text-[#1c1b1a]"} 
        `}
      >
        {children} {/* Affiche le texte dynamique du lien */}
      </div>
    </a>
  );
};
