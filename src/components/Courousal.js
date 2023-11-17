import React, { useState } from "react";

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import c0 from "../assets/c0.jpg";
import c1 from "../assets/c1.png";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import ai from "../assets/AI.jpg"
import "./Courousal.css"; // Import your CSS file

const data = [c0, c1, c3, c4, c5 ,ai];

function Courousal() {
  const [randomImageIndex, setRandomImageIndex] = useState(4);

  const forward = () => {
    const newIndex = (randomImageIndex + 1) % data.length;
    setRandomImageIndex(newIndex);
  };

  const previous = () => {
    let newIndex = (randomImageIndex - 1 + data.length) % data.length;
    setRandomImageIndex(newIndex);
  };

  return (
    <div className="container d-flex flex-wrap">
      <div className="button_container">
        <SlArrowLeft  onClick={previous}/>
      </div>
      <div className="img_item_container">
        <img
          src={data[randomImageIndex]}
          alt="Random Image"
          className="img_item"
        />
      </div>
      <div className="button_container">
        <SlArrowRight  onClick={forward} />
      </div>
    </div>
  );
}

export default Courousal;
