import React from 'react';
import { useState } from 'react';


const CV = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isRotated, setIsRotated] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
        setIsRotated(!isRotated);
    };

    return (
        <div className="cvContainer">
            <div className="descriptionContainer">
                <div className="textCVContainer" id="hoard">
                    <span>Avril-Juin 2024 : Développeur Front React - The Hoard</span>
                    <p>Réalisation d'une application web de traitement d'images et d'impressions pour du jeu de rôle</p>
                </div>
                <div className="textCVContainer" id="grdf">
                    <button onClick={toggleVisibility}>
                        2018 - 2023 : Acheteur - GRDF
                        <img id="extendButton" src='../src/assets/images/extend-button.png' alt="étendre le texte" className={isRotated ? 'rotated' : ''}></img>
                    </button>
                    {isVisible && (
                        <p>
                            Formulation des besoins, établissement des stratégies d’achat, mise en place et suivi des consultations, négociations commerciales et contractuelles, gestion des catégories d’achats dédiées.
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