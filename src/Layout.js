import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./style.module.css";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className={styles.Layoutul}>
          <li className={styles.Layoutli}>
            <Link className={styles.Layouta} to="/">Home</Link>
          </li>
          <li className={styles.Layoutli}>
            <Link className={styles.Layouta} to="/Contact">Contact</Link>
          </li>
          <li className={styles.Layoutli}>
            <Link className={styles.Layouta} to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
