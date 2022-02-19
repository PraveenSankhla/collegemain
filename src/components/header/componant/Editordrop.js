import React, { useState } from "react";
import "./dropdown.css";
import { editorDropdown } from "./Navitems";
import { Link } from "react-router-dom";

const Editordrop = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "aboutus-submenu clicked" : "aboutus-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {editorDropdown .map((item) => {
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

export default Editordrop;
