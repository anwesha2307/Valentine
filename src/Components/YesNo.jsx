import React, { useState, useEffect } from "react";
import { Gif } from "./Gif";
//import "./style.css";
function YesNo() {
  const msg = [
    "No",
    "Are you sure?",
    "Please re-consider!",
    "pretty please?",
    "I am giving you one last chance!",
    "Don't break my heart!",
    "I am crying now!",
  ];
  const[display,setDisplay]=useState("Will You be my Valentine?")
  const [img, setImg] = useState(0);
  const [size, setSize] = useState(10);
  const [m, setM] = useState(0);
  const handleClick = () => {
    setSize((prevSize) => prevSize + 40);
    if (m === msg.length - 1) {
      setM(0);
    } else {
      setM((prevM) => prevM + 1);
    }

    // Increase size by 10 pixels on each click
  };
  const Yes=()=>{
    if(img==0)
    {
        setImg(1)
    }
    else{
        setImg(1)
    }
    setDisplay("uwu I love you!")
    
  }
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: `${size}px`, // Adjust the padding based on click
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "padding 0.4s ease",
    margin: 30,
    width: 100,
    height: 70,
    // Smooth transition for padding change
  };
  const buttonStyleNo = {
    backgroundColor: "red",
    color: "white",
    padding: "5px", // Adjust the padding based on click
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: 100,
    height: 70,
    // Smooth transition for padding change
  };

  return (
    <div>
      <div>
        <img
          src={Gif[img]}
        ></img>
      </div>
      <p style={{alignContent:"center"}}>{display}</p>
      <button style={buttonStyle} onClick={Yes}>Yes</button>

      <button style={buttonStyleNo} onClick={handleClick}>
        {msg[m]}
      </button>
    </div>
  );
}

export default YesNo;
