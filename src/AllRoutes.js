import React, { useState } from "react";
import "./respo.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import About from "./components/about/About";
import Introduction from "./components/about/Introduction";
import MissionAndVision from "./components/about/MissionAndVision";
import Objectives from "./components/about/Objectives";

import Registerasreviewer from "./components/submissions/registerasreviewer";
import Plagiarismchecker from "./components/submissions/plagiarismchecker";
import Guidlinesub from "./components/submissions/Guidlinesub";

import Editor from "./components/Editor/Editors";
import Director from "./components/Editor/Director";
import Associate from "./components/Editor/Associate";

import Cpaper from "./components/Callforpaper/Cpaper";
import Copyright from "./components/Copyright/Copyright";

import Aim from "./components/Aim/Aim";
import Research from './components/Research/Research'
import Volumes from "./components/pdffile/Volumes";

import Contact from "./components/Contact/Contact";

import AddNews from "./components/admin/AddNews";
import UploadVolume from "./components/admin/UploadVolume";


const AllRoutes = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="repo">
      <Router>
        <Header />
        <div className="respo">

          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/About" element={<About />} />
            <Route path="/about/introduction" element={<Introduction />} />
            <Route path="/about/Objectives" element={<Objectives />} />
            <Route path="/about/MissionAndVision" element={<MissionAndVision />}/>


            <Route path="/Contact" element={<Home />} />
            <Route path="/Contact/Contact" element={<Contact />} />

            <Route path="/Editor" element={<Home />} />
            <Route path="/Editor/Editors" element={<Editor />} />
            <Route path="/Editor/editornew" element={<editornew />} />

            <Route
              path="/Editor/Director"
              element={<Director />}
            />
            <Route
              path="/Editor/Editer"
              element={<Associate />}
            />

            <Route path="/Callforpaper" element={<Home />} />

            <Route path="/Callforpaper/Cpaper" element={<Cpaper />} />

            <Route path="/TurnAroundDates" element={<Home />} />

            <Route path="Copyright/Copyright" element={<Copyright />} />

            <Route path="/about/Objectives" element={<Objectives />} />
            <Route path="/firebase" element={<Home />} />

            <Route path="/Aim/Aim" element={<Aim />} />

            <Route path="/Research/Research" element={<Research />}></Route>
            <Route
              path="/submission/registerasreviewer"
              element={<Registerasreviewer />}
            />
            <Route path="/submission/Guidlinesub" element={<Guidlinesub />} />

            <Route path="/submission/plagiarismchecker" element={<Plagiarismchecker />} />

            <Route />
            <Route
              setShowSideBar={setShowSideBar}
              path="/Copyright/Copyright"
              element={<Copyright setShowSideBar={setShowSideBar} />}
            />
            {/* Admin */}
            <Route path="/admin/uploadvolume" element={<UploadVolume />} />
            <Route path="/view/file/:docid/:index" element={<Volumes />} />
            <Route path="/admin/new" element={<AddNews />} />
          </Routes>
          {showSideBar && <Sidebar />}
        </div>
        <Footer />
      </Router>
    </div>
  );
};
export default AllRoutes;
