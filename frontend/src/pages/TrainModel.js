import React, { useState } from "react";

import Header from '../components/Header';
import Footer from "../components/Footer";

import { handleFileChange, handleFileUpload } from '../utils/file';

import '../styles/TrainModel.css'

const TrainModel = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    return (
        <div>
            <Header />

            <form className="fileUpload" onSubmit={(e) => handleFileUpload(e, file, setUploadStatus)}>
                <h3>Upload a file to train the model on.</h3>

                <input
                    className="fileInput"
                    type="file"
                    accept=".txt" 
                    onChange={(e) => handleFileChange(e, setFile)} 
                />

                <button className="submit" type="submit">Upload</button>
            </form>

            {uploadStatus && <p>{uploadStatus}</p>}

            <Footer />
        </div>
    );
};

export default TrainModel;