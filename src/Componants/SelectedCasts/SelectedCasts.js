import React, { useEffect, useState } from 'react';
import SelectedStar from '../SelectedStar/SelectedStar';
import "./SelectedCasts.css";

const SelectedCasts = ({ selectedCast, setSelectedCast }) => {
    // castInfo is for information of keys from selectedCast
    const [castsInfo, setCastsInfo] = useState([]);
    const [totalSalary, setTotalSalary] = useState(0);

    const crossClickHandler = removeKey => {
        const newSelectedCast = selectedCast.filter(key => key !== removeKey);
        // getting all the keys without the given one
        localStorage.removeItem(removeKey);
        // removing the key from local storage
        setSelectedCast(newSelectedCast);
        // setting new selectedCast
    };

    // this useEffect will be called when selectedCast get changed
    useEffect(() => {
        fetch("./castData.json")
            .then(res => res.json())
            .then(data => {
                const newCastInfo = selectedCast.map(key => {
                    // finding info of current key
                    const personExist = data.find(person => person.key === key);
                    if (personExist) {
                        return personExist;
                        // returning info of current key
                    }
                    return undefined;
                    // this return is for the warning showing in arrow sign
                });

                // getting total using reduce function
                const newTotalSalary = newCastInfo.reduce((total, person) => {
                    return total + person.salary;
                }, 0);

                setCastsInfo(newCastInfo);
                setTotalSalary(newTotalSalary);
            })
    }, [selectedCast]);

    return (
        <div className="right-side">
            <h3 className="selected-casts">Selected Casts : {selectedCast.length}</h3>
            <h4 className="text-center pb-4">Total Salary : ${totalSalary || "0.00"}</h4>
            <div className="w-100">
                {
                    castsInfo.map(person => <SelectedStar person={person} crossClickHandler={crossClickHandler}></SelectedStar>)
                }

            </div>

            <div className="d-flex justify-content-center pt-3">
                <button className={`done-btn ${selectedCast.length ? "" : "disabled"}`}>
                    Selection Done
                </button>
            </div>
        </div>
    );
};

export default SelectedCasts;