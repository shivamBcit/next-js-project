const Result = (props) => {
  return (
    <div className="bg-[#02222B]  space-y-4  px-4 py-5 ">
      <div className="s bg-[#055166] rounded-lg  p-2 text-t-base  font-pt-sens font-normal">
        <span className=" font-bold">Disclaimer</span> : This is an AI-generated
        report and should not be considered a replacement for advice from a
        qualified medical professional. Always consult with a healthcare
        provider for accurate medical guidance and diagnosis.
      </div>

      <div className="s bg-[#055166]  w-auto  p-2 text-t-base  font-pt-sens font-normal">
        <span className=" font-bold"> Lab Ref no. :</span> XXXXXXX12244
      </div>
      <div className="s bg-[#055166]  w-auto  p-2 text-t-base  font-pt-sens font-normal">
        Blood Count & General
      </div>
      <div className="p-2 rounded-lg bg-slate-950 overflow-hidden">
        <ul className=" space-y-3 list-disc list-inside overflow-hidden">
          <li className="text-t-base  font-pt-sens font-normal">
              {props.result}
          </li>
          <li className="text-t-base  font-pt-sens font-normal">
            The Erythrocyte Sedimentation Rate (ESR) is also within the normal
            range, indicating no chronic inflammation.
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Result;
