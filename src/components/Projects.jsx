import React, { useState } from 'react';

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const projects = [
    { title: "Projet 1", description: "Description du projet 1" },
    { title: "Projet 2", description: "Description du projet 2" },
    { title: "Projet 3", description: "Description du projet 3" },
    // Ajoute d'autres projets ici
  ];

  const nextSlide = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <div className="projets">
      <h2>Mes Projets</h2>
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        {projects.map((project, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <div className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            )}
          </div>
        ))}
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Projects;
