import "../styles/cards.scss";
import { useState, useEffect } from "react";
import { onlyAlphabets } from "../helper/Regex";
import axios from "axios";

export default function Card({ hackerList }) {
  const [stories, setStories] = useState([]);
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    const filteredHacker = hackerList.filter((story) => story.type === "story");
    setStories([...filteredHacker]);
  }, []);

  useEffect(() => {
    //Callback after setAuthorNames
    stories &&
      stories.map((story) => {
        return axios
          .get(
            `https://hacker-news.firebaseio.com/v0/user/${story.by}.json?print=pretty`
          )
          .then(({ data }) => {
            setAuthorData((prevValue) => [...prevValue, { ...data }]);
          });
      });
  }, [stories]);

  useEffect(() => {
    stories.map((story) => {
      const author = authorData.find((author) => author.id === story.by);
      if (author) {
        story.author = author;
        story.karma = author.karma;
      }
    });

    stories.sort((a, b) => {
      if (a.karma < b.karma) {
        return -1;
      }
      if (a.karma > b.karma) {
        return 1;
      }
      return 0;
    });
  }, [authorData]);

  return (
    <>
      {stories &&
        stories.slice(0, 10).map(
          (story, index) =>
            story.karma && (
              <div className="card" key={index}>
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
                      ? onlyAlphabets(story.text)
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
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
                          {story.by
                            ? story.by.toUpperCase()
                            : "Unable to get user"}
                        </a>
                      </div>
                      <small>
                        Story Timestamped: <strong>{story.time}</strong>
                      </small>
                      <div>
                        <small>
                          Story Score:
                          <strong
                            className={story.score ? "existing" : "not_found"}
                          >
                            {story.score ? ` ${story.score}` : " N/A"}
                          </strong>
                        </small>
                      </div>
                      <div>
                        <small>
                          Author Karma Score:
                          <strong
                            className={story.score ? "existing" : "not_found"}
                          >
                            {story.author ? ` ${story.author.karma}` : " N/A"}
                          </strong>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
    </>
  );
}
