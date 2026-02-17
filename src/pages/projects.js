import styles from '@/styles/Home.module.css'
import Link from 'next/link';



  // src/pages/projects.js
import Image from "next/image";


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Green Loan Analysis",
      description:
        "Analyzed the Green Loan dataset to identify key patterns and risks, built predictive models for loan approval, and visualized insights using dashboards.",
      images: [
        "/images/projects/green_loan1.png",
        "/images/projects/green_loan2.png",
      ],
      keyInsights: [
        "Loan approval rate improved by 15% after model implementation",
        "Top predictors of default: Income, Employment Type, Loan Amount",
        "Visualization dashboards automated monthly reporting",
      ],
      skills: ["Python", "Pandas", "Matplotlib", "Power BI", "Machine Learning"],
      repo: "https://github.com/KaranBudhaAir/green-loan-analysis",
    },
    {
      id: 2,
      title: "Another Project",
      description: "Brief description of your second project",
      images: ["/images/projects/green_loan3.png"],
      keyInsights: ["Insight 1", "Insight 2"],
      skills: ["React", "Next.js", "Node.js"],
      repo: "",
    },
  ]; // <-- Important: close the array with ]

return (
<div>
    <div className={styles.homeButtonContainer}>
  <Link href="/">
    <button className={styles.homeButton}>← Home</button>
  </Link>
  </div>


  <section className={styles.projects}>
  {projects.map(project => (
    <div key={project.id} className={styles.projectCard}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <ul className={styles.skills}>
        {project.skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>

      <h3>Key Insights</h3>
      <ul className={styles.keyInsights}>
        {project.keyInsights.map((insight, i) => <li key={i}>{insight}</li>)}
      </ul>

      <div className={styles.projectImages}>
        {project.images.map((img, i) => (
          <Image key={i} src={img} alt={`${project.title} screenshot ${i}`} width={500} height={300}/>
        ))}
      </div>

      {project.repo && <a href={project.repo} target="_blank" className={styles.repoBtn}>View Code</a>}
    </div>
  ))}
  </section>



  </div>
);
} 
