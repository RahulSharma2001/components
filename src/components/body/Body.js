import React from "react";
import "./style.css";

const Body = () => {
  return (
    <div>
      <div className="main-poster">
        <img
          className="main-img"
          src="https://static9.depositphotos.com/1518767/1085/i/450/depositphotos_10853783-stock-photo-beautiful-family-at-the-beach.jpg"
          alt="family"
        />
      </div>
      <div className="info-container">
        <div className="info">
          <h1 className="info-heading">Think Health. Think Massage.</h1>
          <p className="info-para">
            We are open 9am to 6pm. If you like to schedule an appointment with
            us. please call us at 968-598-3210 today!
          </p>
          <button>LEARN MORE ABOUT US</button>
          <button>CONTACT US </button>
        </div>
      </div>
      <div className="para-container">
        <p className="first-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </p>
      </div>
      <hr></hr>

      <div className="address-container">
        <div className="address">
          <h3>Family Wellness Massage Therapy</h3>
          <p>
            6766 Heaney Locks, Port Hipolitofurt,<br></br> VT 20602
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
