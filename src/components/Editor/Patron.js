import React from "react";
import "./Patron.css";

const Chairman = () => {
    return (
      <div className='chairman'>
      <div class="chairman-blog">
        <div class="chairman-blog-post">
          <h1>Patron's Message</h1>
          <div className="chairman-flex-set">
          <div class="chairman-blog-post-img">
            <img src="/img/1.png" alt="patron" />
          </div>
            <div class="chairman-blog-post-title">
                  <h1>Mr. Om Prakash Agrawal</h1>
                <span>
                  <b>Patron</b><br/> Aravali Group Of College<br />
                  {/* Phone: 9891****73<br /> */}
                  Email: ajtr@aravalicollege.org<br />
                  {/* Profile :
                  <a href="">https://www.abc.com</a> */}
                </span>
                </div>
                </div>
                </div>


          <div class="chairman-message">
            <p>
              Welcome to the online edition of Aravali Journal of Technical Research (AJTR).
              Our journal is shaped according to the internal standard and UGC
              norms. This will enable faster processing rate of the articles and
              gives us scope to include Quality articles. To get best benefits out
              of this, we encourage more practice-based articles,
              state-of-the-art content and critical review articles. This will
              help us in scoring high in performance measures and moving up in
              journal ranking lists. We will continue to publish excellent
              articles, and our rejection rates will be much higher compared to many
              top journals. It is time for us to look at the journal as truly
              international and continue to work hard to help the journal in
              climbing up the ranking ladder. We do not believe in rushing into
              shortcuts that might work in getting more citations for the
              articles. Instead, we should find better articles that discuss new
              ideas and research directions, original articles that can create
              deep interest in the readership of the journal and content that
              the researchers do not want to miss.
            </p>
          </div>
          </div>
          </div>
  );
};    
    
export default Chairman
