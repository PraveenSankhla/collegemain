import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import "./Volume.css";

const Volumes = (props) => {
  // const [file, setFile] = useState();
  const [url, setUrl] = useState("");
  const params = useParams();
  // console.log("params", params);
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // }
  useEffect(() => {
    if (params.docid) {
      const q = query(collection(db, "folders"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === params.docid) {
            // console.log("doc", doc.data());
            setUrl(doc.data().urls[params.index]);
          }
        });
      });
    }
  }, [params]);

  const downloadFile = () => {
    if (url) {
      window.location.href = url;
    } else {
      alert("No File Found");
    }
  };

  return (
    <div className="main-pdf">
        {/* <Document file={url} onLoadError={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document> */}
        
          {url && <table>
            
            <tr>
              <td><b>PAPER / ARTICLE  TITLE – NAME OF AUTHOR</b></td>
              <td><b>Date of Issue</b></td>
              <td><b>Page No.</b></td>
              <td><b>Download</b></td>
            </tr>

            <tr>
              <td><b>AI in Space - Trends and Applications</b> - Dr. Narendra Khatri, Dr. Jitendra Singh</td>
              <td>01 May 2022</td>
              <td>1-5</td>
              <td><button onClick={() => downloadFile()}>PDF</button></td>
            </tr>

            <tr>
              <td><b>Future Brilliant Craft and it’s Construction Materials</b> - Sachin Sharma, Imran Khan, Ravi Gautam</td>
              <td>01 May 2022</td>
              <td>6-9</td>
              <td><button onClick={() => downloadFile()}>PDF</button></td>
            </tr>

            <tr>
              <td><b>Glucagon signaling in the heart: Inhibition or Activation</b> - Utsav Jain, D. P. Sisodiya</td>
              <td>01 May 2022</td>
              <td>10-11</td>
              <td><button onClick={() => downloadFile()}>PDF</button></td>
            </tr>

            <tr>
              <td><b>Representation of women in computer game “Prince of Persia”</b> - Mrs. Sangeeta Sharma</td>
              <td>01 May 2022</td>
              <td>12-16</td>
              <td><button onClick={() => downloadFile()}>PDF</button></td>
            </tr>


            <tr>
              <td><b>Role of detrimental humoral signalling in cardio-renal cross-talk</b> - Dr. Narendra Khatri, Naresh Janwa, Vandana nair</td>
              <td>01 May 2022</td>
              <td>17-18</td>
              <td><button onClick={() => downloadFile()}>PDF</button></td>
            </tr>
            
          </table>}

        {/* {url && <iframe title="myframe" src={url}></iframe>} */}
        {/* <button onClick={() => downloadFile()}>Download PDF</button> */}
    </div>
  );
};

export default Volumes;
