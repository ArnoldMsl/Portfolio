import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full flex justify-between items-center  bg-primarycolor z-50 sticky top-0
        border-b-2 py-2
        md:border-b-4 md:py-3 md:text-2xl md:px-10">
            <a href="#home"><img src="assets/images/general_icons/home.svg" className="h-9 hidden md:flex"></img></a>
            <ul className="hidden md:flex space-x-6 items-center">
                <li><a href="#timeline" className="hover:text-gray-400">Présentation</a></li>
                <li><a href="#projects" className="hover:text-gray-400">Projets</a></li>
                <li><a href="#cv" className="hover:text-gray-400">CV</a></li>
                <li><a href="#skills" className="hover:text-gray-400">Compétences</a></li>
                <li><a href="#contact" className="hover:text-gray-400 hover:border-gray-400 border-2 p-2 rounded-xl text-bold">CONTACT</a></li>
            </ul>

            {/* Mobile */}

            <ul className="flex w-full md:hidden justify-evenly h-10">
                <li><a href="#home"><img src="assets/images/general_icons/home.svg" className="h-full"></img></a></li>
                <li><a href="#navContainer"><img src="assets/images/general_icons/nav.svg" className="h-full"></img></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
