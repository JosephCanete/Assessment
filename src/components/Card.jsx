import React from "react";
import "../styles/cards.css";

export default function Card({ hackerList }) {
  const removeSpecialCharacter = (word) => {
    return word.replace(/[^a-z]/g);
  };

  return (
    <>
      {hackerList.map((hacker) => (
        <div className="card" key={hacker.id}>
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?computer"
              alt="card__image"
              className="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">{hacker.type.toUpperCase()}</span>
            <h4>{hacker.title ? hacker.title : "Title not found"}</h4>
            <p>{hacker.text}</p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="/assets/anonymouse.png"
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>{hacker.by ? hacker.by : "Unable to get user"}</h5>
                <small>
                  Story Timestamped: <strong>{hacker.time}</strong>
                </small>
                <br />
                <small>
                  Score:{` `}
                  <strong
                    className={
                      hacker.score ? "score__existing" : "score__not_found"
                    }
                  >
                    {hacker.score ? hacker.score : "N/A"}
                  </strong>
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
