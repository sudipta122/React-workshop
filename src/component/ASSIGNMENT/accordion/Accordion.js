import React, { useEffect, useState } from 'react'
// import Card from "./Card.js"
import data from "./data.js"
import "./style/Accordion.css"
function Accordion() {
    let [toggel, setToggel] = useState(null);
    let [Question, setQuetion] = useState(data);
    let { id, que, ans } = Question;
    let toggelButton = (i) => {
        console.log("inside togglebutton", i);
        console.log("inside togglebutton toggel value", toggel);
        if (toggel === i) { //null===0

            return setToggel(null)

        }
        setToggel(i);//settoggel(0),toggel=0
    }
    return (
        <>
            <div className="accordion">
                <h2>FAQ</h2>


                <div className="accordion-box" >
                    {
                        Question.map((value, index) => {

                            return (
                                <>
                                    <div key={value.id}>
                                        <h2 >{value.que}</h2>
                                        <span onClick={() => toggelButton(index)}>{toggel === index ? '-' : '+'}</span>
                                    </div>
                                    <div className={toggel === index ? "active-class" : "down"}>
                                        {console.log("index", index)}
                                        {console.log("toggel", toggel)}
                                        {value.ans}
                                    </div>
                                </>

                            )
                        })
                    }


                </div>

                {toggel && <p>{ans}</p>}

            </div>



        </>
    )
}

export default Accordion