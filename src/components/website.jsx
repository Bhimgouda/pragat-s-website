import React, { useState, Fragment, useEffect } from "react";
import AOS from "aos";
import typeWriterImg from "../images/typewriter-removebg.webp";
import postImg2 from "../images/web3.webp";
import postImg3 from "../images/photo-1651055705032-d4187855b004.webp";
import postImg1 from "../images/683bd878731ab0e229b4f0f62e25ad58-removebg-preview.webp";
import hackernoon from "../images/HackerNoon-Logo.webp";
import rateCity from "../images/rateCity.svg";
import web3University from "../images/web3-university.webp";
import coinTelegraph from "../images/coino.webp";
import pragatImg from "../images/pragat.avif";
import Form from "./common/form";
import postImg4 from "../images/nft 3d 2.webp";
import "aos/dist/aos.css";
import Hero from "./main/hero";

const Website = () => {
  const [loaded, setLoading] = useState(false);

  const showContent = () => {
    setLoading(true);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const loaderComponent =
    loaded === false ? (
      <section className="loader-component">
        Hey Loading
        <span className="load__btn" onClick={showContent}>
          Load it
        </span>
      </section>
    ) : null;

  return (
    <React.Fragment>
      {loaderComponent}
      <main className={loaded || "hide"}>
        <Hero />
        <section className="section--about">
          <h2>Who am I ?</h2>
          <img
            data-aos="fade-up-left"
            className="author-img"
            src={pragatImg}
            alt="Pragat Vyawahare - Blockchain copywriter"
          />
          <div className="img-frame frame1"></div>
          <div className="img-frame frame2"></div>
          <div className="img-frame frame3"></div>
          <div className="img-frame frame4"></div>
        </section>
        <section className="section--road-board grid grid--cols-2">
          <div>
            <span className="title stroke-text">What do I write about</span>
            <span className="title stroke-text">What do I write about</span>
            <span className="title stroke-text">What do I write about</span>
            <span className="title">What do I write about</span>
          </div>
          <div data-aos="fade-left" className="road-board">
            <div className="board board1">
              <span className="board-text">Web3</span>
            </div>
            <div className="board board2">
              <span className="board-text">Blockchain</span>
            </div>
            <div className="board board3">
              <span className="board-text">DeFi</span>
            </div>
          </div>
        </section>
        <section className="section--featured">
          <h2 data-aos="zoom-in" className="title stroke-text">
            As seen on
          </h2>
          <div className="featured-companies--desktop cube">
            <div className="top"></div>
            <div>
              <span className="featured-companies__logo" style={{ "--i": "0" }}>
                <img src={rateCity} alt="" />
              </span>
              <span className="featured-companies__logo" style={{ "--i": "1" }}>
                <img src={hackernoon} alt="" />
              </span>
              <span className="featured-companies__logo" style={{ "--i": "2" }}>
                <img src={web3University} alt="" />
              </span>
              <span className="featured-companies__logo" style={{ "--i": "3" }}>
                <img src={coinTelegraph} alt="" />
              </span>
            </div>
          </div>
          <div className="slider-container featured-companies--mobile">
            <div className="board-3d">
              <div className="slider">
                <img src={hackernoon} alt="" />
                <img src={rateCity} alt="" />
                <img src={web3University} alt="" />
                <img src={coinTelegraph} alt="" />
                <img src={hackernoon} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section--posts grid">
          <div data-aos="fade-left" className="posts__title">
            <span className="title">Featured Articles</span>
            <span className="title stroke-text">Featured Articles</span>
            <span className="title stroke-text">Featured Articles</span>
          </div>
          <h2 className="title stroke-text posts__title--mobile">
            Featured Articles
          </h2>

          <a
            data-aos="fade-right"
            data-aos-delay="200"
            target="_blank"
            href="https://hackernoon.com/a-guide-that-will-help-you-find-the-right-nfts"
          >
            <article className="card card1">
              <span className="card__title">
                A Guide That Will Help You Find the Right NFTs
              </span>
              <img src={postImg1} alt="" />
              <span className="card__cta">READ NOW {"->"}</span>
            </article>
          </a>
          <a
            data-aos="fade-up"
            target="_blank"
            href="https://hackernoon.com/why-is-web3-failing"
          >
            <article className="card card2">
              <span className="card__title">Why is Web3 Failing?</span>
              <img src={postImg2} alt="" />
              <span className="card__cta">READ NOW {"->"}</span>
            </article>
          </a>
          <a
            data-aos="fade-up"
            target="_blank"
            href="https://hackernoon.com/5-issues-with-nfts-to-be-wary-of"
          >
            <article className="card card3">
              <span className="card__title">
                5 Issues With NFTs To Be Wary Of?
              </span>
              <img src={postImg4} alt="" />
              <span className="card__cta">READ NOW {"->"}</span>
            </article>
          </a>
          <a
            data-aos="fade-up"
            target="_blank"
            href="https://hackernoon.com/stable-coin-everything-you-need-to-know"
          >
            <article className="card card4">
              <span className="card__title">
                Stable Coin: Everything You Need to Know
              </span>
              <img src={postImg3} alt="" />
              <span className="card__cta">READ NOW {"->"}</span>
            </article>
          </a>
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
