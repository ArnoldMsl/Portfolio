import React from 'react';
import { useState } from 'react';



const CV = () => {

    const [visibleSections, setVisibleSections] = useState([false, false, false, false, false, false, false, false]);

    const toggleVisibility = (index) => {
        setVisibleSections((prevVisibleSections) =>
            prevVisibleSections.map((visible, i) => (i === index ? !visible : visible))
        );
    };

    return (
        <div className="cvContainer">

            <div id="cvButtonContainer">

                <a href="https://www.linkedin.com/in/arnold-masselin-93b13912b" target="_blank" className="cvButtons">
                    Linkedin
                    <img src="../src/assets/images/linkedin.svg" alt="Linkedin" className="buttonLogo" id="linkedinIcon" />
                </a>
                <a href="../src/assets/downloads/CV A.Masselin.pdf" download className="cvButtons">
                    Télécharger CV
                    <img src="../src/assets/images/download.svg" alt="télécharger CV" className="buttonLogo" />
                </a>
                <a href="https://github.com/ArnoldMsl" target="_blank" className="cvButtons">
                    GitHub
                    <img src="../src/assets/images/github.svg" alt="GitHub" className="buttonLogo" />
                </a>

            </div>

            <div className="descriptionContainer">
                <div className="textCVContainer" id="hoard">
                    <button onClick={() => toggleVisibility(0)}>
                        Avr-Juil 24 : Développeur Front [REACT] - The Hoard
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={visibleSections[0] ? 'rotated' : ''}></img>
                    </button>
                    {visibleSections[0] && (
                        <p>
                            Réalisation pour une plateforme d'E-commerce, d'une application web mono-page de traitement d'images et d'impression en <span>REACT</span>
                        </p>
                    )}
                </div>
                <div className="textCVContainer" id="grdf">
                    <button onClick={() => toggleVisibility(1)}>
                        2018 - 23 : Acheteur - GRDF
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={visibleSections[1] ? 'rotated' : ''}></img>
                    </button>
                    {visibleSections[1] && (
                        <p>
                            Formulation des besoins, établissement des stratégies d’achat, mise en place et suivi des consultations, négociations commerciales et contractuelles,
                            gestion des catégories d’achats dédiées. Projets notables : <br /><br />
                            -Gestion de la <span>catégorie d'achat Digitale</span> : Prestations intelectuelles, applications Saas <br /><br />
                            -Achat de <span>Gaz</span> : Refonte de la structure contractuelle et concurrentielle en période de crise d’approvisionnement<br /><br />
                            -Achat de produits <span>COVID</span> : Sourcing Fournisseur et suivi logistique en période de crise sanitaire.
                        </p>
                    )}
                </div>
                <div className="textCVContainer" id="sushis">
                    <button onClick={() => toggleVisibility(2)}>
                        2013 - 15 : Reponsable Restaurant - Pop sushis
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={visibleSections[2] ? 'rotated' : ''}></img>
                    </button>
                    {visibleSections[2] && (
                        <p>
                            Job étudiant à temps partiel : Gestion de l'équipe, commandes fournisseurs, comptabilité basique, accueil, caisse, livraisons ponctuelles
                        </p>
                    )}
                </div>
                <div className="textCVContainer" id="wild">
                    <button onClick={() => toggleVisibility(3)}>
                        Sept - Fev 24 Formation développeur Web PHP - Wild Code School
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={visibleSections[3] ? 'rotated' : ''}></img>
                    </button>
                    {visibleSections[3] && (
                        <p>
                            Bootcamp intensif présentiel de 5 mois apprenant le métier de développeur web avec une dominante <span>PHP + SQL</span> et décernant le <span>titre RNCP développeur Web :</span><br /><br />
                            -HTML, CSS, PHP, SQL, Javascript, API<br /><br />
                            -Programmation orientée objet<br /><br />
                            -Travail en équipe et en méthodologie Agile via GitHub<br /><br />
                        </p>
                    )}
                </div>
            </div>
            <img id="locker" src='../src/assets/images/locker.png' alt="image d'un casier de vestiaire"></img>
            <div className="descriptionContainer">
                <div className="textCVContainer" id="numerilis">
                    <button onClick={() => toggleVisibility(4)}>
                        Fev - Avr 24 : Développeur Back [JAVA + SQL] - Numerilis
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={visibleSections[4] ? 'rotated' : ''}></img>
                    </button>
                    {visibleSections[4] && (
                        <p>
                            Développement Back-End en <span>Java et SQL</span> d'un logiciel de gestion de données bancaires pour s'adapter aux évolutions réglementaires
                        </p>
                    )}
                </div>
                <div className="textCVContainer" id="genci">
                    <button onClick={() => toggleVisibility(5)}>
                        Avr - Juin 14 : Stagiaire Projets Européens - GENCI
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={visibleSections[5] ? 'rotated' : ''}></img>
                    </button>
                    {visibleSections[5] && (
                        <p>
                            Pour une structure européenne de <span>supercalculateurs</span> : <br /><br />
                            -Reporting et Suivi d'une procédure de Pre Commercial Procurement <br /><br />
                            -Rédaction de conventions, de conditions générales d'achat
                        </p>
                    )}
                </div>
                <div className="textCVContainer" id="kedge">
                    <button onClick={() => toggleVisibility(6)}>
                        2018-19 Master 2 Management des achats - Kedge
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={visibleSections[6] ? 'rotated' : ''}></img>
                    </button>
                    {visibleSections[6] && (
                        <p>
                            Master II réalisé en Alternance au sein de GRDF couvrant les connaissances nécessaires au métier d'acheteur : Négociation, gestion de projet, analyse, communication
                        </p>
                    )}
                </div>
                <div className="textCVContainer" id="nanterre">
                    <button onClick={() => toggleVisibility(7)}>
                        2011-17 Master II Droit de l'Économie - Nanterre
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={visibleSections[7] ? 'rotated' : ''}></img>
                    </button>
                    {visibleSections[7] && (
                        <p>
                            Master II pluridisciplinaire de Droit Public augmenté d'une analyse économique du Droit. Parcours spécialisé
                            en Droit et Économie des contrats publics et Droit des affaires
                        </p>
                    )}
                </div>
            </div>
        </div >
    );
};

export default CV;