import React, { Fragment } from "react";
import typeWriterImg from "../images/typewriter-removebg.webp";
import postImg2 from "../images/web3.webp";
import postImg3 from "../images/photo-1651055705032-d4187855b004.webp";
import postImg1 from "../images/683bd878731ab0e229b4f0f62e25ad58-removebg-preview.webp";

const Website = () => {
  return (
    <React.Fragment>
      <section className="hero-component">
        <h1>
          <span className="title--filled hero__title">
            Content is not the King
          </span>
          <span className="title--filled hero__title hero__title--mid">
            Its the kingdom
          </span>
          <span className="title--filled hero__title">Let me build yours.</span>
        </h1>
      </section>

      <section className="orange-section"></section>

      <section className="section--road-board grid--desktop grid--mobile">
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
        <div class="road-board">
          <div class="board board1">
            <span class="board-text">Web3</span>
          </div>
          <div class="board board2">
            <span class="board-text">Blockchain</span>
          </div>
          <div class="board board3">
            <span class="board-text">DeFi</span>
          </div>
        </div>
      </section>
      <section className="posts card-container">
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
      </section>
    </React.Fragment>
  );
};

export default Website;
