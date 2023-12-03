import React from "react";
import { Account } from "../Account/Account";
import Logo from "../../../assets/logo-maeztra-novo.png";
import { Search } from "../Search/Search";
import { MenuMobile } from "../Menu/menuMobile";

import "./MainHeader.scss";
import { BtnCheckout } from "../Account/BtnCheckout";
import { SearchBtn } from "../Search/SearchBtn";
interface deviceProps {
  device: string;
}
const MainHeader = (props: deviceProps) => {
  const { device } = props;
  return (
    <div className={`${device && `main-header__${device}`} main-header`}>
      <div className="main-header__container">
        {device && device === "mobile" ? <MenuMobile device={device} /> : <></>}
        <a href="/" title="Home" className="main-header__logo">
          <img src={Logo} alt="logo-maeztra" />
        </a>
        {device && device === "desktop" ? <Search /> : <SearchBtn />}
        {device && device === "desktop" ? (
          <Account device={device} />
        ) : (
          <BtnCheckout device={device} />
        )}
      </div>
    </div>
  );
};

export { MainHeader };
