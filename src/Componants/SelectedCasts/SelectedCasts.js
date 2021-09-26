import React, { useEffect, useState } from 'react';
import SelectedStar from '../SelectedStar/SelectedStar';
import "./SelectedCasts.css";

const SelectedCasts = ({ selectedCast, setSelectedCast }) => {
    const [castsInfo, setCastsInfo] = useState([]);
    const [totalSalary, setTotalSalary] = useState(0);

    const crossClickHandler = removeKey => {
        console.log(selectedCast);
        const newSelectedCast = selectedCast.filter(key => key !== removeKey);

        localStorage.removeItem(removeKey);
        setSelectedCast(newSelectedCast);
    };

    useEffect(() => {
        fetch("./castData.json")
            .then(res => res.json())
            .then(data => {
                const newCastInfo = selectedCast.map(key => {
                    const personExist = data.find(person => person.key === key);
                    if (personExist) {
                        return personExist;
                    }
                });

                const newTotalSalary = newCastInfo.reduce((total, person) => {
                    return total + person.salary;
                }, 0);

                setCastsInfo(newCastInfo);
                setTotalSalary(newTotalSalary);
            })
    }, [selectedCast]);

    return (
        <div className="right-side">
            <h3 className="selected-casts">Selected Casts</h3>
            <h4 className="text-center pb-4">Total Salary : ${totalSalary || "0.00"}</h4>
            <div className="w-100">
                {
                    castsInfo.map(person => <SelectedStar person={person} crossClickHandler={crossClickHandler}></SelectedStar>)
                }

            </div>
        </div>
    );
};

export default SelectedCasts;