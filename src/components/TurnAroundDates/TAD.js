import React, { useEffect } from "react";
import "./TAD.css";

const TAD = ({ setShowSideBar }) => {
  // useEffect(() => {
  //   setShowSideBar(false);
  //   return () => {
  //     setShowSideBar(true);
  //   };
  // }, []);
  
  return (
    <div className="body-block">
      <div className="main-block">
        <div className="main-block-2">
          <figure className="figure">
            <table className="table-main" border="1">
              {/* <thead> */}
            {/*    <tr>
                  <th className="has-row" data-align="left">
                    Title of Paper
                  </th>
                  <th className="has-row" data-align="left">
                    Author
                  </th>
                  <th className="has-row" data-align="left">
                    Affiliation
                  </th>
                  <th className="has-row" data-align="left">
                    Date of Receipt
                  </th>
                  <th className="has-row-2" data-align="center">
                    Date of Acceptance
                  </th>
                  <th className="has-row-2" data-align="center">
                    Date of Publication
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="has-row" data-align="left">
                    Myanmar General Election (2020) and Rohingya Crisis: A Dark
                    Road to&nbsp; Democracy
                  </td>
                  <td className="has-row" data-align="left">
                    Muhammad Faridul Alam&nbsp; &nbsp; &nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Associate Professor in the Department of International
                    Relations, University of Chittagong. Bangladesh
                  </td>
                  <td className="has-row" data-align="left">
                    12 Dec 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    14 Jan 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    25 Mar 2021
                  </td>
                </tr>
 */}

                {/* <tr>
                  <td className="has-row" data-align="left">
                    Incubation Centres: Impact on Research and Entrepreneurship
                    Aspirants
                  </td>
                  <td className="has-row" data-align="left">
                    Manoj Varghese
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                </tr> */}
              {/* </tbody> */}
            </table>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default TAD;
