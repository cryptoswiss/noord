import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { useState, useEffect, useContext, useRef } from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = {
  1: ["/haus1.png", "/haus2.png", "/haus3.png"],
};

const images2 = {
  1: ["/punkt1.png", "/punkt2.png"],
};

const lighboxes = ["1"];

const lighboxes2 = ["1"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const [isOpen2, setIsOpen2] = useState(0);
  const [photoIndex2, setPhotoIndex2] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Noord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Header}>
        <div className={styles.Logo}>
          <h1 className={styles.logo}>noord</h1>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.FlexPadding}>
          <div className={styles.FlexLeftTwo}>
            <Image src="/image2.jpg" alt="noord" width={600} height={300} />
          </div>

          <div className={styles.FlexRightTwo}>
            <h1 className={styles.hero}>
              Made by Full Stack{" "}
              <span style={{ color: "#00FFBB" }}>Developer.</span>
            </h1>

            <div className={styles.paragraph}>
            <p>
              André Buzzi is a renowned Full Stack Developer that makes apps to
              perfection. Deal your project from the UX/UI Design to the final
              coding in React Native for iOS and Android or a beautiful web app
              in React JS + Next.JS
            </p>
            </div>

          </div>
        </div>

        <div className={styles.Flex}>
          <div className={styles.FlexLeft}>
            <h1 className={styles.hero}>Portfolio</h1>
          </div>
        </div>

        <div className={styles.gridFlex}>
          <div className={styles.cardImage}>
            <Image src="/card.svg" alt="Card" height={200} width={200} />
          </div>

          <div className={styles.cardText}>
            <h1 className={styles.title}>SuisseCard</h1>
            <p>
              Global payments enabled anytime and anywhere via Mastercard.
              Node.JS, Express + PostgreSQL databases solid as a rock.
            </p>

            <div className={styles.ButtonContainer}>
              <Link href="https://www.suissecard.com">
                <a className={styles.Button} target="_blank">
                  Visit
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.gridFlex}>
          <div className={styles.cardImage}>
            <Image src="/haus.svg" alt="Haus" height={200} width={200} />
          </div>

          <div className={styles.cardText}>
            <h1 className={styles.title}>Haus</h1>
            <p>
              Haus is an alternative to expensive rental apps. Haus charges an
              annual subscription instead of costly fees. We developed this
              project for iOS/Android in React Native using many features like
              time awareness, calenders, GEO Location, Autocomplete addresses,
              Non-SQL Databases and more. André our main designer also
              completely re-designed the Logotype and UX/UI Design for the app.
            </p>

            <div className={styles.ButtonContainer}>
              {lighboxes.map((item) => (
                <div>
                  <button
                    type="button"
                    key={item}
                    className={styles.Button}
                    onClick={() => setIsOpen(item)}
                  >
                    Visit
                  </button>
                </div>
              ))}
              {!!isOpen && (
                <Lightbox
                  enableZoom={false}
                  mainSrc={images[isOpen][photoIndex]}
                  nextSrc={
                    images[isOpen][(photoIndex + 1) % images[isOpen].length]
                  }
                  prevSrc={
                    images[isOpen][
                      (photoIndex + images[isOpen].length - 1) %
                        images[isOpen].length
                    ]
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + images[isOpen].length - 1) %
                        images[isOpen].length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images[isOpen].length)
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.gridFlex}>
          <div className={styles.cardImage}>
            <Image src="/punkt.svg" alt="Haus" height={200} width={200} />
          </div>

          <div className={styles.cardText}>
            <h1 className={styles.title}>Punkt</h1>
            <p>
              Food Delivery App for the Baltics/Nordics. 100% Made in React
              Native (iOS and Android). We work with Google Maps API and GEO
              Location in order to arrange the favourite Restaurants for
              customer by location. We work with ApplePay and Stripe API to ask
              for instant payments. Orders tracking the couriers LIVE in
              realtime.
            </p>

            <div className={styles.ButtonContainer}>
              {lighboxes2.map((item) => (
                <div>
                  <button
                    type="button"
                    key={item}
                    className={styles.Button}
                    onClick={() => setIsOpen2(item)}
                  >
                    Visit
                  </button>
                </div>
              ))}
              {!!isOpen2 && (
                <Lightbox
                  enableZoom={false}
                  mainSrc={images2[isOpen2][photoIndex2]}
                  nextSrc={
                    images2[isOpen2][
                      (photoIndex2 + 1) % images2[isOpen2].length
                    ]
                  }
                  prevSrc={
                    images2[isOpen2][
                      (photoIndex2 + images2[isOpen2].length - 1) %
                        images2[isOpen2].length
                    ]
                  }
                  onCloseRequest={() => setIsOpen2(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex2(
                      (photoIndex2 + images2[isOpen2].length - 1) %
                        images2[isOpen2].length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex2((photoIndex2 + 1) % images2[isOpen2].length)
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.gridFlex}>
          <div className={styles.cardImage}>
            <Image src="/punkt2.svg" alt="Haus" height={200} width={200} />
          </div>

          <div className={styles.cardText}>
            <h1 className={styles.title}>FoodTech</h1>
            <p>
              Website in NEXT.JS/React JS for FoodTech. GEO Location, Card
              payments, No-SQL Databases. 100% done in React.
            </p>

            <div className={styles.ButtonContainer}>
              <Link href="https://thepunkt.app">
                <a className={styles.Button} target="_blank">
                  Visit
                </a>
              </Link>
            </div>
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
