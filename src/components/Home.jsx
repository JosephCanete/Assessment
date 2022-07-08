import React from "react";
import Card from "../components/Card";

function Home({ hackerList }) {
  return (
    <>
      {console.log(hackerList)}
      <Card hackerList={hackerList} />
    </>
  );
}

export default Home;
