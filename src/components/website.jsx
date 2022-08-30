import React, { useState, Fragment } from "react";
import typeWriterImg from "../images/typewriter-removebg.webp";
import postImg2 from "../images/web3.webp";
import postImg3 from "../images/photo-1651055705032-d4187855b004.webp";
import postImg1 from "../images/683bd878731ab0e229b4f0f62e25ad58-removebg-preview.webp";
import hackernoon from "../images/HackerNoon-Logo.webp";
import rateCity from "../images/rateCity.svg";
import web3University from "../images/web3-university.webp";
import coinTelegraph from "../images/coino.webp";

const Website = () => {
  const [loaded, setLoading] = useState(false);

  const showContent = () => {
    setLoading(true);
  };

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
        <section className="hero-component">
          <h1>
            <span className="title--filled hero__title">
              Content is not the King
            </span>
            <span className="title--filled hero__title hero__title--mid">
              Its the kingdom
            </span>
            <span className="title--filled hero__title">
              Let me build yours.
            </span>
          </h1>
        </section>
        <section className="orange-section"></section>

        <section className="section--road-board grid grid--cols-2">
          <div>
            <span className="title--filled stroke-text">
              What do I write about
            </span>
            <span className="title--filled stroke-text">
              What do I write about
            </span>
            <span className="title--filled stroke-text">
              What do I write about
            </span>
            <span className="title--filled">What do I write about</span>
          </div>
          <div className="road-board">
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
          <h2 className="title--filled stroke-text">As seen on</h2>
          <div className="featured-companies cube">
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
        </section>
        <section className="section--posts">
          <div className="card-container">
            <article className="card">
              <span className="card__title">
                A Guide That Will Help You Find the Right NFTs
              </span>
              <img src={postImg1} alt="" />
              <span className="card__cta">READ NOW {"->"}</span>
            </article>
            <article className="card">
              <span className="card__title">Why is Web3 Failing?</span>
              <img src={postImg2} alt="" />
              <span className="card__cta">READ NOW {"->"}</span>
            </article>
            <article className="card">
              <span className="card__title">
                Stable Coin: Everything You Need to Know
              </span>
              <img src={postImg3} alt="" />
              <span className="card__cta">READ NOW {"->"}</span>
            </article>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Website;
