import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000050");

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleRandomRGBColor();
    } else handleRandomHexColor();
  }, [typeOfColor]);

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
      setColor(hexColor);
    }
  }

  function handleRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r} ,${g} ,${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5px",
          gap: "5px",
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>create HEX color</button>
        <button onClick={() => setTypeOfColor("rgb")}>create rgb color</button>
        <button
          onClick={
            typeOfColor === "hex" ? handleRandomHexColor : handleRandomRGBColor
          }
        >
          generate random color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          marginTop: "30vh",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "Hex-color"} </h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
