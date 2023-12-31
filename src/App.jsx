import React from 'react'
import styles from './style';

import {Navbar, Main, Socials } from "./components";

const App = () => (
  <div className = "bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Main/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       
        {/* <Testimonials/>  */}
        <Socials/>

      </div>
    </div>

  </div>
);

export default App