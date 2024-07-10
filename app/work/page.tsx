import React from 'react';
import '../layout'; // Make sure to import the CSS file

const projects = [
  {
    title: "AMR Predict",
    date:"2024 - Present",
    description: "Creating a tool that combines AI and genomic information to predict antibiotic resistance is essential in addressing this issue.",
    link: "https://math.mit.edu/research/highschool/rsi/",
  },
  {
    title: "CogniLink",
    date:"2023 - Present",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum.",
    link: "https://example.com/desimone-lab",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum.",
    link: "https://example.com/jasanoff-lab",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum.",
    link: "https://example.com/desimone-lab",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum.",
    link: "https://example.com/jasanoff-lab",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum.",
    link: "https://example.com/desimone-lab",
  },

 
  // Add more projects as needed
];



const Projects = () => {
  return (
    
    <div className="container">
            <h1 className=" flex w-full font-medium text-2xl mb-8 pl-3 tracking-tighter">
        projects & portfolio.
      </h1>

      {projects.map((project, index) => (
        <a href={project.link} className="card font-mono" key={index}>
          <div className="card-title">{project.title}</div>
          <div className="card-date font-mono text-black">{project.date}</div>
          <br />
          <div className="card-description">{project.description}</div>
        </a>
      ))}

    </div>
  );
};

export default Projects;