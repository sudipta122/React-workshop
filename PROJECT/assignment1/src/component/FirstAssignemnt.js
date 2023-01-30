import React from 'react'
import Book from './Book'
import "../style/assignment1.css"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
function Assignment1() {
    return (
        <>
            <div className="allcard">
                <Book img="https://m.media-amazon.com/images/I/81TeXefBnGL._AC_UY327_FMwebp_QL65_.jpg"
                    title="The Gita"
                    author="by Anant Pai "
                    rating=<div> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />4.6(1,241)</div>

                    dollar="399 0r $32.76 "
                />
                <Book img="https://m.media-amazon.com/images/I/51KG1LCYAtL._AC_UY327_FMwebp_QL65_.jpg"
                    title="The Perfect Murder"
                    author="byThe Perfect Murder "
                    rating=<div> <StarIcon />  <StarIcon /> <StarHalfIcon />4.6(1,241)</div>

                    dollar="399 0r $32.76 "
                />
                <Book img="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg"
                    title="The Psychology of Money"
                    author="by  Morgan Housel  "
                    rating=<div> <StarIcon /><StarIcon /> <StarIcon /> <StarIcon /> 4(1,200)</div>

                    dollar="399 0r $32.76 "
                />
                <Book img="https://m.media-amazon.com/images/I/41-9uob-C5L._AC_UY327_FMwebp_QL65_.jpg"
                    title="The Story of Amazon"
                    author="by Sara Gilbart "
                    rating=<div> <StarIcon /><StarIcon /> <StarHalfIcon />4.6(1,241)</div>

                    dollar="399 0r $32.76 "
                />
                <Book img="https://m.media-amazon.com/images/I/516tqV9XVYL._AC_UY327_FMwebp_QL65_.jpg"
                    title="B.R.Ambedkar"
                    author="by Sudipta "
                    rating=<div> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />4.6(1,241)</div>

                    dollar="399 0r $32.76 "
                />
                <Book img="https://m.media-amazon.com/images/I/71W0dfxx-4L._AC_UY327_QL65_.jpg"
                    title="Think and Grow Rich"
                    author="by Napoleon Hill  "
                    rating=<div> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />4.6(1,241)</div>

                    dollar="399 0r $32.76 "
                />





            </div>


        </>
    )
}

export default Assignment1