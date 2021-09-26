import React from 'react';
import "./Person.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Person = ({ person }) => {
    const { name, role, age, salary, lastMovie, imgURL } = person;
    console.log(name);
    console.log(role, age, salary);


    return (
        <div className="person-details">
            <div className="d-flex justify-content-center img-container">
                <div className="person-img-div-1">
                    <div className="person-img-div-2">
                        <img src={imgURL} alt="" />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center details py-5">
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>: {name}</td>
                            </tr>
                            <tr>
                                <td>Role</td>
                                <td>: {role}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>: {age} Years</td>
                            </tr>
                            <tr>
                                <td>Last Movie</td>
                                <td>: {lastMovie}</td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td>: ${salary}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn-div d-flex justify-content-center pt-4">
                        <button className="add-to-cast-btn"><FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} /> Add to Cast</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;