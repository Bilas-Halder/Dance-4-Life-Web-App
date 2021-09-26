import React, { Component, useEffect, useState } from 'react';
import Person from '../Person/Person';
import './CastDetails.css';

const CastDetails = ({ selectedCast, setSelectedCast }) => {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        fetch("./castData.json")
            .then(res => res.json())
            .then(data => setCasts(data));
    }, []);

    // click handler for child component
    const addToCastHandler = (person) => {
        if (!selectedCast.includes(person.key)) {
            // setting in local storage if it's already not exist
            localStorage.setItem(person.key, 1);
            const newSelectedCast = [...selectedCast, person.key];
            setSelectedCast(newSelectedCast);
        }

    };

    return (
        <div className="casts-details">
            {
                casts.map(person => <Person key={person.key} person={person} addToCastHandler={addToCastHandler}></Person>)
            }
        </div>
    );
};

export default CastDetails;