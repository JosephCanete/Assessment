import axios from "axios";
import { useState, useEffect } from "react";
import { getRandomNumber } from "./helper/RandomId";
import Loading from "./components/Loading";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  const [hackerList, setHackerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);

  let counter = 1;
  let interval;
  const HACKER_NUMBER = 10;

  const getRandomHacker = async () => {
    try {
      const topStoriesURL =
        "https://hacker-news.firebaseio.com/v0/topstories.json";
      const topStories = await axios.get(topStoriesURL);
      const shrinkedTopStories = topStories.data.slice(0, 100);
      const baseURL = ` https://hacker-news.firebaseio.com/v0/item/${getRandomNumber(
        shrinkedTopStories[0],
        shrinkedTopStories[shrinkedTopStories.length - 1]
      )}.json`;
      const { data } = await axios.get(baseURL);
      console.log("Data is being fetch, please wait on it");
      setHackerList((prevValue) => {
        return [...prevValue, { ...data }];
      });

      counter++;

      if (counter > HACKER_NUMBER) {
        clearInterval(interval);
        return setLoading(false);
      }
    } catch (exception) {
      console.error(exception);
    }
  };

  const fetchData = () => {
    interval = setInterval(getRandomHacker, 750);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <Home
          hackerList={hackerList}
          image={"https://source.unsplash.com/600x400/?computer"}
        />
      )}
    </div>
  );
}

export default App;
