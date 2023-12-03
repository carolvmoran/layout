import React, { useState } from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  const [NewsletterQuery, setNewsletterQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(NewsletterQuery);
  };

  return (
    <div className="newsletter">
      <form className="newsletter__form" onSubmit={handleSubmit}>
        <label htmlFor="newsletter">Recebe Nossa Newsletter</label>
        <div className="newsletter__container">
          <input
            type="text"
            id="newsletter"
            placeholder="Digite seu e-mail"
            value={NewsletterQuery}
            onChange={handleInputChange}
            className="newsletter__input"
          />
          <button className="newsletter__btn" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export { Newsletter };
