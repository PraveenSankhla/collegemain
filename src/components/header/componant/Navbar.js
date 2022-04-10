import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AboutusDropdown, navItems } from "./Navitems";
import Dropdown from "./Dropdown";
import Guidlinesdrop from "./Guidlinesdrop";
import Volumedrop from "./Volumedrop";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import Editordrop from "./Editordrop";
import { getStorage, ref, listAll } from "firebase/storage";
import { FaAngleDown, FaAlignJustify, FaTimes } from "react-icons/fa";
import { db } from "../../../firebase";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [dropdown, setDrrodown] = useState(false);
  const [guidlinesdrop, setGuidline] = useState(false);
  const [volume, setVolume] = useState(false);
  const [editor, setEditor] = useState(false);
  const [year, setYears] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    const q = query(collection(db, "folders"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.id);
      });
      setYears(array);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  
  return (
    <>
      <nav
        className="navbar"
        style={{ height: width < 974 && !isMobileView ? "80px" : "auto" }}
      >
        <ul
          className={isMobileView ? "nav-link-mobileView" : "nav-items"}
          onClick={() => setIsMobileView(false)}
        >
          {navItems.map((item) => {
            if (item.title === "About Us")
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDrrodown(true)}
                  onMouseLeave={() => setDrrodown(false)}
                >
                  <Link
                    to={item.path}
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                  >
                    {item.title}
                    {!isMobileView && (
                      <i className="icon">
                        <FaAngleDown />
                      </i>
                    )}
                  </Link>
                  {!isMobileView && dropdown && <Dropdown />}
                </li>
              );

            if (item.title === "About Us") {
              console.log("comming to aboutus");
              AboutusDropdown.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className={item.cName}
                      //onClick={() => setDropdown(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              });
            }
            if (item.title === "Issues of Journal")
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setVolume(true)}
                  onMouseLeave={() => setVolume(false)}
                >
                  <Link
                    to={item.path}
                    style={{ paddingRight: 20, paddingLeft: 20 }}
                  >
                    {item.title}
                    {!isMobileView && (
                      <i className="icon">
                        <FaAngleDown />
                      </i>
                    )}
                  </Link>
                  {!isMobileView && volume && year.length > 0 && (
                    <Volumedrop year={year} />
                  )}
                </li>
              );

            if (item.title === "Guidelines")
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setGuidline(true)}
                  onMouseLeave={() => setGuidline(false)}
                >
                  <Link
                    to={item.path}
                    style={{ paddingRight: 20, paddingLeft: 20 }}
                  >
                    {item.title}
                    {!isMobileView && (
                      <i className="icon">
                        <FaAngleDown />
                      </i>
                    )}
                  </Link>
                  {!isMobileView && guidlinesdrop && <Guidlinesdrop />}
                </li>
              );
            if (item.title === "Editorial Board")
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setEditor(true)}
                  onMouseLeave={() => setEditor(false)}
                >
                  <Link
                    to={item.path}
                    style={{ paddingRight: 20, paddingLeft: 20 }}
                  >
                    {item.title}
                    {!isMobileView && (
                      <i className="icon">
                        <FaAngleDown />
                      </i>
                    )}
                  </Link>
                  {!isMobileView && editor && <Editordrop />}
                </li>
              );

            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobileView(!isMobileView)}
        >
          {isMobileView ? (
            <i className="FaTimes ">
              <FaTimes />
            </i>
          ) : (
            <i className="after-icon">
              <FaAlignJustify />
            </i>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
