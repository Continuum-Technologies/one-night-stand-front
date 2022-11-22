import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div className="container pt-4">
      <h2 className="text-center">
        Make your Social Circle Bigger and Fancier
      </h2>
      <div className="row pt-3">
        <div className="col-lg-4 col-sm-2 col-md-4">
          <div className="card">
            <Image
              height={300}
              width={300}
              alt={'one-night-stand'}
              src={"/card1.webp"}
              className={"card-img-top"}
            />
            <div className="card-body">
              <p>
                On One Night Stand, women make the first move. We&apos;re
                levelling the playing field and changing the dynamics of dating.
                We believe relationships should begin with respect and equality.
              </p>
              <div className="justify-content-center text-center">
                <Link href={""}>
                  <button className="btn hero_main_btn">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="card">
            <Image
              height={300}
              width={300}
              alt={'one-night-stand'}
              src={"/one.webp"}
              cclassName={"card-img-top"}
            />
            <div className="card-body">
              <p>
                On One Night Stand, women make the first move. We&apos;re
                levelling the playing field and changing the dynamics of dating.
                We believe relationships should begin with respect and equality.
              </p>
              <div className="justify-content-center text-center">
                <Link href={""}>
                  <button className="btn hero_main_btn ">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="card">
            <Image
              height={300}
              alt={'one-night-stand'}
              width={300}
              src={"/one.webp"}
              cclassName={"card-img-top"}
            />
            <div className="card-body">
              <p>
                On One Night Stand, women make the first move. We&apos;re
                levelling the playing field and changing the dynamics of dating.
                We believe relationships should begin with respect and equality.
              </p>
              <div className="justify-content-center text-center">
                <Link href={""}>
                  <button className="btn hero_main_btn ">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center text-center pt-5 pb-5">
        <h1>Get the mobile app, socialize on the fly.</h1>
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
