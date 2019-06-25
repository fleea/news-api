import React from "react";
import './main-nav.scss';
import { NavLink } from 'react-router-dom'

const MainNav = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink exact={true} activeClassName='active' to='/'>
                        <i className="fa fa-home" aria-hidden="true"></i>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/entertainment'>
                        <i className="fa fa-television" aria-hidden="true"></i>Entertainment
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/business">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>Business
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/general">
                        <i className="fas fa-globe-americas" aria-hidden="true"></i>General
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/science">
                        <i className="fa fa-flask" aria-hidden="true"></i>Science
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/sport">
                        <i className="fas fa-tennis-ball"></i>Sport
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/technology">
                        <i className="fa fa-laptop" aria-hidden="true"></i>Technology
                    </NavLink>
                </li>
            </ul>
        </div>
    )
};

export default MainNav;