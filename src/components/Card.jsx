import "../styles/cards.css";
import { useState, useEffect } from "react";

export default function Card({ hackerList }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const filteredHacker = hackerList.filter((story) => story.type === "story");
    setStories([...filteredHacker]);
    console.log("filteredHacker is ", filteredHacker);
    console.log("hackerList", stories);
  }, []);

  return (
    <>
      {stories &&
        stories.map((story, index) => (
          <div className="card" key={story.id}>
            <div className="card__header">
              <img
                src={`/assets/${index}.jpg`}
                alt="card__image"
                className="card__image"
                height="400"
                width="600"
              />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">{story.type}</span>
              <h4>{story.title ? story.title : story.id}</h4>
              <p>
                {story.text
                  ? story.text.replace(/[^a-zA-Z ]/g, "")
                  : "This section is not applicable"}
              </p>
            </div>
            <div className="card__footer">
              <div className="user">
                <img
                  src={`/assets/${index}.jpg`}
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <div>
                    <a
                      className={story.url ? "existing " : "not__found"}
                      href={story.url ? story.url : "#"}
                    >
                      {story.by ? story.by.toUpperCase() : "Unable to get user"}
                    </a>
                  </div>
                  <small>
                    Story Timestamped: <strong>{story.time}</strong>
                  </small>
                  <div>
                    <small>
                      Score:{` `}
                      <strong
                        className={story.score ? "existing" : "not_found"}
                      >
                        {story.score ? story.score : "N/A"}
                      </strong>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
