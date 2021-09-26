import React from 'react';
import SelectedStar from '../SelectedStar/SelectedStar';
import "./SelectedCasts.css";

const SelectedCasts = () => {
    return (
        <div className="right-side">
            <h3 className="selected-casts">Selected Casts</h3>
            <h4 className="text-center pb-4">Total Salary : $15000000</h4>
            <div className="w-100">
                <SelectedStar></SelectedStar>
            </div>
        </div>
    );
};

export default SelectedCasts;