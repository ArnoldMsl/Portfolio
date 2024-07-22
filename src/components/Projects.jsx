import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const projects = [
    {
      title: "Minis-printer",
      description: "Application dédiée au jeux de rôle qui permet à un utilisateur d'uploader ses images pour créer des présentoirs à imprimer sur des feuilles A4",
      technology: ["#React", "#Tailwind"],
      lien: "https://thehoard.github.io/",
      github: "",
      images: ["image1.png", "image2.png"],
    },
    { title: "Projet 2", description: "Description du projet 2" },
    { title: "Projet 3", description: "Description du projet 3" },
  ];

  const nextSlide = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center content-center projectContainer">
      <h2 className="w-screen text-center">
        Bienvenue à l'entrepôt ! Ici, vous pouvez consulter les projets que j'ai réalisé ou auxquels j'ai participé
      </h2>

      <div className="w-screen projectCarousel">
        <div className="
        hidden lg:block
        w-screen beamtimelineContainer"></div>

        {projects.map((project, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <>
                <div className="
                hidden lg:flex lg:justify-evenly
                w-screen h-10
                chainProjectContainer">
                  <img src="src/assets/images/Project/Chain.png" className="chainLeft" alt="chain left" />
                  <img src="src/assets/images/Project/Chain.png" className="chainRight" alt="chain right" />
                </div>

                <div className="flex flex-col justify-start items-center content-center text-center 
              border-secondaryMinor rounded-lg border-4 border-solid
              pt-2 pb-2
              project">

                  <h3 className="text-3xl">{project.title}</h3>
                  <p className="text-lg">{project.description}</p>

                  {project.images && project.images.length > 0 && (
                    <ImageCarousel images={project.images.map(img => `${project.title}/${img}`)} />
                  )}

                  {project.technology && (
                    <ul className="flex flex-wrap items-center">
                      <img className="w-6 mr-2" src="src\assets\images\general_icons\cog.svg"></img>
                      <p className="text-xl">Technologies : &nbsp;</p>
                      {project.technology.map((tech, index) => (
                        <li className="text-xl" key={index}>{tech} &nbsp;</li>
                      ))}
                    </ul>
                  )}

                  {project.lien && (
                    <a className="flex justify-evenly items-center
                      p-2 rounded-lg text-3xl mt-2
                      cvButtons"
                      href={project.lien} target="_blank" rel="noopener noreferrer">
                      Visiter le site
                      <img className="w-6 ml-2" src="src\assets\images\general_icons\link.svg"></img>
                    </a>
                  )}
                  {project.github && (
                    <p>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Code source
                      </a>
                    </p>
                  )}

                </div>
              </>
            )}
          </div>
        ))}

        <div className="h-1/6 inline-flex projectButtonsContainer mr-auto ml-auto">
          <button className="prev" onClick={prevSlide}>
            <img className="rotate-90" src="src\assets\images\general_icons\extend-button.png"></img>
          </button>
          <div className="Lever"></div>
          <button className="next" onClick={nextSlide}>
            <img className="-rotate-90" src="src\assets\images\general_icons\extend-button.png"></img>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
