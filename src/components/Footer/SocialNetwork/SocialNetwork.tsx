import React from "react";

import { SocialMedia } from "./SocialMedia";
import "./SocialNetwork.scss";
import { SocialPayment } from "./SocialPayment";
import { SocialDeveloper } from "./SocialDeveloper";
const SocialNetwork = () => {
  return (
    <div className="social-network">
      <div className="social-network__container">
        <SocialMedia />
        <SocialPayment />
        <SocialDeveloper />
      </div>
    </div>
  );
};

export { SocialNetwork };
