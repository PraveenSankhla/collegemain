import React, {useState } from "react";
import "./dropdown.css";
import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
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
      // const array = [];
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          setData(doc.data().urls);
        }
      });
    });
  };

  // console.log("array", data.length);
  return (
    <>
      <ul
        className={dropdown ? "aboutus-submenu clicked" : "aboutus-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {year.map((item, index) => {
          {/* console.log("year yaer", item); */}
          return (
            <div
              className="praveensankhla"
              onMouseEnter={() => {
                getData(item);
              }}
              onMouseLeave={() => setData([])}
            >
              <p className="psspecial">{item}</p>
              <i className="rits">
                <FaAngleRight />
              </i>

              <div
                style={{
                  padding: "2px",
                  paddingRight:"20px",
                  left:"90%",
                  top :"0", 
                  backgroundColor:"black",
                  position: "absolute",
                  width: "fit-content",
                  height: "fit-content",
                  display:"flex",
                  flexDirection:"column",
                }}
              >
                {data.length > 0 &&
                  data.map((ite, i) => {
                    {/* console.log("ite", ite.ur); */}
                    return (
                      <Link className="psspecial" to={`/view/file/${year}/${i}`}>
                        Issue Number {i + 1}
                      </Link>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Volumedrop;
