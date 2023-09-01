import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieAddPage from './MovieAddPage';

function Navbar() {
    return (

        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand" style={{ marginLeft: '5%' }}>Navbar</a>
            <Link style={{ marginLeft: '5%', textDecoration: 'none' }} className='my-link' to="/">All Movies</Link>
            <Link style={{ marginLeft: '5%', textDecoration: 'none' }} className='my-link' to="/addmovie">Add Movie</Link>
            <form className="form-inline ml-auto" style={{ marginRight: '5%' }}>
                <div className="input-group">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
            </form>

        </nav>


    );
}

export default Navbar;