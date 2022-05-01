import React, { useState } from "react";
import "./uploadvolume.css";
import { v4 as uuidv4 } from "uuid";
import {
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../firebase";
const UploadVolume = () => {
  const [file, setFile] = useState(false);
  const onHandleChange = (e) => {
    // console.log("calling");
    setFile(e.target.files[0]);
  };
  const addFile = async (e) => {
    let inputclear = document.getElementById('pkm')
    if(inputclear.value!=""){
    e.preventDefault();
    
    const storage = getStorage();
    const folderName = `volume (${new Date().getFullYear()})`;
    const storageRef = ref(storage, `${folderName}/${uuidv4()}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then(async (url) => {
        const docRef = doc(db, "folders", folderName);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          await updateDoc(docRef, {
            urls: arrayUnion(url),
          })
            .then((data) =>
            alert("File Uploaded")
            )
            .catch((err) => alert("err", err));
        } else {
          await setDoc(doc(db, "folders", folderName), {
            urls: arrayUnion(url),
          })
            .then((data) => alert("File Saved"))
            .catch((err) => alert("err", err));
        }
      });
    });
    inputclear.value='';
  }
  else{
    alert("Please Select PDF")
  }
  };

  
  return (
    <div className="main-volume">
      <input
        id="pkm"
        className="inp"
        type="file"
        accept="application/pdf"
        onChange={onHandleChange}
        placeholder="Select Input File"
      />
      <button className="volume-btn" onClick={(e) => addFile(e)}>
        Submit
      </button>
    </div>
  );
};

export default UploadVolume;
