

import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} InvestEd. All Rights Reserved.</p>
            <p>
                Follow us: 
                <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">
                    Twitter
                </a> | 
                <a href="https://facebook.com" style={styles.link} target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: "#4CAF50",
        padding: "1rem",
        color: "#fff",
        textAlign: "center",
        marginTop: "2rem",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        margin: "0 0.5rem",
    },
};

export default Footer;
