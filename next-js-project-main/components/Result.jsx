

const { primary, secondary, animationBg } = process.env.themeColors;



const Result = (props) => {



  return (
    <div style={{ background: animationBg }} className=" space-y-4  px-4 py-5 ">
      <div style={{ background: secondary }} className="s  rounded-lg  p-2 text-t-base  font-pt-sens font-normal">
        <span className=" font-bold">Disclaimer</span> : This is an AI-generated
        report and should not be considered a replacement for advice from a
        qualified medical professional. Always consult with a healthcare
        provider for accurate medical guidance and diagnosis.
      </div>

      <div style={{ background: secondary }}   className="s  w-auto  p-2 text-t-base  font-pt-sens font-normal">
        <span className=" font-bold"> Lab Ref no. :</span> XXXXXXX12244
      </div>
      <div style={{ background: secondary }} className="s  w-auto  p-2 text-t-base  font-pt-sens font-normal">
        Blood Count & General
      </div>
      <div className="p-2 rounded-lg bg-slate-950 overflow-hidden">
        <ul className=" space-y-3 list-disc list-inside overflow-hidden">
          <li className="text-t-base  font-pt-sens font-normal">
              {props.result}
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Result;
