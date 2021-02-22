import React, { useEffect, useRef } from "react";
import style from "./BubblesContainer.module.scss";
import { Bubble } from "./Bubble/Bubble";

const BubblesContainer = () => {
  return (
    <div className={style.bubblesContainer}>
      <div className={style.orbital} />
      <div className={style.orbitalSmall} />

      <Bubble
        styling={{
          width: 143,
          height: 143,
          top: "20%",
          right: "20%",
          fontSize: "10px",
        }}
        title={"Finance"}
        amount={"$23,657"}
      />
      <Bubble
        styling={{
          width: 143,
          height: 143,
          top: "26%",
          left: "21%",
          fontSize: "10px",
        }}
        title={"Development"}
        amount={"$31,657"}
      />
      <Bubble
        styling={{
          width: 120,
          height: 120,
          bottom: "26%",
          right: "546px",
          fontSize: "8px",
        }}
        title={"Business"}
        amount={"21,987"}
      />
      <Bubble
        styling={{
          width: 175,
          height: 175,
          bottom: "20%",
          right: "18%",
          fontSize: "12px",
        }}
        title={"Design"}
        amount={"32,982"}
        period={"3 month"}
      />
      <Bubble
        styling={{
          width: 250,
          height: 250,
        }}
        title={"Investments"}
        amount={"$76,644"}
        period={"3 month"}
      />
    </div>
  );
};

export default BubblesContainer;
