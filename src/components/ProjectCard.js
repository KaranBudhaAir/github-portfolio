import React from "react";
import styles from "../styles/Home.module.css";

const ProjectCard = ({ title, description, tech }) => {
  return (
    <div className={styles.projectCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{tech}</span>
    </div>
  );
};

export default ProjectCard;
