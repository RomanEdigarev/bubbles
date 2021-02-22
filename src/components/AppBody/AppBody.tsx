import React from "react";
import style from "./AppBody.module.scss";
import { LeftSidebar } from "./LeftSidebar/LeftSidebar";
import FooterStatistics from "./Center/FooterStatistics/FooterStatistics";
import Center from "./Center/Center";
import RightButtons from "./RightButtons/RightButtons";

export const AppBody = () => {
  return (
    <div className={style.appBody}>
      {/* Left Sidebar */}
      <LeftSidebar />
      {/* Center */}
      <Center />
      {/* Right Buttons */}
      <RightButtons />
    </div>
  );
};
