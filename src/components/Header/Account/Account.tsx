import React from "react";
import { items } from "./items";

import "./Account.scss";

import heart from "../../../assets/icon-heart.png";
import bag from "../../../assets/icon-shoppingbag.png";
import user from "../../../assets/icon-user.png";

interface deviceProps {
  device: string;
}
const Account = (props: deviceProps) => {
  const { device } = props;
  return (
    <nav className={`${device && `account-items__${device}`} account-items`}>
      <ul className="account-items__container">
        {items &&
          items.map((e: any) => {
            return (
              <a className="account-items__link" href={e.url} title={e.name}>
                <li
                  className={`${
                    e.id === 3 ? "account-items__item3" : ""
                  } account-items__item`}
                >
                  {e.icon && (
                    <img
                      src={`${e.id === 1 ? user : e.id === 2 ? heart : bag}`}
                      alt={e.name}
                    />
                  )}
                  {e.name}
                </li>
              </a>
            );
          })}
      </ul>
    </nav>
  );
};

export { Account };
