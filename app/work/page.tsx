import React from 'react';
import '../layout'; // Make sure to import the CSS file

const projects = [
  {
    title: "Lorem Ipsum",
    description: "Lorem IpsumLorem IpsumLorem Ipsum.",
    link: "https://math.mit.edu/research/highschool/rsi/",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    link: "https://example.com/desimone-lab",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    link: "https://example.com/jasanoff-lab",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    link: "https://example.com/desimone-lab",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    link: "https://example.com/jasanoff-lab",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    link: "https://example.com/desimone-lab",
  },

 
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="container">
      {projects.map((project, index) => (
        <a href={project.link} className="card" key={index}>
          <div className="card-title">{project.title}</div>
          <div className="card-description">{project.description}</div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
