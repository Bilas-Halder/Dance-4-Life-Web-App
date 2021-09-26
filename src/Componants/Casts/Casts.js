import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Casts.css';

const Casts = ({ selectedCast, setSelectedCast }) => {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        fetch("./castData.json")
            .then(res => res.json())
            .then(data => setCasts(data));
    }, []);

    const addToCastHandler = (person) => {
        if (!selectedCast.includes(person.key)) {
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

export default Casts;