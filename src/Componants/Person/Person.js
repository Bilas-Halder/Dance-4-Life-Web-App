import React from 'react';
import "./Person.css";

const Person = ({ person }) => {
    const { name, role, age, salary, lastMovie, imgURL } = person;
    console.log(name);
    console.log(role, age, salary);

    return (
        <div className="person-details">
            <div className="d-flex justify-content-center img-container">
                <div className="person-img-div">
                    <img src={imgURL} alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-center py-3">
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
                            <td>: {age}</td>
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
            </div>
        </div>
    );
};

export default Person;