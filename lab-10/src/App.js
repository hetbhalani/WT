import logo from './logo.svg';
import './App.css';
import Greating from './Greeting';

function App() {
  return (
  <>
    <Greating isLogedin={true} user=' Het'/>
    <Car name='mann'/>
  </>
  );
}

function Car(props){
  if(props.name == 'bmw'){
    return <h1>wroommmm wrooommmmmmmmmmmmm</h1>
  }
  else{
    return <h1>woo</h1>
  }
}

export default App;
