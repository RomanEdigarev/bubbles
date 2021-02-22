import React from "react";
import style from "./Table.module.scss";
import { ArrowUp } from "../../Indicator/ArrowUp";
import { ArrowDown } from "../../Indicator/ArrowDown";

export const Table = () => {
  return (
    <div className={style.tableWidget}>
      <table>
        <tbody>
          <tr>
            <td>Travel</td>
            <td>760</td>
            <td>2,450</td>
            <td>
              <ArrowUp />
            </td>
          </tr>
          <tr>
            <td>Presentation</td>
            <td>650</td>
            <td>2,304</td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>Business</td>
            <td>612</td>
            <td>2,140</td>
            <td>
              <ArrowUp />
            </td>
          </tr>
          <tr>
            <td>Finance</td>
            <td>598</td>
            <td>2,140</td>
            <td>
              <ArrowUp />
            </td>
          </tr>
          <tr>
            <td>Travel</td>
            <td>513</td>
            <td>1,903</td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>Startup</td>
            <td>498</td>
            <td>1,320</td>
            <td>
              <ArrowDown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
