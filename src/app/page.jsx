import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
   <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design your digital products.</h1>
        <p className={styles.description}>
          Turning your Idea into Reality. We bring together the teams from
          the global tech industry to design and develop high-quality digital
          products, services, and experiences.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
      
   </div>
  );
}
