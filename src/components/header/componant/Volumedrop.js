import React, { useEffect, useState } from "react";
import "./dropdown.css";
import { issueDropdown } from "./Navitems";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebase";

const Volumedrop = ({ year }, props) => {
  const [dropdown, setDropdown] = useState(false);
  const [data, setData] = useState([]);
  const location = useLocation();
  console.log("location", location, "props", props);
  const getData = (id) => {
    const q = query(collection(db, "folders"));
    onSnapshot(q, (querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          setData(doc.data().urls);
        }
      });
    });
  };

  console.log("array", data.length);
  return (
    <>
      <ul
        className={dropdown ? "aboutus-submenu clicked" : "aboutus-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {year.map((item, index) => {
          console.log("year yaer", item);
          return (
            <div
              style={{
                backgroundColor: "black",
                height: "100%",
                width: "100%",
                display: "flex",
                position: "relative",
                padding: "20px",
              }}
              onMouseEnter={() => {
                getData(item);
              }}
              onMouseLeave={() => setData([])}
            >
              <h1 style={{ color: "white" }}>{item}</h1>
              <i className="icon">
                <FaAngleDown />
              </i>

              {data.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    right: 5,
                    top: 0,
                    width: "100%",
                    backgroundColor: "red",
                    height: "fit-content",
                  }}
                >
                  {data.map((ite, i) => {
                    console.log("ite", ite.ur);
                    return (
                      <Link to={`/view/file/${year}/${i}`}>
                        issue number {i + 1}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Volumedrop;
