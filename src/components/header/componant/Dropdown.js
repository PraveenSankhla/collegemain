import React, { useState } from "react";
import "./dropdown.css";
import { AboutusDropdown } from "./Navitems";
import { Link } from "react-router-dom";


const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "aboutus-submenu clicked" : "aboutus-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {AboutusDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              
              
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
