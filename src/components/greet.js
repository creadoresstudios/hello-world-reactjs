import React from 'react'

// function Greet(){
//     return <h1>Hello Creadores Studios!</h1>
// }

const Greet = () => <h1>Hello Creadores Studios</h1>
//Exporting the functon
export default Greet

/*
Functional Components
- Functional Components are simple functions receiving props
  and returning a declaration
- You should try to use functional components as much as possible and
  by that if it is possible to create a component with both the
  approaches always go with functional component.
- The advantage of functional components over class components is that
  the absence of 'this' keyword which we will encounter in a class-based
  component.
- You will be forced to think of a solution without having to use state.
- They are mainly responsible for the UI.
- This is also called as Stateless/Dumb/Presentational components.
*/