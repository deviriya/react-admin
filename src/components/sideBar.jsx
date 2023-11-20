import React from "react";
import { Link, useLocation } from "react-router-dom";
import './style.scss';
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";


export const Sidebar = () => {

    const { pathname } = useLocation();

    return (
        <div className="sidebar">
            <div className="logo">
                <h3>Logo</h3>
            </div>
            <ul className='side-item'>
                <li className={`side-link ${pathname == "/dashboard" && "active"}`}>
                    <IoHome /> <Link to='/dashboard' className='m-0'>Dashboard</Link>
                </li>
                <li className={`side-link ${pathname == "/users" && "active"}`}>
                    <FaUserAlt /> <Link to='/users' className='m-0'> Accounts</Link>
                </li>
            </ul>
        </div>
    )
}