import React, { useState } from 'react'
import userObj from "./UserData"
import "../style/Carousel.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
function Carousel() {
    // console.log(userObj);
    let [index, setIndex] = useState(0);
    let { name, description } = userObj[index];
    let checkNumber = (i) => {
        if (i > userObj.length - 1) {
            return 0;
        }
        if (i < 0) {
            // console.log("userObj.length - 1=", userObj.length - 1);
            return userObj.length - 1;//0,1,2
        }
        return i;

    }
    let increment = () => {
        setIndex((i) => {
            console.log("it is i", i)
            let newIndex = i + 1;
            console.log(newIndex)
            return checkNumber(newIndex);
        });
    }
    let decrement = () => {

        setIndex(i => {
            console.log("inside dercrement set index", i);
            let newindex = i - 1;
            console.log("this is newindex", newindex)
            console.log("this checknumber function give", checkNumber(newindex))
            return checkNumber(newindex);
        });
    }


    return (
        <>
            <div className="Carousel">
                {/* <div className="img"></div> */}

                {/* { */}

                <div className="middel">
                    <NavigateBeforeIcon className='leftArrow' onClick={decrement} />
                    <h1>{name}</h1>
                    {/* {console.log(value)} */}
                    <NavigateNextIcon className='rightArrow' onClick={increment} />

                </div>
                <div className="footer">
                    {description}
                </div>
            </div>
        </>
    )
}

export default Carousel