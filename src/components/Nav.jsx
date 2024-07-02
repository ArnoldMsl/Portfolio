import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="flex flex-col-reverse h-screen justify-center"
        id="navContainer">

            <Link to="/Skills"
                className="
                flex items-center justify-center
                w-screen h-24 mt-5 mb-5
                navButtonSmall">
                <div className="flex justify-center" id="boxContainerParent">
                    <div className="w-3/5 h-24" id="boxContainer"></div>
                    <label className="flex text-4xl w-screen justify-center drop-shadow-sm items-center">Compétences</label>
                </div>
            </Link>
            <div id="navCenterRow">
                <Link to="/CV"
                    className="
                    flex items-center justify-center
                    w-screen h-24 mt-5 mb-5
                    navButtonSmall">
                    <div className="flex justify-center" id="cvContainerParent">
                        <div className="w-3/5 h-24" id="cvContainer"></div>
                        <label className="flex text-4xl w-screen justify-center drop-shadow-sm items-center">CV</label>
                    </div>
                </Link>


                <p className="flex w-screen justify-center items-center
                text-4xl drop-shadow-sm mt-12 mb-12" 
                id="navText">
                On commence où ?</p>

                <Link to="/Nav"
                    className="
                    flex items-center justify-center
                    w-screen h-24 mt-5 mb-5
                    navButtonSmall">
                    <div className="flex justify-center" id="factoryContainerParent">
                        <div className="w-3/5 h-24" id="factoryContainer"></div>
                        <label className="flex text-4xl w-screen justify-center drop-shadow-sm items-center">Contact</label>
                    </div>
                </Link>

            </div>

            <Link to="/Nav"
                className="
                flex items-center justify-center
                w-screen h-24 mt-5 mb-5
                navButtonSmall">
                <div className="flex justify-center" id="warehouseContainerParent">
                    <div className="w-3/5 h-24" id="warehouseContainer"></div>
                    <label className="flex text-4xl w-screen justify-center drop-shadow-sm items-center">Projets</label>
                </div>
            </Link>
        </div >
    );
};

export default Nav;
