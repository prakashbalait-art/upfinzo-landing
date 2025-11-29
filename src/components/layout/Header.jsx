import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../store/services/menuService";
import { setActiveItem } from "../../store/slices/menuSlice";
import Button from "../common/Button";
import "../../styles/layout/_header.scss";
import Logo from "../../assets/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const { items: menuItems } = useSelector((state) => state.menu);
  console.log(menuItems);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const handleClick = (item) => {
    dispatch(setActiveItem(item.id));
    setOpenDropdown((prev) => (prev === item.id ? null : item.id));
  };

  const handleToggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleMenuItemClick = (item) => {
    handleClick(item);
    scrollToPath(item.path);
    setMobileOpen(false);
  };

  const scrollToPath = (path) => {
    if (!path) return;

    const id = path.startsWith("#") ? path.slice(1) : path;
    const el = document.getElementById(id);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <div className="container header-content">
        {/* LOGO */}
        <div className="logo">
          <img src={Logo} alt="UpFinzo Logo" />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`menu-toggle ${mobileOpen ? "is-open" : ""}`}
          onClick={handleToggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAV */}
        <nav className={`nav ${mobileOpen ? "nav--open" : ""}`}>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item.label}
                </button>

                {item.children?.length > 0 && (
                  <ul
                    className={`submenu ${
                      openDropdown === item.id ? "active" : ""
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.id} className="submenu-item">
                        <button
                          className="submenu-link"
                          onClick={() => {
                            scrollToPath(child.path);
                            setMobileOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ACTIONS */}
        <div className="actions">
          <Button size="sm">Start building</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
