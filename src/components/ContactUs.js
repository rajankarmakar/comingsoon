import React from "react";

function ContactUs({ closeContactTab }) {
  return (
    <div className="contact-slider p-3">
      <h5
        className="text-dark float-right d-block close-style"
        onClick={closeContactTab}
      >
        Close
      </h5>
      <div className="container mt-3 p-3 text-center">
        <h3> About Us </h3>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
          temp incididunt labore dolore magna. It is a long established fact
          that a reader will be distracted by the readable content of a page.
        </p>
        <h3 className="mt-5 mb-5"> Contact Us </h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
          />
        </div>
        <div className="input-group mb-3">
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="btn btn-lg btn-outline-dark mt-5">
          Send Message{" "}
        </button>
      </div>
      <div className="row d-flex text-center mt-3 p-3">
        <div className="col">
          <h6> Address </h6>
          <p> Somewhere, Miami, USA </p>
        </div>
        <div className="col">
          <h6> Phone No. </h6>
          <p> 012345991 </p>
        </div>
        <div className="col">
          <h6> Website </h6>
          <p> www.example.com </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
