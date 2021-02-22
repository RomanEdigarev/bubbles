import React from "react";
import style from "./RightButtons.module.scss";
import { motion } from "framer-motion";
import {
  CircleWithDot,
  CircleWithLine,
  LineWithArrow,
  Minus,
  Nodes,
  Plus,
} from "../../../assets/components/RightButtonsIcons/RightButtonsIcons";

const RightButtons = () => {
  return (
    <div className={style.container}>
      <div className={style.rightButton}>
        <Plus />
        <Minus />
      </div>
      <div className={style.rightButton}>
        <CircleWithDot />
      </div>
      <div className={style.rightButton}>
        <Nodes />
        <CircleWithLine />
        <LineWithArrow />
      </div>
    </div>
  );
};

export default RightButtons;
