import { useState } from 'react';
import "../style/assignment3.css"

function Assignement3() {
    const [bodyColor, setBodyColor] = useState(true);
    function handleClick() {
        bodyColor === "#ffff" ? setBodyColor("#000") : setBodyColor("#ffff");

    }


    return (
        <div className='div' style={{ backgroundColor: bodyColor }}>
            <button onClick={handleClick}>Change Color</button>
        </div>
    );
}
export default Assignement3;