import axios from "axios";

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let counter = 0;
let interval;
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

    counter++;
    if (counter > HACKER_NUMBER) {
      clearInterval(interval);
    }
    console.log(response.data);
    return response.data;
  } catch (exception) {
    console.error(exception);
  }
};

const fetchData = () => {
  interval = setInterval(getRandomHacker, 750);
};

export { fetchData };
