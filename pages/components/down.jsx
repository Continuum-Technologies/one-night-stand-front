import Link from "next/link";
import React from "react";

export default function Down() {
  return (
    <div className="container pt-5">
      <div className="justify-content-center text-center pt-5 pb-5">
        <h1>Dowload the One Night Stand App Now.</h1>
        <p>It takes two to tango!</p>
        <br />
        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand&hl=en_US&gl=US"
          }
        >
          <button className="btn hero_main_btn btn-lg">
            <i className="bi bi-google-play text-white"></i> Get in on Google
            Playstore
          </button>
        </Link>
      </div>
    </div>
  );
}
