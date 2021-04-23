import React, { Component } from "react";
import missedarticles from "../missed-articles.json";
import "./InCaseYouMissed.css";

class InCaseYouMissed extends Component {
  render() {
    return (
      <section className="NewsArtibles">
        {missedarticles.map((data, key) => {
          return (
            <article key={key} className="Incase-articles">
              <div className="Incase-img">
                <img src={data.image} className="Incase-author-image1" />
              </div>
              <div className="Incase-title">
                {data.title}
                <div className="Incase-description">
                  {data.description}
                  <div className="Incase-author">
                    <h3>Author :</h3>                   
                    <img  src={data.author.image}  className="Incase-author-image2" />
                    {data.author.name}
                    <div>
                      {data.postedDate}
                      <div> {data.minutesToRead + " Min read"} </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}

export default InCaseYouMissed;
