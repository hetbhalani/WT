import logo from './logo.svg';
import './App.css';
import React from 'react'

// function App() {
//   return (
//     <h1>i am a function from diff file</h1>
//   );
// }

class Car extends React.Component{
  render(){
    return <h1>this is a class from diff file</h1>;
  }
}

// export default App;
export default Car;
