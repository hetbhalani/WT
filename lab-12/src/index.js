import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contect from './Components/Contect'
import Service from './Components/Service'

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contect'>Contect</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/service'>Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <div className='border border-2 border-danger d-flex justify-content-center align-items-center' style={{height: '500px'}}>Sidebar</div>  
        </div>
        <div className='col'>
          <Outlet/>
        <div>
      </div>
    </div>

    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <div className='mt-5 border border-2 border-success d-flex justify-content-center align-items-center' style={{height: '50px'}}>Footer</div>
        </div>
      </div>
    </div>

    </>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <Nav/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/contect' element={<Contect/>} />
    </Routes>
  </BrowserRouter>
);