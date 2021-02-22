import React from "react";
import style from "./Header.module.scss";
import logoIcon from "../../assets/images/LogoIcon/Logo.svg";
import searchIcon from "../../assets/images/SearchIcon/Search.svg";
import { StatisticIcon } from "../../assets/components/Me/StatisticIcon";
import { MeIcon } from "../../assets/components/Me/MeIcon";

export const Header = () => {
  return (
    <div className={style.header}>
      {/* Container */}
      <div className={style.header__container}>
        {/* LogoIcon */}
        <div className={style.logoIcon}>
          <img src={logoIcon} alt="logo" />
          <span>ORION</span>
        </div>

        {/* Input */}
        <div className={style.inputContainer}>
          <input type="text" />
          <img src={searchIcon} alt="search" />
        </div>

        {/* Menu */}
        <div className={style.menuContainer}>
          <span>Statistics</span>
          <span>Overview</span>
          <span>Dashboard</span>
          <span>Analytics</span>
        </div>

        {/* MeIcon */}
        <div className={style.meContainer}>
          <button>
            <MeIcon />
          </button>
          <button>
            <StatisticIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
