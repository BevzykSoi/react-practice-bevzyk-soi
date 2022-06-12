import { useState, useRef } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import logo from "./images/react-logo.png";

function App() {
    let value = 0;

    let [inputValArray, setInputValArray] = useState([]);
    let inputRef = useRef();

    function handleInput() {
        const inputValue = inputRef.current.value;

        setInputValArray(array => {
            if (inputValue === '') return;

            inputRef.current.value = "";

            return [...array, inputValue];
        });
    }

    return (
        <div className={styles.App}>
            <Sidebar></Sidebar>
            <Header></Header>
            <h2 className={styles.desc}>IT IS MY REACT PRACTICE!!!</h2>
            <img src={logo} alt="React logo" className={styles.logo} />
            {value <= 1 ? <div className={styles.black}></div> : <div className={styles.red}></div>}
            <input type="text" ref={inputRef} className={styles.inputDef}/>
            <button type="button" onClick={handleInput}>Handle Input</button>
            {inputValArray.map(item => {
                return(
                    <p key={value += 1}><b>{item}</b></p>
                );
            })}
            <Footer></Footer>
        </div>
    );
};

export default App;

// import React, { Component } from 'react';
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
// import styles from "./App.module.css";
// import logo from "./images/react-logo.png";

// class App extends Component {
//     state = {
//         inputValue: [],
//     };

//     inputChange = (event) => {
//         this.setState(prevState => ({
//             inputValue: [...prevState.inputValue, event.target.value],
//         }));
        

//     }

//     render() {
//         let value = 2;

//         return (
//             <div className={styles.App}>
//                 <Sidebar></Sidebar>
//                 <Header></Header>
//                 <h2 className={styles.desc}>IT IS MY REACT PRACTICE!!!</h2>
//                 <img src={logo} alt="React logo" className={styles.logo} />
//                 {value <= 1 ? <div className={styles.black}></div> : <div className={styles.red}></div>}
//                 <input type="text" onChange={this.inputChange} className={styles.inputDef} />
//                 <div>
//                     {this.state.inputValue.map(value => {
//                         return(
//                             <p><b>{value}</b></p>
//                         );
//                     })}
//                 </div>
//                 <Footer></Footer>
//             </div>
//         );
//     }
// }

// export default App;