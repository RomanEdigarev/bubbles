import React from "react";
import style from "./CombinedCircle.module.scss";
import { Circle } from "../../Circle/Circle";
import { ArrowUp } from "../../Indicator/ArrowUp";

export const CombinedCircle = () => {
  return (
    <div className={style.combinedCircle}>
      {/*Circle*/}
      <div className={style.circleProgress}>
        <Circle />
      </div>

      {/*Title*/}
      <h2>Total earning</h2>

      {/*Value*/}
      <div className={style.value}>
        {/*Amount*/}
        <span className={style.amount}>$12,875</span>
        {/*Indicator*/}
        <span className={style.indicator}>
          <ArrowUp />
          <span>2%</span>
        </span>
      </div>

      {/*Detail*/}
      <div className={style.detail}>Compared to $21,504 last year</div>

      {/*Table*/}
      <div className={style.table}>
        <table>
          <tbody>
            <tr>
              <td>Presentation</td>
              <td>853</td>
              <td>
                <div className={style.graph}>Graph</div>
              </td>
            </tr>
            <tr>
              <td>Development</td>
              <td>753</td>
              <td>
                <div className={style.graph}>Graph</div>
              </td>
            </tr>
            <tr>
              <td>Research</td>
              <td>753</td>
              <td>
                <div className={style.graph}>Graph</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
