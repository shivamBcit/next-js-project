"use client";
import loading  from "./loading.gif"
import Image from "next/image";



import { Bars, Audio } from "react-loader-spinner";

const Loading = (props) => {
  return (
    <div className=" grid   h-[26.5rem] place-items-center bg-[#02222B]">
      <div>
        {/* <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /> */}

{/* <img src="loading.gif" alt="loading.." /> */}

<Image src={loading} alt="loading.." />


        <h3 className=" py-2 text-t-20 font-medium font-red-hat-displat">
          Analyseing {props.loadStatus}
        </h3>
      </div>
    </div>
  );
};

export default Loading;
