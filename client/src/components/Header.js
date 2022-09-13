import React from "react";
import healthcare from "../assets/healthcare.png";

const styles = {
    container: {},
    header: {
        backgroundColor: "#4169e1",
        overflow: "hidden",
        padding: "10px 5px",
        display: "block",
    },
    logo: {
        float: "left",
        color: "#ffffff",
        padding: "12px",
        textDecoration: "none",
        fontsize: "16px",
    },
    right: {
        float: "right",
        display: "block",
        fontsize: "16px",
        color: "#ffffff",
    },
};

const Header = (props) => {
    return (
        <header class="display-flex justify-space-between align-center p-2">
            <div class="header" style={styles.header}>
                <a href="/" class="logo" style={styles.logo}>
                    <img class="img-header" src={healthcare} alt="Card appointment" />
                    Medical Portal
                </a>
                <div class="header-right" style={styles.right}>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>

                    <a href="/login">Login</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
