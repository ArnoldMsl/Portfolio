import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="
        homeContainer
        w-screen h-screen flex flex-col justify-center items-center
        ">
            <h1 className="
            lg:text-5xl mb-10
            xl:text-7xl
            ">Salut, je m'appelle</h1>
            <div className="welcomeContainer inline-flex items-center">
                <div className="welcomeText flex flex-col items-start">
                    <h2 className="
                    lg:text-8xl lg:ml-28 lg:mt-10
                    xl:ml-44 xl:mt-0
                    ">ARNOLD MASSELIN</h2>
                    <p className="
                    text-start
                    lg:text-5xl lg:ml-28 lg:mt-10 lg:mb-10
                    xl:text-6xl xl:ml-44
                    ">Et en tant que <span>Développeur Web,</span> je créé des trucs sur Internet</p>
                </div>
                <img className="block rounded-full
                lg:h-56 lg:mr-10
                xl:h-80 xl:m-10"
                    id='photoProfil' src='../src/assets/images/photo.jpg' alt='photo de profil'></img>
            </div>
            <p className="
            lg:text-4xl lg:mb-6
            xl:text-5xl"
            id="invitationText">On construit ensemble ?</p>
            <Link to="/Nav" className="
            block
            lg:w-20 lg:h-20 rounded-full"
                id="welcomeDownButton" src='../src/assets/images/down-button.png' alt='bouton continuer'></Link>
        </div >
    );
};

export default Home;
