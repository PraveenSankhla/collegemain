import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import './AddNews.css'

const AddNews = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });
  const { title, description } = values;

  // console.log("ps", title);
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const addDateToFireBase = async (e) => {
    if(title=="" && description == ""){
        alert("Please Fill Details")
    }
    else{

    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "news"), {
        title: title,
        description: description,
      });

      // console.log("Document written with ID: ", docRef.id);
      alert("News Updated")
    } catch (e) {
      // console.error("Error adding document: ", e);
      alert("Something Wrong Try Again", e)
    }
    let resetvaluepk = document.getElementById('pk')
    let resetvaluepks = document.getElementById('pks')
    resetvaluepk.value="";
    resetvaluepks.value="";
  }
  };

  
  return (
    <div className='AddNews-main'>
      <input
        autoComplete="off"
        id="pk"
        type="text"
        placeholder="Enter title of News"
        // value={title}
        onChange={handleChange("title")}
      />
      <textarea
        autoComplete="off"
        id="pks"
        placeholder="Enter the News"
        // value={description}
        onChange={handleChange("description")}
      />
      <button onClick={(e) => addDateToFireBase(e)}>Create News</button>
    </div>
  );
};

export default AddNews;
