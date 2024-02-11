import React from "react";
import "./App.css";
import Accordion from "./Component/accordion/Accordion";
import RandomColor from "./Component/random-color";

import StarRating from "./Component/star-rating";

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={5} />
    </>
  );
}

export default App;
