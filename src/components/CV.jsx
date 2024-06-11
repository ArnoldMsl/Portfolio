import React from 'react';
import { useState } from 'react';


const CV = () => {

    const [visibleSections, setVisibleSections] = useState([false, false, false]);

    const toggleVisibility = (index) => {
        setVisibleSections((prevVisibleSections) =>
            prevVisibleSections.map((visible, i) => (i === index ? !visible : visible))
        );
    };

    return (
        <div className="cvContainer">
            <div className="descriptionContainer">
                <div className="textCVContainer" id="hoard">
                    <button onClick={() => toggleVisibility(0)}>
                        Avr-Juil 24 : Développeur Front - The Hoard
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
            </div>
            <img id="locker" src='../src/assets/images/locker.svg' alt="image d'un casier de vestiaire"></img>
            <div className="descriptionContainer">
                <div className="textCVContainer" id="hoard">
                    <span>Février-Avril 2024 : Développeur Back Java SQL - Numérilis</span>
                    <p>Mise à jour d'un logiciel de gestion de données bancaires pour suivre la règlementation</p>
                </div>
            </div>
        </div >
    );
};

export default CV;