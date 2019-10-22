import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

const nav = () => {
    const style = {
        borderRadius:'0px 0px 2px 2px'
    };    
    return (
            <div className="ui inverted menu" style={style}>
                <div className="ui container ">
                    <NavLink to="/" exact className="active item">Home</NavLink>
                    <NavLink to="/favorite" className="item">Favorite</NavLink>
                    <NavLink to="/newrelease" className="item">newrelease</NavLink>
                    <div className="right menu">
                        <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i aria-hidden="true" className="search icon"></i>
                        </div>
                        </div>
                        <a className="item">Logout</a>
                    </div>
                </div>
                {/* <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/" exact>Logo</NavLink>
                        <a className="navbar-toggler" data-toggle="collapse" data-target="#mynavcoll">
                            <span className="navbar-toggler-icon"></span>
                        </a>
                        <div className="navbar-collapse collapse" id="mynavcoll">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-3" to="/" exact>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-3" to="/newrelease">
                                        NewRelease
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-3" to="/favorite">
                                        Favorite
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </div>
        )
}

export default nav;