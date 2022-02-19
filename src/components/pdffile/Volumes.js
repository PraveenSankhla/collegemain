import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import "./pdf.css";

const Volumes = (props) => {
  const [file, setFile] = useState();
  const [url, setUrl] = useState("");
  const params = useParams();
  console.log("params", params);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  useEffect(() => {
    if (params.docid) {
      const q = query(collection(db, "folders"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === params.docid) {
            console.log("doc", doc.data());
            setUrl(doc.data().urls[params.index]);
          }
        });
      });
    }
  }, [params]);
  console.log("url url", url);

  const downloadFile = () => {
    if (url) {
      window.location.href = url;
    } else {
      alert("no file found");
    }
  };

  return (
    <div className="main-pdf">
      <div>
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>

        {url && <iframe src={url}></iframe>}
        <button onClick={() => downloadFile()}>Download PDF</button>
      </div>
    </div>
  );
};

export default Volumes;
