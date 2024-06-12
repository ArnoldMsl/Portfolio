import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div id="navContainer">
            <div id="boxContainer"></div>
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
