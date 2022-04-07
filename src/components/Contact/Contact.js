import React, { useEffect, useRef } from "react";
import "./Contact.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const Contact = ({ google, onMarkerClick }) => {

  useEffect(() => {
    const contact=document.getElementById("contact").parentElement.style.width="100%"
  }, [])
  return (
    <>
      <div id="contact" className="contact-main">
        <div className="contact">
          <article className="col-md">
            <div className="contact-body-page">
              <div className="main-content-page">
                <header>
                  <h1 className="contact-title">Contact Us</h1>
                </header>
      
        <div className="entry-content">
          <figure className="block-table">
            <table>
              <tbody>
              <tr>
                <td>
                <strong>
                  <span className="name-head">
                      Dr. Hemant Dhabhai
                  </span>
                </strong>
                      <br />
                      Director
                      <br />
                      Aravali Institue of technical studies
                      <br />
                      Rajasthan, INDIA
                      <br />
                      Mobile:
                  <strong>+91 900 1275 999</strong>
                      {/* <br />
                      Toll-Free No,:
                  <strong>180030xxxxx</strong> */}
                      </td>
                      <td>
                  <strong>
                    <span className="name-head">
                      Dr. Jitendra Singh Chouhan
                    </span>
                  </strong>
                      <br />
                      Chief-Editor
                      <br />
                      Aravali Journal of Technical Research (AJTR)
                      <br />
                      Udaipur,
                  
                      Rajasthan, INDIA
                      <br />
                      Mobile: +91 978 409 8746
                      <br />
                      Email :
                  <strong>editor@aravalicollege.org</strong>
                      </td>
                    </tr>
                 
            <tr>
          {/* <td> */}
          <br/>
          <strong>
            <span className="name-head">
              Editor, Aravali Journal of Technical Research
            </span>
          </strong>
          <br />
          <strong>Office Address: </strong>
              Aravali Institute of Technical Studies
              <br/>
              Aravali knowledge Campus
              <br />
              Umarda, Udaipur, Rajashthan-343002
              <br />
              Phone: 9001055558
              <br />
              Email: ajtr@aravalicollege.org
              <br />
              Website: https://aravalieducation.org
            {/* </td> */}
          {/* <td>
          <strong>
            <span className="name-head">
              Contact Number of Aravali college
            </span>
               </strong>
                  <br />
                  Phone: 951xxxxxx
                  <br />
                  Fax: 01471-2xxxxx1/52
                  <br />
                  Toll-Free No.:
              <strong>180030xxxxxx3</strong>
                  <br />
                </td> */}
              </tr>
               </tbody>
                </table>
              </figure>
              
                  <h1 class="srm_gmap_heading_1 ">
                    Aravali Institute of Technical Studies
                  </h1>
                <div className="google-map">
                    <Map
                      google={google}
                      zoom={14}
                      center={{
                        lat: 24.524552,
                        lng: 73.770393,
                      }}
                      initialCenter={{
                        lat: 24.524552,
                        lng: 73.770393,
                      }}
                    >
                      <Marker
                        onClick={onMarkerClick}
                        title="Aravali Institute of Technical Studies"
                        name={"Udaipur"}
                      />
                    </Map>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDd9NTutCWp3LlsU8Mw7sRrs_vJUfFzqP0",
})(Contact);
