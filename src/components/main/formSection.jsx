import React from "react";
import Form from "../common/form";

const FormSection = ({ typeWriterImg }) => {
  return (
    <section className="section--form">
      <div className="typewriter-image-container">
        <img src={typeWriterImg} alt="" />
      </div>
      <Form />
    </section>
  );
};

export default FormSection;
