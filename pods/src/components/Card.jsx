import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ id, name, color, weapon }) => { // Destructure props
    return (
        <div className="card-container">
            <div className="info-container">
                <h2 className="pod-name">Name: {name}</h2>
                <p className="pod-color">Color: {color}</p>
                <p className="pod-weapon">Weapon: {weapon}</p>
            </div>
            <div className="button-container">
                <Link to={`/pods/${id}/edit`} className="button">Edit</Link>
            </div>
        </div>
    );
};

export default Card;