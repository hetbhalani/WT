function Greating(props){
    if(props.isLogedin){
        return <h1>Welcome{props.user}</h1>
    }
    else{
        return <h1>plese Login</h1>
    }
}

export default Greating;