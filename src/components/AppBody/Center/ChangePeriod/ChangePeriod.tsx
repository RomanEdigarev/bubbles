import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import style from "./ChangePerdiod.module.scss";

const ChangePeriod = () => {
  const periods = ["1W", "1M", "3M", "1Y", "ALL"];
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(2);
  const getBackgroundColor = (periodIndex: number) => {
    return periodIndex === selectedPeriodIndex ? "#3247E5" : "";
  };

  const spring = {
    type: "spring",
    duration: 0.5,
    bounce: 0.4,
  };

  return (
    <AnimateSharedLayout>
      <div className={style.changePeriod}>
        {periods.map((period, index) => {
          return (
            <div
              key={period}
              className={style.period}
              onClick={() => setSelectedPeriodIndex(index)}
            >
              {index === selectedPeriodIndex && (
                <motion.div
                  layoutId={style.outline}
                  className={style.outline}
                  initial={false}
                  animate={{ backgroundColor: "#3247E5" }}
                  transition={spring}
                />
              )}
              <div>{period}</div>
            </div>
          );
        })}
      </div>
    </AnimateSharedLayout>
  );
};

export default ChangePeriod;
