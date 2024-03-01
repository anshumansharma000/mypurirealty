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
          <h1 className="title">The best premium drones in Bhubaneswar </h1>
          <p className="py-4">
            Get the best in class price and services with DJI Drone shop.{" "}
          </p>
          <button
            className="btn-positivus"
            onClick={() => {
              window.open(`tel:${+917008560260}`, "_self");
            }}
          >
            Book a free consultation
          </button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.droneHero} alt="design" />
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
