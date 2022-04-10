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
      <h1>Contact Us</h1>
      <table>
          <tr>
            <td>
              <span>
                <b>Dr. Hemant Dhabhai</b>  
                  <strong>
                  <br />
                  Director
                  <br />
                  Aravali Institue of technical studies
                  <br />
                  Rajasthan, INDIA
                  <br />
                  Mobile: 
                   +91 900 1275 999
                   </strong>
                </span>
            </td>
            
            <td>
              <span>
                <b>Dr. Jitendra Singh Chouhan</b>
                  <strong>
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
                  editor@aravalicollege.org
                  </strong>
                </span>
              </td>
            </tr>
            <br/>
          <br/>

        
            <span>
            <b>Aravali Journal of Technical Research</b>
            <strong>
            <br />
            Office Address : 
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
            </strong>
            </span>
          </table>    
        
        
          <h1>Aravali Institute of Technical Studies</h1>
              <div className="google-map">
                <Map
                  google={google}
                    zoom={14}
                    
                    center={{
                    lat: 24.524552,
                    lng: 73.770393,}}

                    initialCenter={{
                    lat: 24.524552,
                    lng: 73.770393,}}
                    >
                      
                    <Marker
                      onClick={onMarkerClick}
                      title="Aravali Institute of Technical Studies"
                      name={"Udaipur"}
                      />
                  </Map>
                </div>
        </div>            
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDd9NTutCWp3LlsU8Mw7sRrs_vJUfFzqP0",
})(Contact);
