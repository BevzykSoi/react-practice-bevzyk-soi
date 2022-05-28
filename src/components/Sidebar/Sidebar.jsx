import React, { Component } from 'react';
import styles from "./Sidebar.module.css";
import logo from "../../images/react-logo.png";

class Sidebar extends Component {
    state = {
        sidebarOpened: false,
    };

    handleOpenSidebar = () => {
        this.setState((prevState) => ({ sidebarOpened: !prevState.sidebarOpened }));
    }

    render() {
        return (
            <>
                <button type='button' className={styles.openSidebarButton} onClick={this.handleOpenSidebar}>Click, to open sidebar</button>

                {this.state.sidebarOpened && 
                    <div className={styles.sidebar}>
                        <h2>IT'S MY SIDEBAR!</h2>
                        <button type='button' onClick={this.handleOpenSidebar} className={styles.closeSidebarButton}>Close sidebar</button>
                        <img src={logo} alt="React logo" className={styles.logo} />
                        <h4 className={styles.copyright}>© Copyright is reserved by Bevzyk SOI since 2022 ©</h4>
                        <h4 className={styles.copyright}>© Violation is punishable by hackers ©</h4>
                    </div>
                }
            </>
        );
    }
}

export default Sidebar;