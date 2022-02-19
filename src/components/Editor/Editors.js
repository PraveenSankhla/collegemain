import React from "react";
import "./Editorials.css";

const Editors = () => {
  return (
        <div className="main-editor">
        <div className="editer">
            <h1>Editorial Board</h1>
            <div className="main-div">

                <div className="flex-set">
                <div class="blog-post-img">
                <img src="/img/1.png" alt="" />
                </div>
                <div class="blog-post-title">
                <h1>Mr. Om Prakash Agrawal</h1>
                <span>
                Patron, Aravali Group Of College<br />
                Phone: 9891****93<br />
                Email:abc@aravalicollege.org<br />
                Profile :
                <a href="">https://abc.com</a>
                </span>
                </div>
                </div>

            <div className="flex-set">            
            <div class="blog-post-img">
            <img src="/img/3.png" alt="" />
            </div>
            <div class="blog-post-title">
            <h1>Mr. N. L. Khetan</h1>
            <span>
            Secretary, Aravali Group of Colleges<br />
            Phone: 98******36<br />
            Email: abc@aravalicollege.org<br />
            Profile :
            <a href="">https://abc.com</a>
            </span>
            </div>
            </div>

            <div className="flex-set">
            <div class="blog-post-img">
            <img src="/img/2.jpg" alt="" />
            </div>
            <div class="blog-post-title">
            <h1>Mr. Amit Agrawal</h1>
            <span>
            
            Finance Secretary, Aravali Group of Colleges<br />
            Phone: 9870966636<br />
            Email: abc@aravalicollege.org<br />
            Profile :
            <a href="">https://abc.com</a>
            </span>
            </div>
            </div>
        </div>
        
        <h1>Honorary Director</h1>
        <div class="main-div">
        <div className="flex-set">
            <div class="blog-post-img">
            <img src="/img/5.png" alt="" />
            </div>
            <div class="blog-post-title">
            <h1>Dr. Hemant Dhabhai</h1>
            <span>
            Ph.D.
            <br />
            Director, AITS Udaipur
            <br />
            Phone: 9891****93
            <br />
            Email:abc@aravalicollege.org
            <br />
            Profile :
            <a href="">https://abc.com</a>
            </span>
            </div>
            </div>
        </div>

        <h1>Editor</h1>
        <div class="main-div">
        <div className="flex-set">
            <div class="blog-post-img">
            <img src="/img/6.jpg" alt="" />
            </div>
            <div class="blog-post-title">
            <h1>Dr. Jitendra Singh Chouhan</h1>
            <span>
            Ph.D.
            <br />
            H.O.D. of CS, AITS
            <br />
            Phone: 9891****93
            <br />
            Email:abc@aravalicollege.org
            <br />
            Profile :
            <a href="">https://abc.com</a>
            </span>
            </div>
            </div>
        </div>
          
    </div>
    </div>
  );
  }
export default Editors;
