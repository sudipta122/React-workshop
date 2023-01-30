import React from 'react'
import Home from "./component/home"
import Practice from './component/Practice'
import Hook from './component/Hook'
import Statehook from './component/Statehook'
import Shortcircuitevalution from './component/Shortcircuitevalution'
import Assignment1 from './component/ASSIGNMENT/assignment1/Assignment1'
import Assignment2 from './component/ASSIGNMENT/assignment2/Assignment2'
import Assignement3 from './component/ASSIGNMENT/darkLightmode/Assignement3'
import Carousel from './component/ASSIGNMENT/Carousel/Carousel'
import Accordion from "./component/ASSIGNMENT/accordion/Accordion"

const App = () => {
  // let arr = [1, 2, 3, 4, 5];
  // let obj = [
  //   { "user": "raj" },
  //   { "age": 12 }
  // ]

  // function prop(ar) {
  //   result = arr.map(value => {
  //     return value = value + 1
  //   })
  // }
  // prop(arr);
  // console.log(result);

  return (
    <>

      {/* ASSIGNEMENT */}
      <Assignment1 />
      {/* <Assignment2 /> */}
      {/* <Assignement3 /> */}
      {/* <Carousel /> */}
      {/* <Accordion /> */}




      {/* -------------------------------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------- */}

      {/* <Home number={result} /> */}
      {/* <Home name={result} /> */}
      {/* {
        arr.map(value => {
          console.log(value)
          return <Home array={value} />
        })
      } */}

      {/* {
        { obj.map(value => {
          { console.log(value)  }
          let { user, age } = value
          { return <Practice object={value} />  }

        }) }
      } */}

      {/* <Hook /> */}
      {/* <Statehook /> */}

      {/* <Shortcircuitevalution /> */}





    </>
  )
}

export default App