import React from "react";
import style from "./Center.module.scss";
import BubblesContainer from "./Bubbles/BubblesContainer";
import FooterStatistics from "./FooterStatistics/FooterStatistics";
import ChangePeriod from "./ChangePeriod/ChangePeriod";

const Center = () => {
  return (
    <div className={style.center}>
      <ChangePeriod />
      <BubblesContainer />
      <FooterStatistics />
    </div>
  );
};

export default Center;
