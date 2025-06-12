import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import SpaForm from "../components/Task2/SpaForm";
import FormPreview from "../components/Task2/FormPreview";
import "../components/Task2/SpaForm.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import ApiPage from "../components/Task1/ApiPage";
import Clone from "./Task3/Clone";
import NavScrollExample from "./NavScrollExample";

export default function Router() {
  const [formData, setFormData] = useState({
    spa_name: "",
    city: "",
    area: "",
    price: "",
    timing: "",
    images: [],
  });

  return (
    <>
      <BrowserRouter>
        <NavScrollExample/>

        <Routes>
          <Route path="/" element={<ApiPage />}></Route>
          <Route
            path="/task2"
            element={
              <div className="container py-4">
                <div className="row g-4 justify-content-center">
                  <div className="col-12 col-md-6">
                    <SpaForm formData={formData} setFormData={setFormData} />
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-center">
                    <FormPreview formData={formData} />
                  </div>
                </div>
              </div>
            }
          ></Route>
          <Route path="/task3" element={<Clone/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
