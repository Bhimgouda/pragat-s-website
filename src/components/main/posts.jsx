import React from "react";

const Posts = ({ featuredPosts }) => {
  return (
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
  );
};

export default Posts;
