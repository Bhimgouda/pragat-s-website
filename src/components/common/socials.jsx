import React from "react";

const Socials = ({ socials }) => {
  return (
    <div className="socials-container">
      {socials.map((social, index) => {
        return (
          <a target="_blank" key={index} href={social.link} className="socials">
            <img className="social__img" src={social.img || ""} alt="" />
            <span className={`social__name ${social.name}`}>
              {social.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
