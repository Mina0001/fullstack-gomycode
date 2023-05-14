import "./ProfilePhoto.css";
import React from "react";
import image from "../img/pika.png";

const ProfilePhoto = () => {
  return (
    <div className="d-flex justify-content-center">
      <img
        src={image}
        alt="pika"
        style={{
          border: "none",
          width: "500px",
        }}
      />
    </div>
  );
};

export default ProfilePhoto;
