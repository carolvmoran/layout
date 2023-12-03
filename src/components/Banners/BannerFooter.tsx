import React from "react";
import bannerFooter from "../../assets/bannerFooter.png";

import "./bannerFooter.scss";

const BannerFooter = () => {
  return (
    <section className="banner-footer">
      <div className="banner-footer__container">
        <div className="banner-footer__container-text">
          <h4>Lorem ipsum </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>
        <img src={bannerFooter} alt="bannerFooter" />
      </div>
    </section>
  );
};

export default BannerFooter;
