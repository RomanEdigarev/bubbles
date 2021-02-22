import React from "react";
import style from "./IndexAmount.module.scss";
import { ArrowUp } from "../../Indicator/ArrowUp";

export const IndexAmount = () => {
  return (
    <div className={style.index}>
      <h2>Total earning</h2>
      <div className={style.value}>
        <span className={style.amount}>$12,875</span>
        <span className={style.indicator}>
          <ArrowUp />
          <span>10%</span>
        </span>
        <div className={style.detail}>
          <span>Compared to $21,490 last year</span>
        </div>
      </div>
    </div>
  );
};
