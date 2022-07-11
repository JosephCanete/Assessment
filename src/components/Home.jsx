import React from "react";
import Card from "../components/Card";

function Home({ hackerList, setHackerList }) {
  return <Card hackerList={hackerList} setHackerList={setHackerList} />;
}

export default Home;
