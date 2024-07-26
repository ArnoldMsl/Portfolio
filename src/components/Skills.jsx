import React from 'react'



const Skills = () => {

  return (
    <div className="flex flex-col w-screen h-fit 2xl:h-screen justify-end items-center text-center">
      <h1 className="
            border-white text-4xl rounded-lg border-4 border-solid w-fit mt-auto p-3 mb-7">Compétences
      </h1>

      <div className="mr-auto ml-auto w-screen skillsGridContainer">

        {/* Back-End */}

        <div className="flex flex-col justify-end" id="engineContainer">
          <div className="flex-col justify-end border-secondaryMinor rounded-lg border-4 border-solid p-4">
            <p className="w-5/6 text-2xl lg:text-4xl ml-auto mr-auto">Back-End</p>
            <p className="w-full lg:text-lg ml-auto mr-auto">Le Back-End correspond au "moteur" de votre site ou application :
              Il permet de stocker et traiter les données de vos utilisateurs</p>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">SQL</p>
              <img className="w-14 bg-slate-300 rounded-lg" src='assets/images/Skills_icons/logos/mysql.png' alt='logo mysql'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">PHP</p>
              <img className="w-14" src='assets/images/Skills_icons/logos/PHP.png' alt='logo php'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">Java</p>
              <img className="w-14 bg-slate-300 rounded-lg" src='assets/images/Skills_icons/logos/java.svg' alt='logo java'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">Symfony</p>
              <img className="w-14 bg-slate-300 rounded-full" src='assets/images/Skills_icons/logos/symfony.svg' alt='logo symfony'></img>
            </div>
          </div>
          <img className="mr-auto ml-auto" id="engineIcon" src='assets/images/Skills_icons/engine.svg' alt="image d'un moteur"></img>
        </div>

        {/* Front-End */}

        <div className="flex flex-col justify-end" id="tripodContainer">
          <div className="flex-col justify-end border-secondaryMinor rounded-lg border-4 border-solid p-4">

            <p className="w-5/6 text-2xl lg:text-4xl ml-auto mr-auto">Front-End</p>
            <p className="w-full lg:text-lg ml-auto mr-auto">Le Front-End correspond à la vue de votre application ou site :
              ce que l'utilisateur va voir affiché sur son écran</p>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">HTML</p>
              <img className="w-14" src='assets/images/Skills_icons/logos/HTML.png' alt='logo html'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">CSS</p>
              <img className="w-14" src='assets/images/Skills_icons/logos/CSS.png' alt='logo CSS'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">JavaScript</p>
              <img className="w-14" src='assets/images/Skills_icons/logos/js.png' alt='logo Javascript'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">React</p>
              <img className="w-14" src='assets/images/Skills_icons/logos/react.png' alt='logo React'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">Tailwind CSS</p>
              <img className="w-14" src='assets/images/Skills_icons/logos/tailwind.svg' alt='logo Tailwind'></img>
            </div>
          </div>

          <img className="mr-auto ml-auto mt-[-1%]" src='assets/images/Skills_icons/tripod.svg' alt="image d'un trépied d'architecte"></img>
        </div>

        {/* Outils */}

        <div className="flex flex-col justify-end" id="toolboxContainer">
          <div className="flex-col justify-end border-secondaryMinor rounded-lg border-4 border-solid p-4">

            <p className="w-5/6 text-2xl lg:text-4xl ml-auto mr-auto">Outils et méthodologie</p>
            <p className="w-full lg:text-lg ml-auto mr-auto">Une petite sélection d'outils que j'ai l'habitude d'utiliser,
              n'hésitez pas à m'en faire découvrir de nouveaux !
            </p>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">Méthode Agile</p>
              <img className="w-14 rounded-full" src='assets/images/Skills_icons/logos/agile.jpg' alt='logo méthodologie agile'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">GitHub</p>
              <img className="w-14" src='assets/images/general_icons/github.svg' alt='logo github'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">Figma</p>
              <img className="w-14" src='assets/images/Skills_icons/logos/figma.png' alt='logo Figma'></img>
            </div>
            <div className="inline-flex w-full justify-between items-center md:pl-8 md:pr-8 lg:pl-14 lg:pr-14 mb-2">
              <p className="w-4/8 text-2xl lg:text-4xl">Open AI</p>
              <img className="w-14 rounded-full" src='assets/images/Skills_icons/logos/openai.jpg' alt='logo Open AI'></img>
            </div>
          </div>

          <img className="mr-auto ml-auto" src='assets/images/Skills_icons/toolbox.svg' alt="image d'une boite à outils"></img>
        </div>
      </div>

    </div >
  )
}

export default Skills