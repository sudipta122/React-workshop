import React, { useEffect, useState } from 'react'

function Statehook() {
    let arr = [
        { id: 1, name: "raj" },
        { id: 2, name: "jay" },
        { id: 3, name: "vikas" },
        { id: 4, name: "sudipta" },
        { id: 5, name: "rick" }

    ]

    let [people, setPeople] = useState(arr)
    let [count, setCount] = useState(arr.length);

    function removeItem(id) {
        // console.log("id from map", id);
        let newArry = people.filter((person) => {
            // console.log("value from filter", person);
            return person.id !== id;
        });
        console.log("its is a  new array", newArry);
        setPeople(newArry);
        count = count - 1;
        setCount(count)

    }
    function clearAllItem() {
        setPeople([]);
        count = 0;
        setCount(count)
    }

    return (
        <>
            <h2>{`${count} person there`}</h2>

            {people.map((value) => {
                let { name, id } = value;
                return (
                    <div key={id} style={{ display: "flex" }}>
                        <h1>{name}</h1>
                        {/* {console.log("it is id", id)} */}
                        <button onClick={() => removeItem(id)}> delete</button>

                    </div>
                );

            })}
            <button onClick={clearAllItem}> clearall</button>
        </>
    )
}

export default Statehook