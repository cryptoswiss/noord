import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zeropunkt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.Flex}>
          <a href="/zero">
            <Image
              src="/zeroLogo.svg"
              alt="ZeroPunkt"
              height={100}
              width={200}
            />
          </a>
        </div>
      </main>

      <main className={styles.main}>
        <div className={styles.FlexHighlight}>

          <div className={styles.FlexLeftDesktop}>
            <Image
              src="/zerosac.svg"
              alt="ZeroPunkt"
              width="400"
              height="200"
              alt="Zeropunkt"
              layout="responsive"
            />
          </div>

          <div className={styles.FlexLeftMobile}>
            <Image
              src="/zerosac2.svg"
              alt="ZeroPunkt"
              width="400"
              height="200"
              alt="Zeropunkt"
            />
          </div>

          <div className={styles.FlexRight}>
            <h1 className={styles.titleDark}>The Sharing App.</h1>

            <h1 className={styles.subtitleDark}>
              One third of all food produced globally goes to waste.
              <br></br>
              <br></br>
              On Zero our aim is to reduce waste to save our planet. You’ll find
              our ambassadors giving away food & other household items to their
              neighbours.
            </h1>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.leftImage}>
            <a href="https://apps.apple.com/lv/app/zeropunkt/id1574704398">
              <Image
                src="/appleWhite.svg"
                alt="ZeroPunkt"
                height={100}
                width={100}
              />
            </a>
          </div>

          <div className={styles.download}>
            <div className={styles.titleSection}>Apple Store</div>

            <a href="https://apps.apple.com/lv/app/zeropunkt/id1574704398">
              <p className={styles.textDownload}>Download it on Apple Store &rarr;</p>
            </a>
          </div>

          <div className={styles.leftImage}>
            <a href="https://play.google.com/store/apps/details?id=com.nord.zeropunkt">
              <Image
                src="/google.svg"
                alt="ZeroPunkt"
                height={100}
                width={100}
              />
            </a>
          </div>

          <div className={styles.download}>
            <div className={styles.titleSection}>Google Play</div>

            <a href="https://play.google.com/store/apps/details?id=com.nord.zeropunkt">
              <p className={styles.textDownload}>Download it on Google Play &rarr;</p>
            </a>
          </div>
        </div>
      </main>

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
