import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./SelectedStar.css"

const SelectedStar = () => {
    return (
        <div className="cast d-flex">
            <div className="cast-img-div">
                <img src="https://topranked.in/wp-content/uploads/2020/04/Tiger-Shroff-373x450.png" alt="" />
            </div>
            <div>
                <h5>Remo D’Souza</h5>
            </div>
            <div>
                <button className="cross-btn"><FontAwesomeIcon className='cross-sign' icon={faTimes} /></button>
            </div>
        </div>
    );
};

export default SelectedStar;