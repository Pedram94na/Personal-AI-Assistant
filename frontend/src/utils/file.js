export const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
};

export const handleFileUpload = async (e, file, setUploadStatus) => {
    e.preventDefault();

    if (!file) {
        setUploadStatus("Please select a file first!");
        return;
    }

    const formData = new FormData();
    formData.append('textFile', file);
    
    try
    {
        const response = await fetch("http://localhost:3300/fileRouter", {
            method: "POST",
            body: formData,
        });
        
        if (response.ok)
            setUploadStatus("File uploaded successfully!");
        
        else
            setUploadStatus(`File upload failed with status ${response.status}`);
    }
    
    catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus("Error uploading file");
    }
};