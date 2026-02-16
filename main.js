const projects = [
  {
    title: "Customer Churn Analysis",
    description: "Built a Power BI dashboard to visualize churn patterns and trends.",
    image: "images/project1.png",
    link: "https://github.com/KaranBudhaAir/churn-analysis"
  },
  {
    title: "Sales Forecasting",
    description: "Used Python and ML models to forecast monthly sales.",
    image: "images/project2.png",
    link: "https://github.com/KaranBudhaAir/sales-forecasting"
  }
];

const projectGrid = document.getElementById('project-grid');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank" class="btn">View Project</a>
  `;
  projectGrid.appendChild(card);
});
