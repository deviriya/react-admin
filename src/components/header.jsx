import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

export const Header = () => {

    return (
        <nav className="header">
            <div className="container-fluid">

                <div className="d-flex justify-content-end">
                    <button type="button" className="cstmBtn position-relative">
                        <IoIosNotificationsOutline />
                        <span className="position-absolute top-10 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                        </span>
                    </button>
                    <div className="nav-item">
                        <ul>
                            <li className="nav-link">
                                <div className="dropdown">
                                    <button className="cstmBtn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin <FaUserAlt />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}