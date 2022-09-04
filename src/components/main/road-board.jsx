import React from "react";

const RoadBoard = () => {
  return (
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
  );
};

export default RoadBoard;
