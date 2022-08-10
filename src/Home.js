import React from "react";
import gg from "./img/gg.webp";
import styles from "./style.module.css";

const Home = ()=>{
  const bash = ()=>{
    alert("it is a goal");
  }
      return (
        <div>
          <div className={styles.box}>
            <img src={gg} className={styles.boximg} alt="Fjords" width="600" height="400" />
          </div>
          <div className={styles.box}>
            <p className={styles.para}> 
              online Portfolio Website First impressions last. Having a
              professional online portfolio website shows people that you mean
              business. If you're a photographer, designer, or any other kind of
              artist, your artwork is your livelihood. That means that you need
              to have a platform where you can showcase your work to the world.
              With Format, you can create a sleek and professional website
              within minutes–giving you a beautiful digital canvas to show off
              your best work.
            </p>
          </div>
          {/* <button onClick={bash}>confirm</button> */}
        </div>
      );
}

export default Home;