import React from "react";
import styles from "../styles/Home.module.css";

const SkillCard = ({ title, description }) => {
  return (
    <div className={styles.skillCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
