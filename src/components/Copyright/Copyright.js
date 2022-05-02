import React from "react";
// import { useEffect } from "react";
import "./Copyright.css";

const Copyright = ({ setShowSideBar }) => {
  // useEffect(() => {
  //   setShowSideBar(false);
  //   return () => {
  //     setShowSideBar(true);
  //   };
  // }, []);

  return (
    <>
      <div className="copyright">
        <h3>DECLARATION AND COPYRIGHT FORM</h3>

        <p>The Research Publication policy requires that prior to publication all authors or their 
        employers must transfer to the The Research Publication in writing any copyright they hold for 
        their individual papers. Transferring copyright is a necessary requirement for publication, 
        except for material in the public domain or which is reprinted with permission from a previously 
        published, copyrighted publication.</p>
        <br/>

        <p>Upon transferring copyright to The Research Publication, authors and/or their companies have 
        the right to post their The Research Publication-copyrighted material on their own servers without 
        permission, provided that the server displays a prominent notice alerting readers to their 
        obligations with respect to copyrighted material and that the posted work includes an The Research 
        Publication copyright notice.</p><br/>
        
        <p>Please send the signed hard copy of this declaration by post (preferably speed post) to <b>Chief Editor, 
          Aravali Journal of Technical Research, Aravali Knowledge Campus, Opposite Umara Railway 
        Station, Umarada, Udaipur, Rajasthan – 313001</b> or send scanned copy of complete and duly signed 
        declaration form may be sent by E-mail to <b style={{color:"#ff6900"}}>editor@aravalicollege.org</b></p>
      
        <h3>Click here for Download Copyright Form : </h3>
        <a href="/img/Copyright-form.pdf" target={'_blank'}>Copyright Form</a>
      
      </div>
    </>
  );
};

export default Copyright;
