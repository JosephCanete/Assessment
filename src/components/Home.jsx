import React from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Home({ hackerList, setHackerList }) {
  return (
    <>
      <Card hackerList={hackerList} setHackerList={setHackerList} />
      <Footer />
    </>
  );
}

export default Home;
