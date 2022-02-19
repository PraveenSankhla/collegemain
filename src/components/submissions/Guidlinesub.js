import React from "react";
import "./guidesub.css";

const Guidlinesub = () => {
  return (
    <>
    <div className="sub-main">
      <div className="book-main">
        <h1 className="set">Submission Guidelines</h1>
        <p className="chal">
        Aravali Journal of Technical Research accepts manuscripts of 10-25 double spaced
          pages (font should be <b>Times New Roman</b> 12)
        including references and notes.
        </p>
        <p className="chal">
          All papers are peer-reviewed by
         peers who are active in the relevant fields of research, before
          publication.
          <br /> Articles should be sent to ajtr@aravalicollege.org.
        </p>
        <br/>
        <h3>Click here for Paper Template : </h3>
        <a href="/img/AJTR Paper Format.pdf" target={'_blank'}>AJTR Template</a>
        <br/>
        <br/>
        <h3 style={{ color: "peru", paddingLeft: "35px", fontSize: "25px" }}>
          Submission of Typescripts
        </h3>
        <p className="chal">
          Contributors are requested to follow the Guidelines given below:-
        </p>
        <p className="chal">
          The paper should be composed using MS Word 6.0 and above.<br/>
           An Abstract of about 100 words should be included to describe the main
          argument and the conclusions of the paper. <br/>
          The Abstract cannot contain endnote references. The first sheet
          should carry details
          of the author’s biodata (a brief resume of about 50 words),
          institutional affiliation,
           and the mailing address.<br/> A signed declaration of originality
          and conformance to
          research ethics by the scholar should accompany the paper; also, that
          the paper
          has not been sent to any other journal for publication. The
          ongoing PhD 
          scholar must submit a signed declaration from research guide also on
          the abovementioned aspect. <br/>All diagrams, charts and graphs should
          be referred to as Figures and consecutively numbered (Fig.1, Fig.2,
          and so on). <br/>Tables should carry only
          essential data and should complement the text. They should carry the
          source at the bottom. Each table must be
          referenced in the text. <br/>If actual statements or phrases are taken from
          another paper, the name of the author 
          should be mentioned in the text and the chosen material should be
          placed within quotation marks with an 
          appropriate reference.<br/> Author’s acknowledgement(s) may be included at
          the end of the paper and before
          References/Endnotes begin. <br/>Write dates by beginning with the month,
          followed by the date and the year
          (e.g.: September 11, 2001). In the text, write numbers in words
          till the number nine and then in numerals
           (e.g.: two, four, nine; then 10, 11, 12 and so on). <br/>Names of
          books, journals, newspapers and foreign terms in the body 
          of the text should appear in italics. References/Endnotes should be
          sequentially numbered.
          <br /> The authors are responsible for accuracy of the references.
        </p>
        <p className="chal">
          While referring to article , follow the example below:- Bernard L.
          Simonin,, Ambiguity and the process
          <br /> of knowledge transfer in strategic alliances ,Strategic
          Management Journal, Volume 20, Issue 7, pages 595–623, July 1999.
        </p>
        <p className="chal">
          Result Oriented Research Work Should be Submitted in the following
          format
        </p>
        <ul className="chol">
          <li>Title page with Author’s detail</li>
          <li>Abstracts</li>
          <li>Introduction</li>
          <li>Methods</li>
          <li>Discussion</li>
          <li>Reference in APA style</li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Guidlinesub;
