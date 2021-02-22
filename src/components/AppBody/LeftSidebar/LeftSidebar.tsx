import React from "react";
import style from "./LeftSidebar.module.scss";
import { CombinedCircle } from "../../../assets/components/Widgets/CombinedCircle/CombinedCircle";
import { IndexAmount } from "../../../assets/components/Widgets/Index/IndexAmount";
import { Table } from "../../../assets/components/Widgets/Table/Table";

export const LeftSidebar = () => {
  return (
    <div className={style.leftSidebar}>
      {/*Title*/}
      <h1>Statistics</h1>
      {/*Widgets*/}
      <CombinedCircle />
      <IndexAmount />
      <Table />
    </div>
  );
};
