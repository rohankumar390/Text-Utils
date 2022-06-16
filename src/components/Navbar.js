import React from 'react'
// import PropTypes from 'prop-types' 
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (  
    <>
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}` }>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggle('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'} }></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggle('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'} }></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggle('success')}} style={{height:'30px',width:'30px',cursor:'pointer'} }></div>
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
     
    
  <div className={`form-check form-switch text-$ `}>
  <input className="form-check-input" type="checkbox" onClick={()=>{props.toggle(null)}} id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
</div>
  </div>
</nav></>
  )
}
