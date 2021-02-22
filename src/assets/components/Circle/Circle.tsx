import React from "react";
import style from "./Circle.module.scss";
import { motion } from "framer-motion";

export const Circle = () => {
  return (
    <div className={style.circleProgressContainer}>
      <div>
        <svg
          className={style.circleProgress}
          width="146"
          height="146"
          viewBox="0 0 146 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="45.9997"
              y1="19"
              x2="46.0897"
              y2="124.308"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E323FF" />
              <stop offset="1" stopColor="#7517F8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="1.74103e-06"
              y1="8.70228e-06"
              x2="6.34739e-08"
              y2="140.677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4DFFDF" />
              <stop offset="1" stopColor="#4DA1FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="36.4997"
              y1="5.07257e-06"
              x2="36.6213"
              y2="142.36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD422" />
              <stop offset="1" stopColor="#FF7D05" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="1.74103e-06"
              y1="8.70228e-06"
              x2="6.34739e-08"
              y2="140.677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4DFFDF" />
              <stop offset="1" stopColor="#4DA1FF" />
            </linearGradient>
          </defs>

          <circle r={25} fill={"#000"} />
          <circle
            transform={"rotate(-90, 0, 0)"}
            r={45}
            fill="none"
            stroke={"#000"}
            strokeWidth={"6px"}
            strokeLinecap={"round"}
          />
          <motion.circle
            transform={"rotate(-90, 0, 0)"}
            r={45}
            fill="none"
            strokeDasharray={283}
            stroke={"url(#paint0_linear)"}
            strokeWidth={"10px"}
            strokeLinecap={"round"}
            initial={{
              strokeDashoffset: 283,
            }}
            animate={{
              strokeDashoffset: 283 / 6,
            }}
            transition={{
              type: "spring",
              duration: 1.0,
              bounce: 0.3,
            }}
          />

          <circle
            transform={"rotate(-90, 0, 0)"}
            r={65}
            fill="none"
            strokeDasharray={408}
            strokeDashoffset={0}
            stroke={"#000"}
            strokeWidth={"6px"}
            strokeLinecap={"round"}
          />

          <motion.circle
            transform={"rotate(-90, 0, 0)"}
            r={65}
            fill="none"
            strokeDasharray={408}
            stroke={"url(#paint1_linear)"}
            strokeWidth={"10px"}
            strokeLinecap={"round"}
            initial={{
              strokeDashoffset: 408,
            }}
            animate={{
              strokeDashoffset: 408 / 3,
            }}
            transition={{
              type: "spring",
              duration: 1.0,
              bounce: 0.3,
            }}
          />
        </svg>
      </div>
      <div className={style.diamond}>
        <svg
          className={style.diamond}
          width="26px"
          height="26px"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M12.9998 23.8332C7.01659 23.8332 2.1665 18.9831 2.1665 12.9998C2.1665 7.01659 7.01659 2.1665 12.9998 2.1665C18.9831 2.1665 23.8332 7.01659 23.8332 12.9998C23.8332 18.9831 18.9831 23.8332 12.9998 23.8332ZM12.9998 21.6665C15.2984 21.6665 17.5028 20.7534 19.1281 19.1281C20.7534 17.5028 21.6665 15.2984 21.6665 12.9998C21.6665 10.7013 20.7534 8.49689 19.1281 6.87158C17.5028 5.24626 15.2984 4.33317 12.9998 4.33317C10.7013 4.33317 8.49689 5.24626 6.87158 6.87158C5.24626 8.49689 4.33317 10.7013 4.33317 12.9998C4.33317 15.2984 5.24626 17.5028 6.87158 19.1281C8.49689 20.7534 10.7013 21.6665 12.9998 21.6665ZM9.74984 8.6665H16.2498L18.9582 12.4582L12.9998 18.4165L7.0415 12.4582L9.74984 8.6665ZM10.8657 10.8332L9.869 12.2307L12.9998 15.3615L16.1307 12.2307L15.134 10.8332H10.8657Z"
            fill="#6A6A9F"
          />
        </svg>
      </div>
    </div>
  );
};
