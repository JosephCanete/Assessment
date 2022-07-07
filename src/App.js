import axios from "axios";
import { useState, useEffect } from "react";
import { getRandomNumber } from "./helper/RandomId";
import Loading from "./components/Loading";
import Cards from "./components/Card";

function App() {
  const [hackerList, setHackerList] = useState([{}]);
  const [loading, setLoading] = useState(true);

  let counter = 1;
  let interval;
  let hackerPlaceHolder = [];
  const HACKER_NUMBER = 10;

  const getRandomHacker = async () => {
    try {
      const topStoriesURL =
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
      const topStories = await axios.get(topStoriesURL);

      const baseURL = ` https://hacker-news.firebaseio.com/v0/item/${getRandomNumber(
        topStories.data[0],
        topStories.data[topStories.data.length - 1]
      )}.json?print=pretty`;
      const response = await axios.get(baseURL);
      hackerPlaceHolder.push(response.data.by);
      counter++;
      if (counter > HACKER_NUMBER) {
        clearInterval(interval);
        setLoading(false);
        //Missing update state
        return console.log(hackerList);
      }

      console.log(`${response.data.by} added into hackerList`, hackerList);
      console.log(response.data);
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <Cards data={"Fetch is successful, We can now render data"} />
      )}
    </>
  );
}

export default App;
