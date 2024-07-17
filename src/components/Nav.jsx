import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="h-screen w-screen justify-center items-center self-center
        "
            id="navContainer">

            <Link to="/Skills"
                className="
                flex items-center justify-center
                w-full h-20 mt-1 mb-1 mr-auto ml-auto
                md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                navButtonSmall"
                id="skillsGridContainer">
                <div className="flex justify-center 
                md:w-60 md:h-60
                lg:w-72 lg:h-72
                xl:w-80 xl:h-80
                2xl:w-96 2xl:h-96"
                    id="boxContainerParent">
                    <div className="w-3/5 h-16 md:w-full md:h-full" id="boxContainer"></div>
                    <label className="flex text-3xl w-screen justify-center drop-shadow-sm items-center
                    md:hidden">
                        Compétences</label>
                </div>
            </Link>

            <Link to="/CV"
                className="
                    flex items-center justify-center
                    w-full h-20 mt-1 mb-1 mr-auto ml-auto
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

            <div id="clockNavContainer">
                <p className="flex flex-col justify-center items-center text-justify
                drop-shadow-sm
                md:w-full md:text-center md:mt-0 md:mb-0
                xl:text-lg
                "
                    id="navText">
                    <span className="text-4xl md:text-5xl 2xl:text-6xl mb-7"
                        id="navCatchPhrase">On commence où ?</span>
                </p>

                <Link to="/Timeline"
                    className="
                    flex items-center justify-center
                    w-full h-20 mt-1 mb-1 mr-auto ml-auto
                    md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                    navButtonSmall"
                    id="clockGridContainer">
                    <div className="flex justify-center
                md:w-60 md:h-60
                lg:w-72 lg:h-72
                xl:w-80 xl:h-80
                2xl:w-96 2xl:h-96"
                        id="clockContainerParent">
                        <div className="w-3/5 h-20 md:w-full md:h-full" id="clockContainer"></div>
                        <label className="flex text-3xl w-screen justify-center drop-shadow-sm items-center
                    md:hidden">
                            Mon histoire</label>
                    </div>
                </Link>
            </div>

            <Link to="/Nav"
                className="
                    flex items-center justify-center
                    w-full h-20 mt-1 mb-1 mr-auto ml-auto
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

            <Link to="/Projects"
                className="
                    flex items-center justify-center
                    w-full h-20 mt-1 mb-1 mr-auto ml-auto
                    md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                    navButtonSmall"
                id="warehouseGridContainer">
                <div className="flex justify-center
                md:w-60 md:h-60
                lg:w-72 lg:h-72
                xl:w-80 xl:h-80
                2xl:w-96 2xl:h-96"
                    id="warehouseContainerParent">
                    <div className="w-3/6 h-20 md:w-full md:h-full" id="warehouseContainer"></div>
                    <label className="flex text-4xl w-screen justify-center drop-shadow-sm items-center
                    md:hidden">
                        Projets</label>
                </div>
            </Link>
        </div >
    );
};

export default Nav;
