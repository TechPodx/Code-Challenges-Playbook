import React from "react";
import styles from './Styles/Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <div id={styles.logo}>
        <div id={styles.logoImage}></div>
        <h1>Cibo Italiano</h1>
      </div>
      <p>Indulge in Saucy Tango's rich flavors and bold spices entice your taste buds to dance the night away.</p>
    </header>
  );
};

export default Header;