"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleContact = () => setContactOpen(!contactOpen);

  return (
    <>
      <Head>
        <title>Karan Budha Air</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        {/* LEFT LINKS (Main page links) */}
        <div className={`${styles.navLeft} ${menuOpen ? styles.active : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>

        {/* CENTER LOGO */}
        <div className={styles.navCenter}>
          <div className={styles.logoCircle}>KB</div>
        </div>

        {/* RIGHT LINKS (Social icons only on desktop) */}
        <div className={styles.navRight}>
          <Link href="mailto:kunal.neeon@gmail.com">
            <Image
              src="/images/svgs/gmail.svg"
              alt="Gmail"
              width={28}
              height={28}
              priority
            />
          </Link>
          <Link href="https://www.linkedin.com/in/karan-budha-air-a16852152/">
            <Image
              src="/images/svgs/linkedIn.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              priority
            />
          </Link>
          <Link href="https://www.facebook.com/budhaayer">
            <Image
              src="/images/svgs/facebook.svg"
              alt="Facebook"
              width={28}
              height={28}
              priority
            />
          </Link>
          <Link href="https://github.com/KaranBudhaAir">
            <Image
              src="/images/svgs/logo-github.svg"
              alt="Github"
              width={28}
              height={28}
              priority
            />
          </Link>
        </div>

        {/* BURGER ICON (toggles only navLeft) */}
        <div
          className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <Hero
        contactOpen={contactOpen}
        toggleContact={toggleContact}
      />
    </>
  );
}
