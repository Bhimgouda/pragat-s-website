import React, { useState, Fragment, useEffect } from "react";
import AOS from "aos";
import Form from "./common/form";
import Hero from "./main/hero";
import typeWriterImg from "../images/typewriterImg.webp";
import postImg1 from "../images/683bd878731ab0e229b4f0f62e25ad58-removebg-preview.webp";
import postImg2 from "../images/web3.webp";
import postImg3 from "../images/nft 3d 2.webp";
import postImg4 from "../images/photo-1651055705032-d4187855b004.webp";
import hackernoon from "../images/HackerNoon-Logo.webp";
import rateCity from "../images/rateCity.svg";
import web3University from "../images/web3-university.webp";
import coinTelegraph from "../images/coino.webp";
import pragatImg from "../images/pragat.avif";
import pragatImgFallback from "../images/pragat.webp";
import "aos/dist/aos.css";

const Website = () => {
  const [loaded, setLoading] = useState(false);

  const featuredCompanies = [
    { name: "Hackernoon", imgSrc: hackernoon },
    { name: "rateCity", imgSrc: rateCity },
    { name: "web3University", imgSrc: web3University },
    { name: "coinTelegraph", imgSrc: coinTelegraph },
  ];

  const featuredPosts = [
    {
      title: "A Guide That Will Help You Find the Right NFTs",
      link: "https://hackernoon.com/a-guide-that-will-help-you-find-the-right-nfts",
      imgSrc: postImg1,
    },
    {
      title: "Why is Web3 Failing?",
      link: "https://hackernoon.com/why-is-web3-failing",
      imgSrc: postImg2,
    },
    {
      title: "5 Issues With NFTs To Be Wary Of",
      link: "https://hackernoon.com/5-issues-with-nfts-to-be-wary-of",
      imgSrc: postImg3,
    },
    {
      title: "Stable Coin: Everything You Need to Know",
      link: "https://hackernoon.com/stable-coin-everything-you-need-to-know",
      imgSrc: postImg4,
    },
  ];

  setTimeout(() => {
    AOS.refresh();
  }, 500);
  AOS.init();

  const showContent = () => {
    setLoading(true);
  };

  const loaderComponent =
    loaded === false ? (
      <section className="loader-component">
        <span className="title">
          <span>Why</span>
          <span>Not</span>
        </span>
        <span className="load__btn btn btn--reflection" onClick={showContent}>
          See it
        </span>
      </section>
    ) : null;

  return (
    <React.Fragment>
      <main>
        <section className="section--about">
          <h2>Who am I ?</h2>
          <picture
            className="author-img"
            data-aos-delay="200"
            data-aos="fade-up-left"
          >
            <source type="image/avif" srcSet={pragatImg} />
            <img
              src={pragatImgFallback}
              alt="Pragat Vyawahare - Blockchain copywriter"
            />
          </picture>
          {[0, 1, 2, 3].map((n, index) => (
            <span key={index} className={`img-frame frame${n + 1}`}></span>
          ))}
        </section>

        <section className="section--road-board grid grid--cols-2">
          <div>
            <h2 className="title stroke-text">What are my Stops</h2>
            {[0, 1, 2].map((n, index) => {
              if (n === 2)
                return (
                  <span key={index} className="title">
                    What are my Stops
                  </span>
                );
              return (
                <span key={index} className="title stroke-text">
                  What are my Stops
                </span>
              );
            })}
          </div>
          <div className="road-board">
            {["Web3", "Blockchain", "DeFi"].map((name, index) => (
              <div key={index} className={`board board${index + 1}`}>
                <span className="board-text">{name}</span>
              </div>
            ))}
          </div>
        </section>

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

        <section className="section--posts grid">
          <div data-aos="fade-left" className="posts__title">
            <h2 className="title">Featured Articles</h2>
            <span className="title stroke-text only--desktop">
              Featured Articles
            </span>
            <span className="title stroke-text only--desktop">
              Featured Articles
            </span>
          </div>
          {featuredPosts.map((post, index) => (
            <a key={index} target="_blank" href={post.link}>
              <article className={`card card${index + 1}`}>
                <span className="card__title">{post.title}</span>
                <img src={post.imgSrc} alt={post.title} />
                <span className="card__cta">READ NOW {"->"}</span>
              </article>
            </a>
          ))}
        </section>

        <section className="section--form">
          <div className="typewriter-image-container">
            <img src={typeWriterImg} alt="" />
          </div>
          <Form />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Website;
