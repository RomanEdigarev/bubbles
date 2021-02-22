import React from "react";
import style from "./FooterStatistics.module.scss";
import TrendsIcon from "../../../../assets/components/FooterStatisticsIcons/TrendsIcon";
import StoreDynamics from "../../../../assets/components/FooterStatisticsIcons/StoreDynamics";
import ShoppingViewsIcon from "../../../../assets/components/FooterStatisticsIcons/ShoppingViewsIcon";

const FooterStatistics = () => {
  return (
    <div className={style.footerStatistics}>
      <div className={style.informer}>
        {/* Icon */}
        <TrendsIcon />
        {/* Title */}
        <p>TREEND GOODS</p>
        {/* Value */}
        <h3>204</h3>
      </div>
      <div className={style.informer}>
        {/* Icon */}
        <ShoppingViewsIcon />
        {/* Title */}
        <p>SHOPPING VIEWS</p>
        {/* Value */}
        <h3>65,540</h3>
      </div>
      <div className={style.informer}>
        {/* Icon */}
        <StoreDynamics />
        {/* Title */}
        <p>STORE DYNAMICS</p>
        {/* Value */}
        <h3>325</h3>
      </div>
    </div>
  );
};

export default FooterStatistics;
