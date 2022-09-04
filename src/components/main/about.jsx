import React from "react";

const About = ({ pragatImg, pragatImgFallback }) => {
  return (
    <section className="section--about">
      <h2 id="about">Who am I ?</h2>
      <div className="image-container">
        <picture className="author-img">
          <source type="image/avif" srcSet={pragatImg} />
          <img
            src={pragatImgFallback}
            alt="Pragat Vyawahare - Blockchain copywriter"
          />
        </picture>
        {[0, 1, 2, 3].map((n, index) => (
          <span key={index} className={`img-frame frame${index + 1}`}></span>
        ))}
      </div>
    </section>
  );
};

export default About;
