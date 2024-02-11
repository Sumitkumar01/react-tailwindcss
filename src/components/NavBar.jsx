import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const navigation = [
    { name: "page1", link: "/" },
    { name: "page2", link: "/page2" },
    { name: "page3", link: "/page3" },
  ];

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggles("res_nav");
  };

  return (
    <div className="h-[6vh] bg-indigo-700">
      <nav
        className="flex items-center justify-center max-w-[1320px] m-auto h-[100%]"
        ref={navRef}
      >
        <ul className="flex items-center justify-center gap-3">
          {navigation.map((item, i) => (
            <li key={i}>
              <NavLink
                className="p-3 text-slate-50 capitalize font-bold text-[1.25rem]"
                to={item.link}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="nav_btn nav_close-btn" onClick= {showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav_btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
}

export default NavBar;
