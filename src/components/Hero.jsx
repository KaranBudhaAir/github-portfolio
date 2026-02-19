"use client";


import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Hook to detect mobile screen
function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleContact = () => setContactOpen(!contactOpen);

  const projects = [
    "/images/projects/commBank.png",
    "/images/projects/Deloitte.png",
    "/images/projects/green_loan3.png",
  ];

  return (
    <div className={styles.heroContainer}>
      <section className={styles.hero}>
        {/* ================= TEXT ================= */}
        <div className={styles.heroText}>
          <h3 className={styles.title}>
            Designing Scalable Data Solutions That Think<br className={styles.hideSm} />
            
          </h3>
          <p className={styles.subtitle}>
            I am experienced software developer with background in Electronics and Communication 
            Engineering, Data Science and AI, and I help business 
            to build scalable data driven solutions that utilizes Machine Learning, Big Data and Complex Algorithms.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <div className={styles.heroImages}>
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 100000, disableOnInteraction: false }}
            speed={1000}
            pagination={{ clickable: true }}
          >
            {projects.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  fill
                  className={styles.projectImage}
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className={styles.ctaRow}>
          <Link
            href="/resume/Karan-Air-Resume.pdf"
            className={styles.primaryBtn}
          >
            Resume
          </Link>

          {/* Desktop Contact */}
          {!isMobile && (
            <a
              href="mailto:kunal.neeon@gmail.com"
              className={styles.secondaryBtn}
            >
              Contact
            </a>
          )}

          {/* Mobile Contact Dropdown */}
          {isMobile && (
            <div className={styles.contactWrapper}>
              <button
                className={`${styles.secondaryBtn} ${styles.contactMobile}`}
                onClick={toggleContact}
              >
                Contact
              </button>

              {contactOpen && (
                <div className={styles.mobileContact}>
                  <Link href="mailto:kunal.neeon@gmail.com">
                    <Image
                      src="/images/svgs/gmail.svg"
                      alt="Gmail"
                      width={28}
                      height={28}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/karan-budha-air-a16852152/">
                    <Image
                      src="/images/svgs/linkedIn.svg"
                      alt="LinkedIn"
                      width={28}
                      height={28}
                    />
                  </Link>
                  <Link href="https://www.facebook.com/budhaayer">
                    <Image
                      src="/images/svgs/facebook.svg"
                      alt="Facebook"
                      width={28}
                      height={28}
                    />
                  </Link>
                  <Link href="https://github.com/KaranBudhaAir">
                    <Image
                      src="/images/svgs/logo-github.svg"
                      alt="Github"
                      width={28}
                      height={28}
                    />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}




