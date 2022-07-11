import axios from "axios";
import { useState, useEffect } from "react";
import { getRandomNumber } from "./helper/RandomId";
import Loading from "./components/Loading";
import Home from "./components/Home";
import "./styles/App.scss";

function App() {
  const [hackerList, setHackerList] = useState([]);
  const [loading, setLoading] = useState(true);

  let counter = 1;
  let interval;
  const HACKER_NUMBER = 200;

  const getRandomHacker = async () => {
    try {
      const topStoriesURL =
        "https://hacker-news.firebaseio.com/v0/topstories.json";
      const fetchTopStories = await axios.get(topStoriesURL);
      const shrinkedTopStories = fetchTopStories.data.slice(0, HACKER_NUMBER);
      const fetchStories = ` https://hacker-news.firebaseio.com/v0/item/${getRandomNumber(
        shrinkedTopStories[0],
        shrinkedTopStories[shrinkedTopStories.length - 1]
      )}.json`;
      const { data } = await axios.get(fetchStories);
      console.log(
        `Data no: ${counter} is being fetch from server, please wait on it...`
      );
      setHackerList((prevValue) => {
        return [...prevValue, { ...data }];
      });

      counter++;

      if (counter >= HACKER_NUMBER) {
        setLoading(false);
        return clearInterval(interval);
      }
    } catch (exception) {
      console.log("An error occured but still trying to fetch...");
      console.error(exception);
    }
  };

  const fetchData = () => {
    interval = setInterval(getRandomHacker, 250);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <Home hackerList={hackerList} setHackerList={setHackerList} />
      )}
    </div>
  );
}

export default App;
