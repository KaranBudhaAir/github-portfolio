"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const projects = [
    "/images/projects/green_loan1.png",
    "/images/projects/green_loan2.png",
    "/images/projects/green_loan3.png",
  ];

  return (
    <section className={styles.hero}>
      
      {/* LEFT SIDE - SLIDESHOW */}
     
     <div className={styles.heroImages}>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={false}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
          pagination={{ clickable: true }}
        >
          {projects.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                width={600}
                height={400}
                className={styles.projectImage}
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      

      {/* RIGHT SIDE - TEXT */}
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          Turning Ideas Into Reliable,<br className={styles.hideSm} />
          Data-Driven Web Experiences.
        </h1>

        <p className={styles.subtitle}>
          I’m a full-stack web developer with a background in Data Science and
          Electronics & Communication Engineering. I build fast, accessible
          applications and turn complex data into intuitive user experiences.
        </p>

        <div className={styles.ctaRow}>
          <Link
            href="/resume/Karan-Air-Resume.pdf"
            className={styles.primaryBtn}
          >
            Resume
          </Link>

          <Link href="#contact" className={styles.secondaryBtn}>
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
