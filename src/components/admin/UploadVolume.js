import React, { useState } from "react";
import "./uploadvolume.css";
import { v4 as uuidv4 } from "uuid";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../firebase";
const UploadVolume = () => {
  // const time = Date().now().millisecondsSinceEpoch.toString();
  // console.log("time", time);
  const [file, setFile] = useState(false);
  const onHandleChange = (e) => {
    console.log("calling");
    setFile(e.target.files[0]);
  };
  const addFile = async (e) => {
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
            .then((data) => console.log("data updated"))
            .catch((err) => console.log("err", err));
        } else {
          await setDoc(doc(db, "folders", folderName), {
            urls: arrayUnion(url),
          })
            .then((data) => console.log("data saved"))
            .catch((err) => console.log("err", err));
        }
      });
    });
  };
  return (
    <div className="main-volume">
      <input
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
