
  // Access the theme colors and logo URL from process.env
  const { primary, secondary, textColor } = process.env.themeColors;
  const logoUrl = process.env.logoUrl;


const Hero = () => {
  return (
    <div className=" py-5 container space-y-1">
      <h2 className=" font-red-hat-displat text-left sm:text-center text-t-24 sm:text-t-32 font-bold text-[#EDE7E3]">
        LAB LINGO
      </h2>
      <p  style={{ color: textColor }} className="  font-red-hat-displat  text-center text-t-base sm:text-t-20 font-bold">
        Simplified and Accessible Medical Reports
      </p>
    </div>
  );
};

export default Hero;
