import React from "react";
import "./Footer.css";
import { images, data } from "../../constants";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img
            src={images.clearoff}
            alt="logo"
            width="50"
            height="50"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8 col-12 ">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li>
                {" "}
                <a href="#">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="col-md-2 col-12 text-center text-md-end fs-4">
          <BsFacebook /> <BsTwitter />
        </div> */}
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <ul className="info-contact">
            <li>
              {" "}
              <span>Contact us:</span>
            </li>
            <li>Email: mypurirealty@gmail.com</li>
            <li>Phone: +91-9438141111</li>
            <li>
              Address: Plot No. 186, Prabhat Lane, Dutta Tota, Puri, Odisha
              752001
            </li>
          </ul>
        </div>
        {/* <div className="col-md-8 col-12">
          <form className="row form-news">
            <div className="col-lg-6 col-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button type="submit" className="btn-positivus w-100">
                Subscribe to news
              </button>
            </div>
          </form>
        </div> */}

        <div className="rights">
          <p>© 2024 My Puri Realty. All Rights Reserved.</p>
          <p>
            <a href="#" alt="Privacy Policy">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
