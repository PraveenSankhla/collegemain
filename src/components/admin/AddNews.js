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

  console.log("titel", title);
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const addDateToFireBase = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "news"), {
        title: title,
        description: description,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className='AddNews-main'>
      <input
        type="text"
        placeholder="Enter title of News"
        value={title}
        onChange={handleChange("title")}
      />
      <textarea
        placeholder="Enter the News"
        value={description}
        onChange={handleChange("description")}
      />
      <button onClick={(e) => addDateToFireBase(e)}>Create News</button>
    </div>
  );
};

export default AddNews;
