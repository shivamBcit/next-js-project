// import React, { useState } from "react";

// function CustomFileUpload() {
//   const [f, setf] = useState()
//   function handlefilebyshiv(event) {
//     setf(event.target.files[0]);
//     console.log("files",f);
//   }

//   function handUploadbyshiv(e) {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", e.target.files[0]);
//     console.log(formData);
//   }

//   return (
//     <div>
//       CustomFileUpload
//       <form onSubmit={handUploadbyshiv}>
//         <input type="file" name="files" id="newform" onChange={handlefilebyshiv} />

//         <button>Upload file shivy</button>
//       </form>
//     </div>
//   );
// }

// export default CustomFileUpload;




import React, { useState, useEffect } from 'react';

function CustomFileUpload() {

    useEffect(() => {
        // This function will run when the component is mounted (app loaded).
        // Place your code here.
        console.log('Component is mounted. Run your function here.');
    
        async function getTenantId() {
            const response = await fetch('https://llprod.atheniaai.com/gettenantid/');
            const data = await response.json();
            console.log(data);
            setTenantId(data.tenant_id);
          }
          getTenantId()
        // If you need to perform cleanup when the component unmounts, return a function:
        return () => {
          // This function will run when the component unmounts.
          // Place your cleanup code here, if necessary.
        };
      }, []); // The empty array [] means this effect runs only once, on mount


  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);

    const [tenantId, setTenantId] = useState('');
    const [status, setStatus] = useState('');
    const [results, setResults] = useState('');
    const [requestId, setRequestId] = useState('');
  

  // Event handler to handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Event handler to handle file submission
//   const handleFileUpload = () => {
//     if (selectedFile) {
//       // You can perform additional operations like sending the file to a server here.
//       console.log('Selected file:', selectedFile);
//     } else {
//       alert('Please select a file before uploading.');
//     }
//   };




    
    async function uploadFile() {
    //   const fileInput = document.getElementById('fileInput');
    //   const file = fileInput.files[0];
      const file = selectedFile;

      const formData = new FormData();
      formData.append('pdf_file', file);
      formData.append('language', 'en');
  
      const response = await fetch('https://llprod.atheniaai.com/chat/', {
        method: 'POST',
        body: formData,

      });
  
      const data = await response.json();
      console.log("request id is present in this response", data);
      setRequestId(data.request_id);
      console.log("from usestate variable",requestId);
      console.log(data.request_id);
  
      const pollInterval = setInterval(async () => {
        const statusResponse = await fetch(`https://llprod.atheniaai.com/status/?request_id=${data.request_id}`);
        const statusData = await statusResponse.json();
        setStatus(statusData.status);
  
        if (statusData.status === 'completed') {
          clearInterval(pollInterval);
  
          const resultsResponse = await fetch(`https://llprod.atheniaai.com/results/?request_id=${data.request_id}`);
          const resultsData = await resultsResponse.json();
          setResults(resultsData.results);

          console.log(resultsData);
          console.log("resulted ...",resultsData.results)
        }
      }, 5000);
    }
  
    return (
      <div>
        <h1>File Upload and Processing</h1>
        <input type="file" id="fileInput"  onChange={handleFileChange} />

        <select name="language" id="">

                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="eu">European</option>


        </select>
        <button onClick={uploadFile}>Upload</button>
        <p id="tenantIdDisplay">Tenant ID: {tenantId}</p>
        <p id="statusDisplay">Status: {status}</p>
        <p id="resultsDisplay">Results: {results}</p>
      </div>
    );
  }
export default CustomFileUpload;
