"use client";
import logo from "@/public/Orange tint 1.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import Loading from "./Loading";


import  CustomSpinner  from "./customSpinner.jsx"; 

import Result from "./Result";
import SubmitResport from "./SubmitResport";

import CustomFileUpload from "./CustomFileUpload";



const Main = () => {

  const [tenantId, setTenantId] = useState('');
  const [requestId, setRequestId] = useState('');
  const [status, setStatus] = useState('');
  const [results, setResults] = useState('');

  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [pdfContent, setPdfContent] = useState(""); // Add state to store PDF content
  const [showPdfDetails, setShowPdfDetails] = useState(false); // Add state to control content


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

  
  const handleFileChange = (event) => {
    let file = event.target.files[0];
    console.log("actual files",file);
    setSelectedFile( event.target.files[0]);
    console.log(event.target);
    console.log("uploaded file",selectedFile)
    console.log("new uploaded file", typeof(selectedFile));
    // Handle the selected file as needed
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    setShowPdfDetails(true);
    if (selectedFile) {

    console.log("file is present",selectedFile)

// ------------------------------
// show loading after hitting submit
    setLoading(true);

    const file = selectedFile;
    const formData = new FormData();
    formData.append('pdf_file', file);
    formData.append('language', 'en');

    const response = await fetch('https://llprod.atheniaai.com/chat/', {
      method: 'POST',
      body: formData,
    })

    let data = await response.json();
    console.log("request id is present in this response", data);
    setRequestId(data.request_id);
    console.log("from usestate variable",requestId);
    console.log(data.request_id);



    const pollInterval = setInterval(async () => {
      const statusResponse = await fetch(`https://llprod.atheniaai.com/status/?request_id=${data.request_id}`);
      const statusData = await statusResponse.json();

      console.log(statusData);
      console.log(statusData.status);

      setStatus(statusData.status);

      console.log(status);
      setLoading(true);

      if (statusData.status === 'completed') {
        setLoading(true);

        // clearInterval(pollInterval);

        const resultsResponse = await fetch(`https://llprod.atheniaai.com/results/?request_id=${data.request_id}`);
        const resultsData = await resultsResponse.json();
        setResults(resultsData.results);
        console.log(resultsData);
        console.log("resulted ...",resultsData.results)
        setLoading(false);

        clearInterval(pollInterval);

      }
    }, 5000);

      








// .............................................................................




























      try {
        // setLoading(true);
        // await new Promise((resolve) => setTimeout(resolve, 3000)); // Introduce a 5-second delay
        // const responseFromServer = await simulateServerUpload(
        console.log("inside try");
        //   selectedFile,
        //   selectedLanguage
        // );
        // setResponse(responseFromServer);
        // setPdfContent(responseFromServer.pdfContent); // Set PDF content from the server response
      } catch (error) {
        console.error("Error:", error);
      } finally {
        // setLoading(false);
        // setFiles([...files, selectedFile]);
        // setSelectedFile(null);
        console.log("finally always run");
      }
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className="container space-y-5  lg:space-y-0 ">
      <div className=" grid  grid-cols-11 gap-6">
        <div className=" col-span-11 lg:col-span-5">

          <SubmitResport
            handleFileChange={handleFileChange}
            files={files}
            handleFileUpload={handleFileUpload}
            response={response}
            handleRemoveFile={handleRemoveFile}
          />
          


           {/* <CustomFileUpload/> */}

        </div>
        <div className="w-full col-span-11 lg:col-span-6">
          <div className="l">
            <div className="flex items-center justify-end gap-5">
              <button className="text-t-base font-pt-sens font-bold underline underline-offset-2 inline-flex items-center gap-2">
                <FiDownload className="text-t-20" />
                Download
              </button>
            </div>
            <div className="py-4 border-l pl-5 border-[#787177] ">
              <div className="px-4 bg-primary flex items-center justify-between rounded-t-md py-4">
                <h3 className="text-t-base font-pt-sens font-bold text-[#02222B]">
                  Preview
                </h3>
              </div>
              {
              loading ? (


                <Loading  loadStatus = {status} />
                // "loading....."

                // <CustomSpinner/>




              ) : showPdfDetails ? (
                <Result result = {results}   />
              ) : (
                <div className=" bg-[#02222B] grid place-items-center  space-y-4  px-4 py-10 text-primary font-medium text-2xl text-center">
                  <h3> Please Upload PDF</h3>
                </div>
              )}
              <div className="px-4 bg-primary flex items-center justify-end rounded-b-md py-4">
                <div className="inline-flex items-center gap-3">
                  <h3 className="text-t-base font-pt-sens font-bold text-[#02222B]">
                    Powered by
                  </h3>
                  <Image src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
