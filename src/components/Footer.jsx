import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-around md:items-center bg-primarycolor
        border-t-2 py-2 mt-28 
        md:mt-48 md:border-t-4 md:py-3 md:text-sm md:px-10">
            <div className="flex flex-col">
                <p>Site créé et maintenu par Arnold Masselin</p>
                <p>contact@arnoldmasselin.fr</p>
            </div>
            <div className="flex flex-col">
                <p>Ce site est hebergé par O2switch</p>
                <p>O2SWITCH, SASU</p>
                <p>CHE DES PARDIAUX 63000 CLERMONT FERRAND</p>
                <p>+33 4 44 44 60 40</p>
            </div>
            <p>Tous droits réservés © 2024 Arnold Masselin</p>
        </footer>
    )
}

export default Footer