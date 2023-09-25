"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { FiUpload } from "react-icons/fi";
import { Button } from "./ui/button";
import { useState } from "react" 

const SubmitResport = ({

  handleFileChange,
  handleFileUpload,
  response,
  files,
  handleRemoveFile,
  
selectedLanguagefunc,
  // SelectValue,


}) => {

  const [lang, setlang] = useState("English")



  const { primary, secondary, animationBg, textColor, secondarytextColor} = process.env.themeColors;
const logoUrl = process.env.logoUrl;


  // function selectedLanguagefunc(event){
  //   let l = event.target.value;
  //   console.log("seleted language", l);
  //   setlang(l)
  // }


  return (
    <div className="space-y-5">
      <div className=" s">
        <h3 className=" text-t-20 font-red-hat-displat font-bold">
          Submit Report
        </h3>
        <p style={{ color: textColor  }}  className=" text-t-base font-semibold text-primary font-red-hat-displat">
          Upload your report, select your preferred language and generate of
          your comprehensive medical report instantly. Let’s get started.{" "}
        </p>
      </div>
      <form onSubmit={handleFileUpload } className=" space-y-4">
        <div className=" flex items-center  gap-6">
          <label style={{ background: secondary , textColor: secondarytextColor }} 
            htmlFor="fileInput"
            className="gap-3 inline-flex   active:bg-opacity-40 items-center justify-center rounded-sm text-base font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-[42px] font-pt-sens px-4"
          >
            <FiUpload size={24} /> Upload Health Report
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />



          {/* <Select required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
              <SelectItem value="aribic">Arabic</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
            </SelectContent>
          </Select> */}


            <select style={{ color: textColor , borderColor: secondary}}   className="flex h-[42px]  items-center justify-between rounded-md !border-2 border-primary bg-background px-3 py-2 text-t-20 ring-offset-background font-normal  !font-pt-sens  focus:outline-none focus:ring-0  disabled:cursor-not-allowed disabled:opacity-50
            
              
              "  onChange={ selectedLanguagefunc }>  
                <option className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" value="English">English</option>
                <option   className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"  value="Hindi">Hindi</option>
                <option  className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"  value="Spanish">Spanish</option>
              </select>


          <Button>Submit</Button>
        </div>
        <p className=" text-sm font-normal font-public-sens max-w-[60%] text-red">
          Please ensure the uploaded medical report is in English, in PDF
          format, and is clear.
        </p>
      </form>
      {response && (
        <div className="py-5">
          <p className="text-sm font-normal font-public-sens">
            Server Response:
            {response.success ? (
              <span className="text-green-500">{response.message}</span>
            ) : (
              <span className="text-red-500">{response.message}</span>
            )}
          </p>
        </div>
      )}
      <div className=" pt-10">
        <div 
        
        // style={{  color: secondarytextColor }}

        className=" text-sm pb-1 font-red-hat-displat text-primary font-normal border-b border-primary">
          Uploaded Report
        </div>
        <p className=" py-4 text-sm  italic font-red-hat-displat font-normal">
          By uploading the report you agree to our{" "}
          <Link href="" className=" text-primary font-bold">
            Terms & Conditions{" "}
          </Link>
          and{" "}
          <Link href="" className=" text-primary font-bold">
            Privacy Statemens
          </Link>
        </p>
        <ul className=" py-5 flex flex-col gap-y-4">
          {files.map((file, index) => (
            <li key={index} className=" inline-flex items-center gap-2">
              <span className="inline-flex w-full lg:max-w-[311px] px-2 items-center  gap-1 rounded-sm text-base bg-primary text-[#02222B] active:bg-opacity-40 font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-[42px] font-pt-sens">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.4732 16.0688C10.3559 15.916 10.2063 15.7911 10.0352 15.7028C9.83934 15.6069 9.62318 15.5598 9.40518 15.5655C9.21318 15.5655 9.03693 15.6038 8.87718 15.6795C8.71743 15.756 8.58468 15.8775 8.48118 16.0455H8.46918V15.6488H7.65918V19.8375H8.51118V18.3675H8.52318C8.62743 18.5198 8.76018 18.6338 8.92218 18.7125C9.08418 18.7905 9.26118 18.8288 9.45318 18.8288C9.68118 18.8288 9.87993 18.7845 10.0502 18.6968C10.2168 18.6121 10.3624 18.4911 10.4762 18.3428C10.5902 18.195 10.6749 18.0248 10.7312 17.832C10.7878 17.6374 10.816 17.4355 10.8152 17.2328C10.8157 17.0187 10.7875 16.8056 10.7312 16.599C10.6798 16.4074 10.5923 16.2274 10.4732 16.0688ZM9.92718 17.5748C9.90318 17.6948 9.86193 17.8005 9.80418 17.8898C9.74652 17.98 9.66841 18.0553 9.57618 18.1095C9.46882 18.1684 9.34754 18.1972 9.22518 18.1928C9.10385 18.1964 8.98375 18.1677 8.87718 18.1095C8.7836 18.056 8.70434 17.9806 8.64618 17.8898C8.5853 17.7934 8.54259 17.6866 8.52018 17.5748C8.494 17.4546 8.48093 17.3318 8.48118 17.2088C8.48118 17.0813 8.49318 16.9568 8.51718 16.8375C8.53847 16.7247 8.58015 16.6167 8.64018 16.5188C8.70036 16.4201 8.78569 16.3392 8.88744 16.2844C8.98918 16.2296 9.10367 16.2028 9.21918 16.2068C9.35493 16.2068 9.47043 16.236 9.56418 16.2945C9.65765 16.3515 9.7367 16.4293 9.79518 16.5218C9.85518 16.6163 9.89868 16.7235 9.92418 16.8435C9.95043 16.9635 9.96318 17.0858 9.96318 17.2088C9.96318 17.3325 9.95118 17.454 9.92718 17.5748ZM11.9672 15.6998C11.7947 15.7898 11.6522 15.909 11.5382 16.0575C11.4213 16.2112 11.3338 16.3851 11.2802 16.5705C11.2217 16.7664 11.1924 16.9699 11.1932 17.1743C11.1932 17.3895 11.2224 17.5973 11.2802 17.7983C11.3379 17.9978 11.4242 18.1748 11.5382 18.3285C11.6522 18.483 11.7969 18.6053 11.9732 18.6945C12.1494 18.7845 12.3534 18.8295 12.5852 18.8295C12.7892 18.8295 12.9722 18.7928 13.1342 18.7193C13.2994 18.6419 13.4366 18.5154 13.5272 18.357H13.5392V18.7508H14.3492V14.4668H13.4972V16.0268H13.4852C13.3905 15.876 13.254 15.7561 13.0922 15.6818C12.9279 15.6046 12.7487 15.5647 12.5672 15.5648C12.3592 15.5602 12.1532 15.6065 11.9672 15.6998ZM13.1432 16.2915C13.234 16.346 13.311 16.4207 13.3682 16.5098C13.4267 16.5998 13.4672 16.704 13.4912 16.8218C13.5401 17.0664 13.5401 17.3182 13.4912 17.5628C13.4672 17.6828 13.4274 17.79 13.3712 17.8838C13.3161 17.9766 13.2388 18.0542 13.1462 18.1095C13.0388 18.1684 12.9175 18.1972 12.7952 18.1928C12.6764 18.196 12.559 18.1662 12.4562 18.1065C12.3626 18.0481 12.2828 17.97 12.2222 17.8778C12.1584 17.7797 12.1126 17.671 12.0872 17.5568C12.0592 17.4388 12.0451 17.318 12.0452 17.1968C12.0452 17.0693 12.0579 16.9463 12.0842 16.8278C12.108 16.7164 12.1506 16.6099 12.2102 16.5128C12.2681 16.4214 12.3473 16.3454 12.4412 16.2915C12.5495 16.2321 12.6717 16.2028 12.7952 16.2068C12.9168 16.2019 13.0374 16.2313 13.1432 16.2915ZM15.1772 18.7508H16.0292V16.2188H16.6172V15.648H16.0292V15.4628C16.0292 15.3345 16.0539 15.2438 16.1042 15.1898C16.1537 15.1358 16.2369 15.1088 16.3532 15.1088C16.4612 15.1088 16.5654 15.1148 16.6652 15.126V14.4908C16.5932 14.4863 16.5189 14.4818 16.4432 14.4758C16.3673 14.4698 16.2913 14.4668 16.2152 14.4668C15.8672 14.4668 15.6077 14.5545 15.4352 14.7315C15.2634 14.907 15.1772 15.1328 15.1772 15.4088V15.648H14.6672V16.2188H15.1772V18.7508Z"
                    fill="white"
                  />
                  <path
                    d="M13.5 0.75H4.5V23.25H19.5V6.75L13.5 0.75ZM18 21.75H6V2.25H12.75V7.5H18V21.75Z"
                    fill="white"
                  />
                </svg>

                {file.name}
              </span>
              <button
                onClick={() => handleRemoveFile(index)}
                className=" text-white font-public-sens font-normal text-sm underline-offset-2 underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubmitResport;
