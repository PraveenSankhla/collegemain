import React from "react";
import "./home.css";

const Home = () => {

return (
      <div className="home-blog">
        <div className="leftside">
          <h1>Welcome to Aravali Journal of Technical Research</h1>
          <p>
            The Aravali Journal of Technical Research (AJTR) (ISSN: (Online) xxxx -xxxx) is
            a quarterly peer-reviewed, online, open-access (OA), journal
            supported by an editorial board comprising of subject matter experts
            drawn from all disciplines.
          </p>

          <div className="middle-div">
            <p>
              The main purpose of the <b>Aravali Journal of Technical Research (AJTR)</b> is to
              bring into focus the latest developments in the field of research
              by academicians and students. AJTR publishes research papers on the
              topics related to science, engineering, information technology, arts, social science, law, management, commerce,
              etc. We welcome papers on topics related to core areas of research as well as on
              interdisciplinary topics. Please send your articles to : 
            </p>

            <a href="ajtr@aravalicollege.org">
            ajtr@aravalicollege.org
            </a>

            <p>
              <b>Publisher :</b> Aravali Institute of Technical Studies, Udaipur, Rajasthan <br />
              <b>Copyright © Authors. All rights reserved.</b> Authors are
              responsible for obtaining permission to reproduce copyright
              material from other sources. The Publisher assumes no
              responsibility for any statement of fact or opinion or copyright
              violations in the published papers. The views expressed by authors
              do not necessarily represent the viewpoint of the Journal.
            </p>
            <hr />
            <div className="mainbtn">
              <img
                src="/img/0001.jpg"
                alt="pk"
                className="img2"
              />
            </div>
            <div className="bot">
              <a href="https://www.aravalieducation.org/">
                https://www.aravalieducation.org/
              </a>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Home;