import { Icon } from "@iconify/react";

import React from "react";

const ContactPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <h3>Contacts us on</h3>
      <section className="socials grid grid-cols-3 gap-5 ">
        <div className=" contact-icon">
          <a href="https://www.instagram.com" className=" text-[#eb4354] ">
            <Icon icon="akar-icons:instagram-fill" className="  text-3xl " />
          </a>
        </div>
        <div className="contact-icon">
          <a href="https://twitter.com" className=" text-[#eb4354] ">
            <Icon icon="akar-icons:twitter-fill" className="  text-3xl " />
          </a>
        </div>
        <div className=" contact-icon">
          <a href="https://github.com/" className=" text-[#eb4354] ">
            <Icon icon="akar-icons:github-fill" className="  text-3xl " />
          </a>
        </div>
        <div className=" contact-icon">
          <a href="https://www.linkedin.com/" className=" text-mblue ">
            <Icon icon="akar-icons:linkedin-box-fill" className="  text-3xl " />
          </a>
        </div>

        <div className=" contact-icon">
          <a href="mailto: onenightstand@gmail.com" className=" text-mblue ">
            <Icon icon="logos:google-gmail" className="  text-3xl " />
          </a>
        </div>
        <div className=" contact-icon ">
          <a href="tel:+254711111111" className=" text-[#eb4354]">
            <Icon icon="logos:whatsapp-icon" className="   text-3xl  " />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
