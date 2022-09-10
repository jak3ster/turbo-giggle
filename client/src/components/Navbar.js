import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import healthcare from "../assets/healthcare.png";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 600) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (screenWidth < 600) {
            setOpen(false);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <img src={healthcare} alt="main" />
                    <span>Medical Portal</span>
                </div>
                <div className="list-wrapper">
                    <i
                        className="fas fa-bars"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick={() => { setOpen(open); }}
                    >
                    </i>
                    <i
                        className="fas fa-times"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick={() => { setOpen(!open); }}
                    >
                    </i>

                    <ul style={{ left: open ? "0" : "-100vw" }}>
                        <li>
                            <Link
                                to="/"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/" && "#afbdc9" }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/about" && "#afbdc9" }}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/contact" && "#afbdc9" }}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/doctors-login"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/doctors-login" && "#afbdc9" }}
                            >
                                Doctors
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;