import Image from "next/image";
import styles from "./page.module.css";
import nftImage from "@/nft-preview-card-component-main/images/image-equilibrium.jpg"
import avatarImage from "@/nft-preview-card-component-main/images/image-avatar.png"
import nftIcon from "@/nft-preview-card-component-main/images/icon-ethereum.svg"
import clockIcon from "@/nft-preview-card-component-main/images/icon-clock.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.component}>
        <Image 
          className={styles.img}
          src={nftImage}
        />

        <div className={styles.content}>
          <p className={styles.title}>Equilibrium #3429</p>
          <p className={styles.description}>Our Equilibrium Collection promotes balance and calm.</p>
          <div className={styles.priceandclockcontainer}>
            <div className={styles.pricebox}>
              <Image 
                src={nftIcon}
              />
              <p>0.041ETH</p>
            </div>
            <div className={styles.clockbox}>
              <Image 
                src={clockIcon}
              />
              <p>3 days left</p>
            </div>
          </div>
        </div>
        <div className={styles.avatarbox}>
          <Image
            src={avatarImage} 
          />
          <p>Creation of <strong>Jules Wyvern</strong></p>
        </div>
      </div>
    </main>
  );
}
