import React, { useState } from "react";
import { items } from "./items";
import "./menuInstitucional.scss";

interface DeviceProps {
  device: string;
}

interface MenuItem {
  id: number;
  name: string;
  items: {
    nameItem: string;
    url: string;
  }[];
}

const MenuItemsDrawer: React.FC<DeviceProps> = (props) => {
  const { device } = props;
  const [openMenuInst, setOpenMenuInst] = useState<number | null>(null);

  const handleMenu = (id: number) => {
    setOpenMenuInst((prevId) => (prevId === id ? null : id));
  };

  return (
    <nav className={`${device && `menu-items__${device}`} menu-items`}>
      <ul className="menu-items__container">
        {items &&
          items.map((menuItem: MenuItem) => (
            <div className="menu-items__context" key={menuItem.id}>
              <button
                className="menu-items__titleBtm"
                onClick={() => handleMenu(menuItem.id)}
              >
                <li className="menu-items__title">{menuItem.name}</li> +
              </button>
              {openMenuInst === menuItem.id && (
                <ul className="menu-items__items">
                  {menuItem.items.map((subItem) => (
                    <a
                      key={subItem.nameItem}
                      className="menu-items__link"
                      href={subItem.url}
                      title={subItem.nameItem}
                    >
                      <li className="menu-items__item">{subItem.nameItem}</li>
                    </a>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </ul>
    </nav>
  );
};

export { MenuItemsDrawer };
