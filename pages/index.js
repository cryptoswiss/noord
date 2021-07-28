import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.Flex}>
          <a href="/">
            <Image
              src="/Noord.svg"
              alt="Noord"
              height={150}
              width={300}
            />
          </a>
        </div>
      </main>

     
        <div className={styles.gridFlex}>
          <div className={styles.cardImage}>
            <a href="https://heigusto.com">
              <Image src="/robot.svg" alt="Punkt" height={200} width={200} />
            </a>
          </div>

          <div className={styles.cardText}>
            <h1 className={styles.title}>Gusto.</h1>
            <p>
              First Restaurant-To-Door app using autonomous robots. Food
              delivery in The Nordics/Baltics. Delivery in the capitals of Riga,
              Latvia and Tallinn, Estonia. Fair fees to Restaurants, just half
              compared to other delivery apps.
            </p>

            <div className={styles.ButtonContainer}>
              <Link href="https://heigusto.com">
                <a className={styles.Button}>Learn More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.gridFlex}>
          <div className={styles.cardImage}>
            <a href="/zero">
              <Image src="/zero.svg" alt="ZeroPunkt" height={200} width={200} />
            </a>
          </div>

          <div className={styles.cardText}>
          <h1 className={styles.title}>Zero.</h1>
            <p>
              On Zero our aim is to reduce waste to save our planet. There is no
              Planet B. You’ll find our ambassadors giving away food & other
              household items to their neighbours. Fight waste. Feel amazing.
            </p>

            <div className={styles.ButtonContainer}>
              <Link href="/zero">
                <a className={styles.Button}>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
     
        <footer className={styles.footer}>
        <div className={styles.Flex}>

          <div className={styles.footerLeft}>
            <Image src="/EU.svg" alt="ZeroPunkt" height={60} width={60} />
          </div>

          <div className={styles.footerLeft}>
            <p className={styles.textSmall}>
              Registered in the European Union
              <br></br>Made in Latvia with Love.
            </p>
          </div>

          <div className={styles.footerLeft}>
            <Link href="/privacy">
              <p className={styles.textSmallLink}>Privacy</p>
            </Link>
          </div>

          
        </div>
      </footer>

    </div>
  );
}
