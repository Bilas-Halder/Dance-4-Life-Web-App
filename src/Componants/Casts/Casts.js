import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Casts.css';

const Casts = () => {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        fetch("./castData.json")
            .then(res => res.json())
            .then(data => setCasts(data));
    }, []);

    return (
        <div className="casts-details">
            {
                casts.map(person => <Person key={person.key} person={person}></Person>)
            }
        </div>
    );
};

export default Casts;