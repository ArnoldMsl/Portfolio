import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="
        homeContainer
        w-screen h-screen flex flex-col justify-center items-center
        ">
            <h1 className="
            text-3xl mb-2
            sm:text-3xl sm:m-2
            md:text-4xl
            lg:text-5xl lg:mb-10
            xl:text-7xl
            ">Salut, je m'appelle</h1>
            <img className="block rounded-full
            h-36 mb-2
            sm:h-32 sm:m-2
            md:hidden"
                id='photoProfil' src='assets/images/others/photo.webp' alt='photo de profil'></img>

            <div className="welcomeContainer inline-flex items-center">

                <div className="welcomeText flex flex-col 
                justify-center items-center
                md:items-start">
                    <h2 className="
                    text-5xl
                    sm:text-6xl
                    md:items-start md:justify-start md:text-7xl md:ml-20
                    lg:text-8xl lg:ml-28 lg:mt-10
                    xl:mt-0 xl:mb-0
                    2xl:text-9xl
                    ">ARNOLD MASSELIN</h2>
                    <p className="
                    text-center
                    text-2xl mt-4 mb-4 mr-6 ml-6
                    sm:text-3xl sm:mt-4 sm:mb-2 sm:mr-8 sm:ml-8
                    md:text-start md:text-4xl md:ml-20 md:mt-10 md:mb-10
                    lg:text-5xl lg:ml-28
                    xl:text-6xl
                    ">Et en tant que <span className="font-bold">Développeur Web,</span> je créé des trucs sur Internet</p>
                </div>
                <img className="rounded-full
                hidden
                md:block md:h-44 md:mr-10
                lg:h-56 lg:mr-10
                xl:h-80 xl:mr-10"
                    id='photoProfil' src='assets/images/others/photo.webp' alt='photo de profil'></img>
            </div>
            <p className="
            text-2xl mb-4
            sm:mb-1
            md:text-3xl md:mb-6
            lg:text-4xl
            xl:text-5xl"
                id="invitationText">On construit ensemble ?</p>
            <Link to="/Nav" className="
            block rounded-full
            w-12 h-12
            md:w-16 md:h-16 
            lg:w-20 lg:h-20
            xl:w-24 xl:h-24
            2xl:w-28 2xl:h-28"
                id="welcomeDownButton" alt='bouton continuer'></Link>
        </div >
    )
}

export default Home
