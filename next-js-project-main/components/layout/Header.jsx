import { Button } from "../ui/button";
import Image from "next/image";


 // theme color variables
const logoUrl = process.env.logoUrl;

const { secondarytextColor, secondary } = process.env.themeColors;


const Header = () => {
  return (
    <header className=" py-6 container flex items-center justify-between">
      <div>
        <Image src={ logoUrl } alt="logo"  width="100" height="100" />

      </div>
      <div className=" flex items-center gap-x-5">
        <Button 
        style={{   background: secondary , color: secondarytextColor }}
        
        className="hover:bg-opacity-25  h-[42px]">Logout</Button>
      </div>
    </header>
  );
};

export default Header;
