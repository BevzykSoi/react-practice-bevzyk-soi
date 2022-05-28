import { Component } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import logo from"./images/react-logo.png";

export default class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <Sidebar></Sidebar>
                <Header></Header>
                <h2 className={styles.desc}>IT IS MY REACT PRACTICE!!!</h2>
                <img src={logo} alt="React logo" className={styles.logo}/>
                <Footer></Footer>
            </div>
        );
    }
}