import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="flex-col-reverse h-screen justify-center items-center self-center
        md:flex-col md:items-center md:justify-center
        md:w-screen md:h-screen md:mt-auto md:mb-auto
        "
            id="navContainer">

            <Link to="/Skills"
                className="
                flex items-center justify-center
                w-11/12 h-20 mt-5 mb-5 mr-auto ml-auto
                md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                navButtonSmall">
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

            <div className="md:flex md:justify-center md:items-center
            md:h-1/3"
                id="navCenterRow">

                <Link to="/CV"
                    className="
                    flex items-center justify-center
                    w-11/12 h-20 mt-5 mb-5 mr-auto ml-auto
                    md:mt-0 md:mb-0
                    md:h-1/3 md:w-1/3
                    navButtonSmall">
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


                <p className="flex w-screen justify-center items-center
                text-4xl drop-shadow-sm mt-12 mb-12
                md:w-96 md:text-5xl md:ml-5 md:mr-9 md:text-center md:mt-0 md:mb-0
                2xl:text-6xl"
                    id="navText">
                    On commence où ?</p>

                <Link to="/Nav"
                    className="
                    flex items-center justify-center
                    w-11/12 h-20 mt-5 mb-5 mr-auto ml-auto
                    md:h-1/3 md:w-1/3
                    navButtonSmall">
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

            </div>

            <Link to="/Nav"
                className="
                flex items-center justify-center
                w-11/12 h-20 mt-5 mb-5 mr-auto ml-auto
                md:h-1/3 md:mr-auto md:ml-auto md:mt-0 md:mb-0
                navButtonSmall">
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
