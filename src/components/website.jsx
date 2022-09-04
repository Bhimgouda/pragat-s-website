import React, { useState, Fragment, useEffect } from "react";
import AOS from "aos";
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
import About from "./main/about";
import RoadBoard from "./main/road-board";
import Posts from "./main/posts";
import FormSection from "./main/formSection";
import LoaderComponent from "./common/loaderComponent";
import FeaturedCompanies from "./main/featuredCompanies";

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
    loaded === false ? <LoaderComponent showContent={showContent} /> : null;

  return (
    <React.Fragment>
      <main>
        <Hero />
        <About pragatImg={pragatImg} pragatImgFallback={pragatImgFallback} />
        <RoadBoard />
        <FeaturedCompanies featuredCompanies={featuredCompanies} />
        <Posts featuredPosts={featuredPosts} />
        <FormSection typeWriterImg={typeWriterImg} />
      </main>
    </React.Fragment>
  );
};

export default Website;
