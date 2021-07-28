import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZeroPunkt</title>
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
        <div className={styles.gridContainer}>
          <h1 className={styles.title}>Privacy.</h1>
          <p>
            Your privacy is important to us. It's ZeroPunkt's policy to
            respect your privacy regarding any information we may collect from
            you across our website, ZeroPunkt, and other sites we own and
            operate. We only ask for personal information when we truly need it
            to provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used. We only retain collected
            information for as long as necessary to provide you with your
            requested service. What data we store, we’ll protect within
            commercially acceptable means to prevent loss and theft, as well as
            unauthorised access, disclosure, copying, use or modification. We
            don’t share any personally identifying information publicly or with
            third-parties. Our website may link to external sites that are not
            operated by us. Please be aware that we have no control over the
            content and practices of these sites, and cannot accept
            responsibility or liability for their respective privacy policies.
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services. Your continued use of our website
            will be regarded as acceptance of our practices around privacy and
            personal information. If you have any questions about how we handle
            user data and personal information, feel free to contact us. This
            policy is effective as of 1 July 2021.
          </p>
        </div>
      </main>

       <footer className={styles.footer}>
        <div className={styles.Flex}>
          <div className={styles.footerLeft}>
            <Link href="/privacy">
              <p className={styles.textSmallLink}>Privacy</p>
            </Link>
          </div>

          {/* <div className={styles.footerSeparator}>
            <p className={styles.textSmall}>|</p>
          </div> */}

          <div className={styles.footerLeft}>
            <Image src="/EU.svg" alt="ZeroPunkt" height={60} width={60} />
          </div>

          <div className={styles.footerLeft}>
            <p className={styles.textSmall}>Registered in the European Union
            <br></br>Made in Latvia with Love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
