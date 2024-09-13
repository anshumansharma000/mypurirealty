import React from "react";
import { images } from "../../constants";
import { IconScroll } from "../../components";
import "./Hero.css";

const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {
  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">Puri's premier real estate marketing firm</h1>
          <p className="py-4">
            Get the best real estate deals in Puri with MyPuriRealty.{" "}
          </p>
          <button
            className="btn-positivus"
            onClick={() => {
              window.open(`tel:${+91943814111}`, "_self");
            }}
          >
            Book a free consultation
          </button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.real3} alt="design" />
        </div>
      </div>

      {/* <div className="clients">
        {logos.map((logo, index) => (
          <img key={index} src={images[logo]} alt={images[logo]} />
        ))}
      </div> */}
      <IconScroll />
    </div>
  );
};

export default Hero;
