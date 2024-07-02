import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div id="navContainer">
            <Link to="/Skills"
                className="
                flex items-center justify-center
                w-screen h-24 mt-5 mb-5
                navButtonSmall"
                id="boxContainer">
                <label className="flex text-3xl w-screen justify-end mr-16 drop-shadow-sm">Compétences</label>
            </Link>
            <div id="navCenterRow">
                <Link to="/CV" id="cvContainer"></Link>
                <p id="navText">On commence où ?</p>
                <div id="factoryContainer"></div>
            </div>
            <div id="warehouseContainer"></div>
        </div >
    );
};

export default Nav;
