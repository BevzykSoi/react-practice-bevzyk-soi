import { useState, useRef } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import logo from "./images/react-logo.png";

function App() {
    let value = 2;

    let [inputValArray, setInputValArray] = useState([]);
    const inputRef = useRef();

    function handleInput() {
        setInputValArray(array => {
            inputValArray = [...array, 1];
            console.log(inputValArray);
        });
    }

    return (
        <div className={styles.App}>
            <Sidebar></Sidebar>
            <Header></Header>
            <h2 className={styles.desc}>IT IS MY REACT PRACTICE!!!</h2>
            <img src={logo} alt="React logo" className={styles.logo} />
            {value <= 1 ? <div className={styles.black}></div> : <div className={styles.red}></div>}
            <input type="text" ref={inputRef} />
            <button type="button" onClick={handleInput}>Handle Input</button>
            <Footer></Footer>
        </div>
    );
};

export default App;