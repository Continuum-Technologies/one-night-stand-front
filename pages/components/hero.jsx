import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="pt-4">
      <div className="container hero_bg">
        <div className="row" style={{ bottom: 0, paddingTop: "100px" }}>
          <div className="col-md-4 offset-md-4 bg-light">
            <div className="justify-content-center text-center p-3">
              <h3>Takes two to Tango!</h3>
              <br />
              <div className="pt-4 d-flex justify-content-center space-between">
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand&hl=en_US&gl=US"
                  }
                >
                  <button className="btn btn-lg hero_main_btn mx-5">
                    Join
                  </button>
                </Link>
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand&hl=en_US&gl=US"
                  }
                >
                  <button className="btn hero_sec_btn ">sign in</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
