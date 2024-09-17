import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Headings } from "../../components";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitContact = (e) => {
    e.preventDefault();

    // Template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_7rj9747",
        "template_gbpr2vz",
        templateParams,
        "Eki1_HxqImQ7HRGwy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          // Reset form fields
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };
  return (
    <div classNameName="section-padding">
      <Headings
        title="Contact Us"
        text="Connect with Us: Let's  Discuss Your Real Estate Needs"
      />

      <div className="contact" id="quote">
        <div className="row">
          <div className="col-md-6 col-12">
            <form>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineRadio1">
                  Say Hi
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  Get a Quote
                </label>
              </div>

              <div className="form-group">
                <label>Name*</label>
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="from_name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input
                  className="form-control"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="from_email"
                  placeholder="Email"
                  value={email}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1"> Message*</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
              <button onClick={submitContact} class="btn-positivus w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
