import "./CarouselBenefits.scss";
import { benefits } from "./benefits";

const PerkBar = () => {
  return (
    <div className="carousel-benefits-item">
      {benefits &&
        benefits.map((e: any) => {
          return (
            <div className="carousel-benefits-item__container">
              <img src={e.icon} alt={e.title} />
              <div className="carousel-benefits-item__container-text">
                <h5>{e.title}</h5>
                <p>{e.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PerkBar;
