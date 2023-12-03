import React from "react";
import "./topBar.scss";

// import { TopBar } from "../../Components/medioComponents/header/Header";
// import { Footer } from "../../Components/medioComponents/footer/Footer";

const TopBar = () => {
  return (
    <div className="top-bar__container">
      <p className="top-bar__text">
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </p>
    </div>
  );
};

export { TopBar };
