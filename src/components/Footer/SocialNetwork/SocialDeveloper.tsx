import React from "react";
import vtex from "../../../assets/vtex.png";
import MaeztraLogo from "../../../assets/MaeztraLogo.png";
const SocialDeveloper = () => {
  return (
    <nav className="social-developer">
      <a href="https://vtex.com/br-pt/">
        <p>Powered by</p>
        <img src={vtex} alt="vtex" />
      </a>
      <a href="https://maeztra.com/">
        <p>Developed by</p>
        <img src={MaeztraLogo} alt="Maeztra" />
      </a>
    </nav>
  );
};

export { SocialDeveloper };
