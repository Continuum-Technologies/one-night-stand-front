import { Button } from "@mantine/core";
import React from "react";
import { Icon } from "@iconify/react";

import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen min-h-[90vh] ">
      <h3 className=" primary">one night stand</h3>
      <section className="lottie w-full h-60">
        <Player
          src="https://assets4.lottiefiles.com/packages/lf20_iratqmhn.json"
          background="transparent"
          speed={1}
          loop
          autoplay
          className=" w-fit h-60"
        ></Player>
      </section>

      <p>it takes two to tango!</p>

      <Button
        component="a"
        href="https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand&hl=en_US&gl=US"
        leftIcon={
          <Icon icon="mdi:google-play" className="text-3xl font-bold" />
        }
        className="  bg-[#eb4354] rounded-full hover:animate-rubberBand"
      >
        <p className="flex flex-col p-2 ">
          <span className="">GET IT ON</span>
          <span className="capitalize ">Google Play</span>
        </p>
      </Button>
    </div>
  );
};

export default Home;
