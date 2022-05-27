import React, { Component } from 'react';
import styles from "./Footer.module.css";

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <h4 className={styles.footerHeader}>© Copyright is reserved by Bevzyk SOI since 2022 © Violation is punishable by hackers ©</h4>
            </div>
        );
    }
}

export default Footer;