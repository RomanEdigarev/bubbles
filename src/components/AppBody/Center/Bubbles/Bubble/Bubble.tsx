import React, { FC, useState } from "react";
import style from "./Bubble.module.scss";
import { motion } from "framer-motion";

const getRandomXY = (max: number, min: number) => {
  return {
    x: `${Math.random() * (max - min) + min}%`,
    y: `${Math.random() * (max - min) + min}%`,
  };
};

type Props = {
  styling: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
    fontSize?: string;
    width: number;
    height: number;
  };
  title?: string;
  amount?: string;
  period?: string;
};
export const Bubble: FC<Props> = ({ styling, title, amount, period }) => {
  const [{ x, y }, setXY] = useState(getRandomXY(5, -5));
  return (
    <motion.div
      style={{ ...styling }}
      className={style.bubble}
      animate={{
        x,
        y,
        transition: {
          duration: 2,
        },
      }}
      whileHover={{
        scale: 1.2,
        zIndex: 1,
      }}
      onAnimationComplete={() => setXY(getRandomXY(5, -5))}
      transition={{
        type: "spring",
        duration: 1.5,
        bounce: 0.4,
      }}
    >
      <div className={style.content}>
        <h3>{title}</h3>
        <h2>{amount}</h2>
        <h4>{period}</h4>
      </div>
    </motion.div>
  );
};
