import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Link } from 'react-router-dom';

const Timeline = () => {

    return (
        <>
            <div className="w-screen flex flex-col">

                <div className="flex flex-col justify-center items-center text-center border-white rounded-lg border-4 border-solid ml-auto mr-auto mt-3 p-3 w-1/2
            text-xl timelineIntroductionContainer">
                    <p>Bienvenue sur ma Timeline qui retrace l'histoire de mon rapport à la technique et l'informatique ! <br />
                        Elle vous permettra de mieux comprendre mon attrait pour ces sujets. Si vous souhaitez avoir accès à plus de détails,
                        je vous invite à visiter les pages </p>
                    <Link to="/CV" className="text-secondaryMinor underline">CV</Link>
                    <Link to="/Skills" className="text-secondaryMinor underline">Compétences</Link>
                    <Link to="/Projects" className="text-secondaryMinor underline">Projets</Link>
                </div>


                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="À 7 ans"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\toy.svg' alt='icône de jouet'
                            style={{ width: '90%', height: '90%', marginRight: 'auto', marginLeft: 'auto', }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Dès mon plus jeune âge, je démontais tous mes jouets pour en comprendre le fonctionnement.</h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="À 10 ans"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\robot.svg' alt='icône de robot'
                            style={{ width: '90%', height: '90%', marginRight: 'auto', marginLeft: 'auto', }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">À 10 ans, je construisais robots et voitures téléguidées</h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="À 13 ans"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\C++.svg' alt='icône C++'
                            style={{ width: '75%', height: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: '12%' }}></img>}
                    >
                        <h3 className="text-2xl text-secondaryMinor vertical-timeline-element-title">Mes débuts en informatique</h3>
                        <p>
                            Après avoir construit mon premier ordinateur à partir de PC trouvés dans la rue, je commence à apprendre le C++ sur le Site du Zéro
                        </p>
                        <p>
                            Je me met également à créér des mods pour jeux vidéos et à réaliser des maps en 3D
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="Scolarité"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\calculator.svg' alt='icône de calculette'
                            style={{ width: '90%', height: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: '5%' }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Au collège, je programmais sur ma calculette TI-89 pour résoudre les problèmes de Math</h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="Université"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\excel.svg' alt='icône excel'
                            style={{ width: '80%', height: '80%', marginRight: 'auto', marginLeft: 'auto', marginTop: '10%' }}></img>}
                    >
                        <h3 className="vertical-timeline-element-title">À l'occcasion de mes cours de comptabilité, je développais des programmes et des petits jeux sur Excel (VBA)</h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="Carrière"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\briefcase.svg' alt='icône de serviette à documents'
                            style={{ width: '85%', height: '85%', marginRight: 'auto', marginLeft: 'auto', marginTop: '5%' }}></img>}
                    >
                        <h3 className="text-2xl vertical-timeline-element-title">Carrière d'Acheteur</h3>
                        <p>
                            Je débute ma carrière en devenant Acheteur dans une grande entreprise du secteur de l'énergie pendant 5 ans. J'étais En charge de projets stratégiques (achat de Gaz en temps de guerre, de produits COVID pendant la crise) mais aussi de catégories
                            dédiées comme celles du Digital.
                        </p>
                        <p>
                            Je continue de développer des Macros sur VBA pour simplifier mes tâches quotidiennes.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid aqua',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  aqua' }}
                        date="Nouveau Cap"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)', display: "flex", justifyContent: "center" }}
                        icon={<img src='src\assets\images\Timeline\compass.svg' alt='icône de boussole'
                            style={{ width: '85%', height: '85%', marginRight: 'auto', marginLeft: '8.35%', marginTop: '9%' }}></img>}
                    >
                        <h3 className="text-2xl text-thirdColor vertical-timeline-element-title">Bootcamp Développeur Web</h3>
                        <p>
                            Je décide d'enfin me dévouer à cette passion en me forgeant les compétences nécessaires
                            pour mettre l'informatique au service du Droit ou du Commerce.
                        </p>
                        <p>
                            Je complète donc un bootcamp intensif en présentiel de 5 mois à la Wild Code School de Paris où j'apprend
                            le HTML, CSS, PHP, Javascript ainsi que le framework symfony et tous les outils nécessaires au travail d'équipe (gitHub, Slack etc...)
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="Premier stage : Février-Avril 24"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\bank.svg' alt='icône de Banque'
                            style={{ width: '75%', height: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: '8%' }}></img>}
                    >
                        <h3 className="text-2xl vertical-timeline-element-title">Stage développeur JAVA SQL</h3>
                        <p>
                            Je me met le pied à l'étrier avec un premier stage où je participais à la mise à jour d'un logiciel
                            de traitement de données bancaires en Java et SQL.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="Deuxième stage : Avril-Juillet 24"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\react.svg' alt='Logo react'
                            style={{ width: '75%', height: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: '10%' }}></img>}
                    >
                        <h3 className="text-2xl vertical-timeline-element-title">Stage développeur REACT</h3>
                        <p>
                            J'explore le mêtier de développeur Front en réalisant une application de traitement d'image et d'impressions en React
                            pour une entreprise de E-commerce.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            border: '3px solid #fff',
                            borderRadius: '15px',
                            borderBottom: 'none',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                        date="Et maintenant ?"
                        iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                        icon={<img src='src\assets\images\Timeline\eyes.svg' alt='Logo react'
                            style={{ width: '75%', height: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: '11%' }}></img>}
                    >
                        <h3 className="text-2xl vertical-timeline-element-title">La suite ?</h3>
                        <p>
                            À nous de l'écrire ensemble ! N'hésitez pas à retrouver les éléments plus détaillés
                            dans les pages &nbsp;
                            <Link to="/CV" className="text-xl text-secondaryMinor underline">CV</Link>,&nbsp;
                            <Link to="/Skills" className="text-xl text-secondaryMinor underline">Compétences</Link> et &nbsp;
                            <Link to="/Projects" className="text-xl text-secondaryMinor underline">Projets</Link>
                        </p>
                        <p>
                            Convaincu ? n'hésitez pas à <Link to="/Contact" className="text-xl text-secondaryMinor underline">me contacter</Link> !
                        </p>

                    </VerticalTimelineElement>

                </VerticalTimeline>

            </div>

        </>
    );
};

export default Timeline;