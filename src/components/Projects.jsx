import React, { useState } from 'react'
import ImageCarousel from './ImageCarousel'

const Projects = () => {
  const [visibleSections, setVisibleSections] = useState([false, false, false, false, false])
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const toggleVisibility = (index) => {
    setVisibleSections((prevVisibleSections) =>
      prevVisibleSections.map((visible, i) => (i === index ? !visible : visible))
    )
  }

  const projects = [
    {
      id: 1,
      title: "Minis-printer",
      description: "Application dédiée au jeux de rôle qui permet à un utilisateur d'uploader ses images pour créer des présentoirs à imprimer sur des feuilles A4",
      descriptionDesktop: "Application réalisée dans le cadre d'un stage pour l'entreprise The hoard qui vend des accessoires pour le jeux de rôle papier Donjons & Dragons. \n L'application permet à l'utilisateur d'uploader ses propres images puis les customiser pour créer des présentoirs en papier à imprimer.",
      technology: "#React, #Tailwind",
      lien: "https://thehoard.github.io/",
      github: "",
      images: ["image1.png", "image2.png"],
    },
    {
      id: 2,
      title: "GhostQuill",
      description: "Projet personnel de site de partage de textes anonymes",
      descriptionDesktop: "Projet personnel de site de partages de textes anonymes en cours de réalisation sur une architecture Symfony SQL et react",
      technology: "#Symfony, #SQL, #React, #TailWind",
      github: "https://github.com/ArnoldMsl/GhostQuill",
      images: ["image1.png", "image2.png"],
    },
    {
      id: 3,
      title: "Origins Digital",
      description: "Projet d'école réalisé à 4 en 6 semaines : Site de partage de vidéos avec système de gestion des profils utilisateurs et de paiement en ligne",
      descriptionDesktop: "Projet d'école réalisé à 4 en 6 semaines : Plateforme d'enseignement au développement Web via des vidéos. Le site comporte la gestion des comptes utilisateurs lesquels disposent d'un planning d'apprentissage généré automatiquement via un Quiz. En outre, le site propose une interface de paiement gérée par Stripe.",
      technology: "#Symfony, #SQL, #JavaScript, #Stripe API",
      github: "https://github.com/WildCodeSchool-2023-09/php-paris-p3-originsdigital",
      images: ["image1.png", "image2.png", "image3.png"],
    },
    {
      id: 4,
      title: "Cyclaid",
      description: "Projet d'école réalisé à 4 en 6 semaines : Appli web mobile de partage de pièces détachées de vélos entre particuliers",
      descriptionDesktop: "Projet d'école réalisé à 4 en 6 semaines via SQL et une architecture MVC : Appli web mobile de partage de pièces détachées de vélos entre particuliers. Le site dispose d'un système de gestion des utilisateurs",
      technology: "#MVC, #PHP, #SQL",
      github: "https://github.com/WildCodeSchool-2023-09/PHP-paris-p2-cyclaid",
      images: ["image1.png", "image2.png"],
    },
  ]

  const nextSlide = () => {
    const currentSlide = document.querySelector('.slide.present')
    const lever = document.querySelector('.Lever')
    lever.classList.add('lever-right')
    setIsTransitioning(true)
    setDirection('right')
    currentSlide.classList.add('exit-left')

    setTimeout(() => {
      currentSlide.classList.remove('exit-left')
      lever.classList.remove('lever-right')
      setIsTransitioning(false)
      setCurrent(current === projects.length - 1 ? 0 : current + 1)
    }, 250)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setDirection('left')
    const lever = document.querySelector('.Lever')
    const currentSlide = document.querySelector('.slide.present')
    currentSlide.classList.add('exit-right')
    lever.classList.add('lever-left')

    setTimeout(() => {
      currentSlide.classList.remove('exit-right')
      lever.classList.remove('lever-left')
      setIsTransitioning(false)
      setCurrent(current === 0 ? projects.length - 1 : current - 1)
    }, 250)
  }

  return (
    <div className="w-screen lg:h-screen flex flex-col justify-center items-center content-center projectContainer">
      <h2 className="w-11/12 text-center border-white rounded-lg border-4 border-solid
      text-xl mb-4 mt-4 p-1 xl:text-2xl 2xl:text-3xl">
        Bienvenue à l'entrepôt ! <br />
        Ici, vous pouvez consulter les projets que j'ai réalisés ou auxquels j'ai participé
      </h2>

      {/* MOBILE */}

      <div className="lg:hidden flex-col w-screen mobileProjectContainer">
        {projects.map((project, index) => (
          <div key={project.id}>
            <button className="rounded-xl flex w-11/12 h-auto mr-auto ml-auto mb-5 mobileProjectCard" onClick={() => toggleVisibility(index)}>
              <img
                src={`assets/images/Project/${project.title}/mobile.png`}
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
                    <img className="w-6 ml-2" src="assets/images/general_icons/link.svg"></img>
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
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden w-screen lg:flex h-10 beamtimelineContainer"></div>
      <div className="hidden lg:flex w-screen projectCarousel overflow-hidden">

        {projects.map((project, index) => {
          let classNames = 'slide'
          if (index === current) {
            classNames += ' present'
          } else if (index === (current - 1 + projects.length) % projects.length && direction === 'left') {
            classNames += ' exit-left'
          } else if (index === (current + 1) % projects.length && direction === 'right') {
            classNames += ' exit-right'
          }

          return (
            <div key={project.id} className={classNames}>
              {index === current && (
                <>
                  <div className="hidden lg:flex lg:justify-evenly w-screen h-10 chainProjectContainer">
                    <img src="assets/images/Project/chain.png" className="chainLeft" alt="chain left" />
                    <img src="assets/images/Project/chain.png" className="chainRight" alt="chain right" />
                  </div>

                  <div className="flex flex-col justify-start items-center content-center text-center
                    pt-2 pb-2 w-11/12 mr-auto ml-auto border-t-2 border-b-2 border-secondaryMinor
                    lg:rounded-lg lg:border-8 lg:border-double
                    lg:grid-cols-2 lg:p-4
                    2xl:w-10/12 
                    project">
                    <h3 id="projectTitle" className="text-3xl lg:text-5xl 2xl:text-7xl">{project.title}</h3>
                    <p id="projectDescription" className="text-lg lg:text-xl lg:mt-2 2xl:text-2xl">{project.descriptionDesktop}</p>

                    {project.images && project.images.length > 0 && (
                      <ImageCarousel images={project.images.map(img => `${project.title}/${img}`)} />
                    )}

                    {project.technology && (
                      <div id="projectTechnology" className="flex flex-wrap justify-center items-center lg:mt-2 mr-auto ml-auto">
                        <img className="w-6 mr-2" src="assets/images/general_icons/cog.svg"></img>
                        <p className="text-lg lg:text-2xl">{project.technology}</p>
                      </div>
                    )}

                    <div id="projectLinks" className="flex justify-center 2xl:p-2">
                      {project.lien && (
                        <a className="flex justify-evenly items-center p-2 rounded-lg text-3xl mt-2 lg:w-fit 2xl:text-4xl 2xl:mt-4 cvButtons" href={project.lien} target="_blank" rel="noopener noreferrer">
                          Visiter le site
                          <img className="w-6 ml-2 2xl:w-10" src="assets/images/general_icons/link.svg"></img>
                        </a>
                      )}
                      {project.github && (
                        <p>
                          <a className="flex justify-evenly items-center p-2 rounded-lg text-3xl lg:w-fit mt-2 2xl:text-4xl 2xl:mt-4 cvButtons" href={project.github} target="_blank" rel="noopener noreferrer">
                            Voir sur GitHub
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          )
        })}

        <div className="hidden h-1/6 lg:inline-flex projectButtonsContainer mr-auto ml-auto">
          <button className="prev" onClick={prevSlide}>
            <img className="h-5/6 projectCarouselButton" src="assets/images/general_icons/left-button.png"></img>
          </button>
          <div className="h-full w-1/6 Lever"></div>
          <button className="next" onClick={nextSlide}>
            <img className="h-5/6 projectCarouselButton" src="assets/images/general_icons/right-button.png"></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
