import React from 'react'

const Nav = () => {
    return (
        <div className="h-screen w-screen justify-center items-center self-center
        mt-11"
            id="navContainer">

            <a href="#skills"
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
            </a>

            <a href="#cv"
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
            </a>

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

                <a href="#timeline"
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
                </a>
            </div>

            <a href="#contact"
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
            </a>

            <a href="#projects"
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
            </a>
        </div >
    )
}

export default Nav
