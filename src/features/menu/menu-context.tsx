import React, { createContext, useState } from "react";

interface MenuContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: window.innerWidth < 820 ? false : true,
  toggleMenu: () => {},
  closeMenu: () => {}
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth < 820 ? false : true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(window.innerWidth < 820 ? false : true);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => React.useContext(MenuContext);
