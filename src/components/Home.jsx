import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homeContainer">
            <h1>Salut, je m'appelle</h1>
            <div className="welcomeContainer">
                <div className="welcomeText">
                    <h2>ARNOLD MASSELIN</h2>
                    <p>Et en tant que <span>Développeur Web,</span> je créé des trucs sur Internet</p>
                </div>
                <img id='photoProfil' src='../src/assets/images/photo.jpg' alt='photo de profil'></img>
            </div>
            <p id="invitationText">On construit ensemble ?</p>
            <Link to="/Nav" id="welcomeDownButton" src='../src/assets/images/down-button.png' alt='bouton continuer'></Link>
        </div >
    );
};

export default Home;
