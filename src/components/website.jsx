import React, { Fragment } from "react";
import typeWriterImg from "../images/typewriter-removebg.webp";
import postImg1 from "../images/1_VRjh5mVH8z54OoYOBkU1OQ.avif";
import postImg2 from "../images/5wpKgV75aONqkTJlafw2yQmK9yd2-np93oka.avif";
import postImg3 from "../images/2jqChkrv03exBUgkLrDzIbfM99q2-zt92c0e.avif";

const Website = () => {
  return (
    <React.Fragment>
      <section className="hero-component">
        <h1>
          <span className="hero__title text-gradient word1">Develop.</span>
          <span className="hero__title text-gradient word2">preview.</span>
          <span className="hero__title word3">Ship.</span>
        </h1>
      </section>
      <section>
        <div class="road-board">
          <div class="board board1">
            <span class="board-text">SUCCESS</span>
          </div>
          <div class="board board2">
            <span class="board-text">SUCCESS</span>
          </div>
          <div class="board board3">
            <span class="board-text">SUCCESS</span>
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
