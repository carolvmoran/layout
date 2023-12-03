import React, { useEffect, useState } from "react";

import { Newsletter } from "./Newsletter/Newsletter";
import { MenuItems } from "./MenuInstitucional/menuItems";
import { MenuItemsDrawer } from "./MenuInstitucional/menuItemsDrawer";
import { SocialNetwork } from "./SocialNetwork/SocialNetwork";

const Footer = () => {
  const device = window.innerWidth >= 1025 ? "desktop" : "mobile";
  const [menuDevice, setMenuDevice] = useState(window.innerWidth >= 1025);
  useEffect(() => {
    const handleResize = () => {
      setMenuDevice(window.innerWidth >= 1025);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <footer>
      <Newsletter />
      {menuDevice ? (
        <MenuItems device={device} />
      ) : (
        <MenuItemsDrawer device={device} />
      )}
      <SocialNetwork />
    </footer>
  );
};

export { Footer };
