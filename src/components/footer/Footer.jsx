import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2025 Yesu. All rights reserved</div>
      <div className={styles.socials}>
        {/*Wrap with Link to link my socials later*/}
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Yesu site"></Image>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Yesu site"></Image>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Yesu site"></Image>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Yesu site"></Image>
      </div>
    </div>
  );
};

export default Footer;
