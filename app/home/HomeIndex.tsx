"use client"

import { FC, useEffect } from "react";
import styles from './Home.module.css'
import IndexLeft from "./IndexLeft";
import IndexRight from "./IndexRight";
// import { getWeather } from "../utils/ip";
const HomeIndex: FC = () => {
  useEffect(() => {
    // getWeather().then((res) => {
    //   console.log(res);
    // })
  }, [])
  return (
    <div className={`${styles.full} ${styles.index}`}>
      <IndexLeft />
      <IndexRight />
    </div>
  );
}

export default HomeIndex;