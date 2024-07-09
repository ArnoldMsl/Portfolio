import React from 'react';
import { useState } from 'react';



const Skills = () => {

  const [visibleSections, setVisibleSections] = useState([false, false, false, false, false, false, false, false]);

  const toggleVisibility = (index) => {
    setVisibleSections((prevVisibleSections) =>
      prevVisibleSections.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center text-center">
      <h1 className="
            border-white text-4xl rounded-lg border-4 border-solid w-fit ml-auto mr-auto mt-3 p-3">Compétences
      </h1>

      <div className="mr-auto ml-auto w-screen skillsGridContainer">

        <div id="engineContainer">
          <div className="flex-col justify-end border-secondaryMinor rounded-lg border-4 border-solid">blablabla</div>
          <img className="mr-auto ml-auto" src='../src/assets/images/engine.svg' alt="image d'un moteur"></img>
        </div>

        <div id="tripodContainer">
          <div className="flex-col justify-end border-secondaryMinor rounded-lg border-4 border-solid">blablabla 2</div>
          <img className="mr-auto ml-auto mt-[-1%]" src='../src/assets/images/tripod.svg' alt="image d'un trépied d'architecte"></img>
        </div>

        <div id="toolboxContainer">
          <div className="flex-col justify-end border-secondaryMinor rounded-lg border-4 border-solid">blablabla 3</div>
          <img className="mr-auto ml-auto" src='../src/assets/images/toolbox.svg' alt="image d'une boite à outils"></img>
        </div>
      </div>

    </div >
  );
};

export default Skills;