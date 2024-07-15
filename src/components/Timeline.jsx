import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../../src/output.css'

const Timeline = () => {

    return (

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
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p> */}
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
                    Je me met également à créér des "mods" pour jeux vidéos et à réaliser des "maps" en 3D
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
                icon={<img src='src\assets\images\Timeline\excel.svg' alt='icône de calculette'
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
                date="Carrière d'acheteur"
                iconStyle={{ background: '#0C2D57', color: 'rgba(255, 255, 255, 1)' }}
                icon={<img src='src\assets\images\Timeline\briefcase.svg' alt='icône de calculette'
                    style={{ width: '85%', height: '85%', marginRight: 'auto', marginLeft: 'auto', marginTop: '5%' }}></img>}
            >
                <h3 className="vertical-timeline-element-title">Je débute ma carrière en devenant Acheteur dans une grande entreprise du secteur de l'énergie</h3>
                <p>
                    En charge de projets stratégiques (achat de Gaz en temps de guerre, de produits COVID pendant la crise) mais aussi de catégories
                    dédiées comme celles du Digital, je continue de développer des Macros sur VBA pour simplifier mes tâches quotidiennes.
                </p>
            </VerticalTimelineElement>

        </VerticalTimeline>

    );
};

export default Timeline;