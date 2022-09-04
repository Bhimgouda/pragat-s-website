import React from "react";

const FeaturedCompanies = ({ featuredCompanies }) => {
  return (
    <section className="section--featured">
      <h2 data-aos="zoom-in" className="title stroke-text">
        As seen on
      </h2>
      <div className="only--desktop cube">
        <div className="top"></div>
        <div>
          {featuredCompanies.map((company, index) => (
            <span
              key={index}
              className="featured-companies__logo"
              style={{ "--i": `${index}` }}
            >
              <img src={company.imgSrc} alt={`${company.name} logo`} />
            </span>
          ))}
        </div>
      </div>
      <div className="slider-container only--mobile">
        <div className="board-3d">
          <div className="slider">
            {featuredCompanies.map((company, index) => (
              <img
                key={index}
                src={company.imgSrc}
                alt={`${company.name} logo`}
              />
            ))}
            <img src={featuredCompanies[0].imgSrc} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
