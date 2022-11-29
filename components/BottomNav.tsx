import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import GavelIcon from "@mui/icons-material/Gavel";
import Link from "next/link";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 flex items-center justify-center w-full ">
      <div className="flex  w-full sm:w-1/2 py-1 my-2 border-2 border-[#eb4354] rounded-full shadow-2xl justify-evenly animate-slideInUp  items-center z-50">
        <Link href="/">
          <HomeIcon fontSize="large" className=" primary hover:animate-tada" />
        </Link>
        <Link href="/info">
          <InfoIcon fontSize="large" className=" primary hover:animate-tada" />
        </Link>
        <Link href="/downloads">
          <CloudDownloadIcon
            fontSize="medium"
            className=" primary hover:animate-tada"
          />
        </Link>
        <Link href="/terms">
          <GavelIcon fontSize="large" className=" primary hover:animate-tada" />
        </Link>
        <Link href="/contact">
          <ContactSupportIcon
            fontSize="large"
            className=" primary hover:animate-tada"
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
