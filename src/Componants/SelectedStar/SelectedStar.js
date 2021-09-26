import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./SelectedStar.css"

const SelectedStar = ({ person, crossClickHandler }) => {
    const { name, imgURL, key } = person;

    return (
        <div className="cast d-flex">
            <div className="cast-img-div">
                <img src={imgURL} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
            </div>
            <div>
                <button className="cross-btn" onClick={() => crossClickHandler(key)}><FontAwesomeIcon className='cross-sign' icon={faTimes} /></button>
            </div>
        </div>
    );
};

export default SelectedStar;