import React, { Component } from "react";
import "./NewsArticles.css";
import yourarticles from "../your-articles.json";

class NewsArticles extends Component {
  render() {
    return (
      <div className="NewsArtibles">
        {yourarticles.map((data, key) => {
          return (
            <article key={key} className="news-articles">
              <div className="news-img">
                <img src={data.image} />
              </div>
              <div className="news-title">
                {data.title}
                <div className="news-description">
                  {data.description}
                  <div className="news-author">
                    <h3>Author :</h3>
                    <img
                      src={data.author.image}
                      className="news-author-image2"
                    />
                    <div>{data.author.name}</div>
                    <div>
                      {data.postedDate}{" "}
                      <div> {data.minutesToRead + " Min read"} </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}
export default NewsArticles;
