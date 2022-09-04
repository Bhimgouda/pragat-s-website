import React from "react";

const LoaderComponent = ({ showContent }) => {
  return (
    <section className="loader-component">
      <span className="title">
        <span>Why</span>
        <span>Not</span>
      </span>
      <span className="load__btn btn btn--reflection" onClick={showContent}>
        See it
      </span>
    </section>
  );
};

export default LoaderComponent;
