import React, { useState } from "react";
import ContactUs from "./components/ContactUs";
import Logo from "./logo.png";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [displayContact, setDisplayContact] = useState(false);

  const displayContactTab = () => {
    setDisplayContact(true);
  };
  const closeContactTab = () => {
    setDisplayContact(false);
  };
  return (
    <div className="main-background">
      {displayContact ? (
        <ContactUs closeContactTab={closeContactTab} />
      ) : (
        <span> </span>
      )}
      <div className="container text-center">
        <img src={Logo} alt="Logo" className="ml-5 mt-2" />
        <h5
          className="float-right mt-5 text-white contact-button"
          onClick={displayContactTab}
        >
          Contact Us
        </h5>
        <h2 className="text-white mt-3"> We are coming soon </h2>
        <span className="text-center text-white mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit{" "}
            <br />
            amet consectetur adipisicing
          </p>
        </span>
        <div className="col-sm-8 offset-sm-2 d-flex text-center text-white mt-4">
          <div className="col">
            <h1> 11 </h1>
            <h5> Days </h5>
          </div>
          <div className="col">
            <h1> 22 </h1>
            <h5> Hours </h5>
          </div>
          <div className="col">
            <h1> 41 </h1>
            <h5> Minutes </h5>
          </div>
          <div className="col">
            <h1> 41 </h1>
            <h5> Seconds </h5>
          </div>
        </div>

        <div className="col-sm-8 offset-sm-2 text-center text-white mt-5">
          <button
            className="btn btn-lg btn-outline-dark button-background"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            Notify Me About That!
          </button>
          <div
            className="modal fade bd-example-modal-lg"
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">...</div>
            </div>
          </div>
        </div>
        <div className="col-sm-8 offset-sm-2 mt-4 text-white text-center">
          <p>
            <a href="#" className="text-white">
              Facebook{" "}
            </a>
            |
            <a href="#" className="text-white">
              {" "}
              Twitter{" "}
            </a>
            |
            <a href="#" className="text-white">
              {" "}
              Github{" "}
            </a>
          </p>
          <p> &copy; Copyright 2019 by Rajan K. All rights reserved </p>
        </div>
      </div>
    </div>
  );
}

export default App;
