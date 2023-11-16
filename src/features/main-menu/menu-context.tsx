import React, { createContext, useContext, useEffect, useState } from "react";

interface MenuContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: true,
  toggleMenu: () => {},
  closeMenu: () => {}
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect( () => {
    setIsMenuOpen(window.innerWidth < 820 ? false : true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
