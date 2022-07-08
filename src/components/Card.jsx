import "../styles/cards.css";

export default function Card({ hackerList }) {
  return (
    <>
      {hackerList.map((hacker, index) => (
        <div className="card" key={hacker.id}>
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
            <span className="tag tag-blue">{hacker.type.toUpperCase()}</span>
            <h4>{hacker.title ? hacker.title : hacker.id}</h4>
            <p>
              {hacker.text
                ? hacker.text.replace(/[^a-zA-Z ]/g, "")
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
                    className={hacker.url ? "existing " : "not__found"}
                    href={hacker.url ? hacker.url : "#"}
                  >
                    {hacker.by ? hacker.by.toUpperCase() : "Unable to get user"}
                  </a>
                </div>
                <small>
                  Story Timestamped: <strong>{hacker.time}</strong>
                </small>
                <div>
                  <small>
                    Score:{` `}
                    <strong className={hacker.score ? "existing" : "not_found"}>
                      {hacker.score ? hacker.score : "N/A"}
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
