import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const navigation = [
    { name: "page1", link: "/" },
    { name: "page2", link: "/page2" },
    { name: "page3", link: "/page3" },
  ];

  const [open, close] = useState(false);

  const showNavBar = () => {
    close(!open);
  };

  return (
    <div className="relative">
      <div className="h-[7vh]  bg-indigo-700">
        <nav className="flex c_conteiner items-center justify-around h-[100%]">
          <ul className="lg:flex hidden items-center justify-center gap-3">
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
          <div className="w-full bg-transparent">
            <Link to="/" className="font-bold text-xl text-slate-900 hover:text-white">React context</Link>
          </div>
          <button className="text-2xl lg:hidden block p-3" onClick={showNavBar}>
            <FaBars className="hover:text-white" />
          </button>
        </nav>
      </div>

      {open && (
        <nav className="bg-indigo-600 lg:hidden block p-3 absolute top-0 w-[90%] right-0 h-[100vh] z-10 mob-nv">
          <button className="text-2xl p-3 hover:text-white  text-right" onClick={showNavBar}>
            <FaTimes className=""/>
          </button>
          <ul className="bg-indigo-600 w-full">
            {navigation.map((item, i) => (
              <li key={i} className="w-full text-center ">
                <NavLink
                  className="p-2 text- capitalize font-bold block text-[1.25rem] hover:text-slate-200 hover:bg-slate-600 w-full"
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
