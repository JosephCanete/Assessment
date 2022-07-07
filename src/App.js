import { useState, useEffect } from "react";
import { fetchData } from "./helper/actions";

function App() {
  const [hackerList, setHackerList] = useState([]);

  useEffect(() => {
    setHackerList(...hackerList, fetchData());
  }, []);

  return (
    <>
      <h1>Action</h1>
      {console.log(hackerList)}
    </>
  );
}

export default App;
