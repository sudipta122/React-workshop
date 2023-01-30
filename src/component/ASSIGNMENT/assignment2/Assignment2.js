import { logDOM } from '@testing-library/react';
import React, { useState } from 'react'
import "../style/assignment2.css"
function Assignment2() {
    let [index, setindex] = useState(0);
    let toggel = (number) => {
        // console.log(number);
        setindex(number)
    }
    return (
        <>
            <h1 className='exp'>
                Experiece
            </h1>
            <div className="box">
                <div className="sidePart">
                    <span onClick={() => toggel(0)}>sudipta</span>
                    <span onClick={() => toggel(1)}>kira</span>
                    <span onClick={() => toggel(2)}>Raj</span>
                </div>
                <div className="section">


                    <div className="Card">
                        <div className={index === 0 ? "active-class" : "fristPerson"}>
                            <div className="designation">
                                <h3>MERN Developer</h3>
                            </div>
                            <div className="name">
                                <button>
                                    Sudipta
                                </button>
                            </div>
                            <div className="date">
                                feb 2023
                            </div>
                            <div className="list">
                                <ul>
                                    <li>I have 2 years of experience on front-end development</li>
                                    <li>Bca Graduate</li>
                                </ul>
                            </div>
                        </div>
                        <div className={index === 1 ? "active-class" : "secondPerson"}>
                            <div className="designation">
                                <h3>UI Developer</h3>
                            </div>
                            <div className="name">
                                <button>

                                    kira
                                </button>

                            </div>
                            <div className="date">
                                feb 2023
                            </div>
                            <div className="list">
                                <ul>
                                    <li>I have 2 years of experience on UI development</li>
                                    <li>B.tech Graduate</li>
                                </ul>
                            </div>
                        </div>
                        <div className={index === 2 ? "active-class" : "thirdPerson"}>
                            <div className="designation">
                                <h3>Ux Developer</h3>
                            </div>
                            <div className="name">
                                <button>
                                    Raj
                                </button>
                            </div>
                            <div className="date">
                                feb 2023
                            </div>
                            <div className="list">
                                <ul>
                                    <li>I have 2 years of experience on Ux development</li>
                                    <li>Bca Graduate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Assignment2