import React from "react";
import "./App.css";
import Accordion from "./Component/accordion/Accordion";
import RandomColor from "./Component/random-color";

import StarRating from "./Component/star-rating";
import ImageSlider from "./Component/ImageSlider";

function App() {
  return (
    <>
      {/* <Accordion />
      <RandomColor />
      <StarRating noOfStars={5} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
    </>
  );
}

export default App;
