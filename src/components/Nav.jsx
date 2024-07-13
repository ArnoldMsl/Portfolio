import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="grid grid-cols-3 h-screen w-screen justify-center items-center self-center
        "
            id="navContainer">

            <Link to="/Skills"
                className="
                flex items-center justify-center
                w-11/12 h-20 mt-5 mb-5 mr-auto ml-auto
                md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                navButtonSmall"
                id="skillsGridContainer">
                <div className="flex justify-center 
                md:w-60 md:h-60
                lg:w-72 lg:h-72
                xl:w-80 xl:h-80
                2xl:w-96 2xl:h-96"
                    id="boxContainerParent">
                    <div className="w-3/5 h-24 md:w-full md:h-full" id="boxContainer"></div>
                    <label className="flex text-3xl w-screen justify-center drop-shadow-sm items-center
                    md:hidden">
                        Compétences</label>
                </div>
            </Link>

            <Link to="/CV"
                className="
                    flex items-center justify-center
                    w-11/12 h-20 mt-5 mb-5 mr-auto ml-auto
                    md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                    navButtonSmall"
                id="CVGridContainer">
                <div className="flex justify-center
                    md:w-60 md:h-60
                    lg:w-72 lg:h-72
                    xl:w-80 xl:h-80
                    2xl:w-96 2xl:h-96"
                    id="cvContainerParent">
                    <div className="w-3/5 h-20 md:w-full md:h-full" id="cvContainer"></div>
                    <label className="flex text-4xl w-screen justify-center drop-shadow-sm items-center
                        md:hidden">
                        CV</label>
                </div>
            </Link>


            <p className="flex flex-col justify-center items-center text-justify
                drop-shadow-sm
                md:w-full md:text-center md:mt-0 md:mb-0
                xl:text-lg
                "
                id="navText">
                <span className="text-4xl md:text-5xl 2xl:text-6xl mb-7"
                    id="navCatchPhrase">On commence où ?</span>
                Par une petite présentation ? Depuis mon enfance, j'ai toujours nourri un intérêt pour la technique : <br />
                À 7 ans, je démontais tous mes jouets pour en comprendre le fonctionnement <br />
                À 10 ans, je construisais voitures téléguidées et robots <br />
                À 13 ans -après m'être construit un PC à partir de carcasses trouvées dans la rue- j'ai commencé à apprendre le C++ via le site du Zéro. <br />
                Au collège, je passais mes cours de physique à programmer des jeux sur ma calculette TI-89. <br />
                À l'université, je développais des petits jeux-vidéos sur excel (VBA) à l'occasion de mes cours de Compta <br />
                Au cours de ma carrière, je programmais des Macros pour automatiser certaines de mes tâches. <br />
                Après un double-Master II de Droit et d'Économie, un Master d'école de commerce et 5 ans dans les achats
                je décide d'enfin me dévouer à cette passion en me forgeant les compétences nécessaires
                pour mettre l'informatique au service du Droit ou du Commerce. <br />

                <span className="text-2xl md:text-3xl 2xl:text-4xl mt-7">
                    Envie d'en savoir plus ? Explorez mon profil
                    et contactez moi pour se mettre au boulot !
                </span>
            </p>

            <Link to="/Nav"
                className="
                    flex items-center justify-center
                    w-11/12 h-20 mt-5 mb-5 mr-auto ml-auto
                    md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                    navButtonSmall"
                id="ContactGridContainer">
                <div className="flex justify-center
                    md:w-60 md:h-60
                    lg:w-72 lg:h-72
                    xl:w-80 xl:h-80
                    2xl:w-96 2xl:h-96"
                    id="factoryContainerParent">
                    <div className="w-3/5 h-20 md:w-full md:h-full" id="factoryContainer"></div>
                    <label className="flex text-4xl w-screen justify-center drop-shadow-sm items-center
                        md:hidden">
                        Contact</label>
                </div>
            </Link>

            <Link to="/Nav"
                className="
                    flex items-center justify-center
                    w-11/12 h-20 mt-5 mb-5 mr-auto ml-auto
                    md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                    navButtonSmall"
                id="warehouseGridContainer">
                <div className="flex justify-center
                md:w-60 md:h-60
                lg:w-72 lg:h-72
                xl:w-80 xl:h-80
                2xl:w-96 2xl:h-96"
                    id="warehouseContainerParent">
                    <div className="w-3/5 h-24 md:w-full md:h-full" id="warehouseContainer"></div>
                    <label className="flex text-4xl w-screen justify-center drop-shadow-sm items-center
                    md:hidden">
                        Projets</label>
                </div>
            </Link>
        </div >
    );
};

export default Nav;
