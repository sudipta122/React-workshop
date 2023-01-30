import React from 'react'
import "../style/assignment1.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Book({ img, title, author, caption, rating, edition, dollar, available }) {
    let showAlert = () => {
        alert(`This is ${title} and price is ${dollar}`)
    }
    return (

        <>

            <div className="card" onClick={showAlert}>
                <div className="image">

                    <img src={img} alt="" srcset="" />
                </div>
                <div className="description">
                    <div className="firstPart">
                        <div className="title">
                            <h2>{title}</h2>
                        </div>
                        <div className='author'>
                            <h3>{author}</h3>
                        </div>
                        <div className="rating">

                            {rating}
                        </div>
                    </div>

                    <div className="thirdPart" >
                        <div className="available">
                            {available}
                        </div>
                        <CurrencyRupeeIcon className="rs" />{dollar}
                    </div>


                </div>


            </div>


        </>
    )
}

export default Book