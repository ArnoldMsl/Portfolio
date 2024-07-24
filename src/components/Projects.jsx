import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [visibleSections, setVisibleSections] = useState([false, false, false, false]);

  const toggleVisibility = (index) => {
    setVisibleSections((prevVisibleSections) =>
      prevVisibleSections.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const [current, setCurrent] = useState(0);
  const projects = [
    {
      title: "Minis-printer",
      description: "Application dédiée au jeux de rôle qui permet à un utilisateur d'uploader ses images pour créer des présentoirs à imprimer sur des feuilles A4",
      technology: "#React, #Tailwind",
      lien: "https://thehoard.github.io/",
      github: "",
      images: ["image1.png", "image2.png"],
      link: "/Nav"
    },
    {
      title: "GhostQuill",
      description: "Projet personnel de site de partage de textes anonymes",
      technology: "#Symfony, #SQL, #React, #TailWind",
      github: "https://github.com/ArnoldMsl/GhostQuill",
      images: ["image1.png", "image2.png"],
      link: "/Nav"
    },
    {
      title: "Origins Digital",
      description: "Projet d'école réalisé à 4 en 6 semaines : Site de partage de vidéos avec système de gestion des profils utilisateurs et de paiement en ligne",
      technology: "#Symfony, #SQL, #JavaScript, #Stripe API",
      github: "https://github.com/WildCodeSchool-2023-09/php-paris-p3-originsdigital",
      images: ["image1.png", "image2.png", "image3.png"],
      link: "/Nav"
    },
    {
      title: "Cyclaid",
      description: "Projet d'école réalisé à 4 en 6 semaines : Appli web mobile de partage de pièces détachées de vélos entre particuliers",
      technology: "#MVC, #PHP, #SQL",
      github: "https://github.com/WildCodeSchool-2023-09/PHP-paris-p2-cyclaid",
      images: ["image1.png", "image2.png", "image3.png"],
      link: "/Nav"
    },


  ];

  const nextSlide = () => {
    const lever = document.querySelector('.Lever');
    lever.classList.add('next-active');

    setTimeout(() => {
      lever.classList.remove('next-active');
    }, 150);

    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <div className="w-screen lg:h-screen flex flex-col justify-center items-center content-center projectContainer">
      <h2 className="w-11/12 text-center border-white rounded-lg border-4 border-solid
      text-xl mb-4 mt-4">
        Bienvenue à l'entrepôt ! <br />
        Ici, vous pouvez consulter les projets que j'ai réalisés ou auxquels j'ai participé
      </h2>

      <div className="lg:hidden flex-col w-screen mobileProjectContainer">
        {projects.map((project, index) => (
          <>
            <button className="rounded-xl flex w-11/12 h-44 mr-auto ml-auto mb-5 mobileProjectCard" onClick={() => toggleVisibility(index)}>
              <img
                src={`src/assets/images/Project/${project.title}/mobile.png`}
                alt={`Projet ${project.title}`}
                className="w-full h-full rounded-xl"
              />
            </button>
            {visibleSections[index] && (
              <div className="flex flex-col justify-start items-center content-center text-center
                        p-1 mb-4 w-11/12 mr-auto ml-auto border-secondaryMinor rounded-xl border-solid border-2
                        project">
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-sm">{project.description}</p>

                {project.images && project.images.length > 0 && (
                  <ImageCarousel images={project.images.map(img => `${project.title}/${img}`)} />
                )}

                {project.technology && (
                  <div className="flex w-11/12 text-center justify-center flex-wrap">
                    <p className="text-lg">Technologies : {project.technology}</p>
                  </div>
                )}

                {project.lien && (
                  <a className="flex justify-evenly items-center p-2 rounded-lg text-3xl mt-2 cvButtons" href={project.lien} target="_blank" rel="noopener noreferrer">
                    Visiter le site
                    <img className="w-6 ml-2" src="src/assets/images/general_icons/link.svg"></img>
                  </a>
                )}
                {project.github && (
                  <p>
                    <a className="flex justify-evenly items-center p-2 rounded-lg text-3xl mt-2 cvButtons" href={project.github} target="_blank" rel="noopener noreferrer">
                      Voir sur GitHub
                    </a>
                  </p>
                )}
              </div>
            )}
          </>
        ))}
      </div>

      <div className="hidden lg:flex w-screen projectCarousel">
        <div className="hidden lg:flex w-screen beamtimelineContainer"></div>

        {projects.map((project, index) => (
          <div key={index} className={index === current ? "slide active" : "slide"}>
            {index === current && (
              <>
                <div className="hidden lg:flex lg:justify-evenly w-screen h-10 chainProjectContainer">
                  <img src="src/assets/images/Project/Chain.png" className="chainLeft" alt="chain left" />
                  <img src="src/assets/images/Project/Chain.png" className="chainRight" alt="chain right" />
                </div>

                <div className="flex flex-col justify-start items-center content-center text-center
                pt-2 pb-2 border-t-2 border-b-2 border-secondaryMinor
                lg:rounded-lg lg:border-4 lg:border-solid 
                project">
                  <h3 className="text-3xl">{project.title}</h3>
                  <p className="text-lg">{project.description}</p>

                  {project.images && project.images.length > 0 && (
                    <ImageCarousel images={project.images.map(img => `${project.title}/${img}`)} />
                  )}

                  {project.technology && (
                    <div className="flex w-screen flex-wrap justify-center items-center mr-auto ml-auto">
                      <img className="w-6 mr-2" src="src/assets/images/general_icons/cog.svg"></img>
                      <p className="text-lg">Technologies : {project.technology}</p>
                    </div>
                  )}

                  {project.lien && (
                    <a className="flex justify-evenly items-center p-2 rounded-lg text-3xl mt-2 cvButtons" href={project.lien} target="_blank" rel="noopener noreferrer">
                      Visiter le site
                      <img className="w-6 ml-2" src="src/assets/images/general_icons/link.svg"></img>
                    </a>
                  )}
                  {project.github && (
                    <p>
                      <a className="flex justify-evenly items-center p-2 rounded-lg text-3xl mt-2 cvButtons" href={project.github} target="_blank" rel="noopener noreferrer">
                        Voir sur GitHub
                      </a>
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        ))}

        <div className="hidden h-1/6 lg:inline-flex projectButtonsContainer mr-auto ml-auto">
          <button className="prev" onClick={prevSlide}>
            <img className="rotate-90" src="src/assets/images/general_icons/extend-button.png"></img>
          </button>
          <div className="h-full w-3/6 Lever"></div>
          <button className="next" onClick={nextSlide}>
            <img className="-rotate-90" src="src/assets/images/general_icons/extend-button.png"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
