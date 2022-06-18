import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import logo from "./images/react-logo.png";

function App() {
    let value = 0;

    let [inputValArray, setInputValArray] = useState([]);
    let [todos, setTodos] = useState([]);
    let inputTodoRef = useRef();
    let inputRef = useRef();

    function handleInput() {
        const inputValue = inputRef.current.value;

        setInputValArray(array => {
            if (inputValue === '') return;

            inputRef.current.value = "";

            return [...array, inputValue];
        });
    }

    function handleTodo() {
        const inputValueTodo = inputTodoRef.current.value;

        setTodos(valueTodo => {
            if (valueTodo === '') return;

            inputTodoRef.current.value = "";

            localStorage.setItem("todos", JSON.stringify([...todos, inputValueTodo]));

            return [...valueTodo, inputValueTodo];
        })
    }

    todos = JSON.parse(localStorage.getItem("todos"));

    return (
        <div className={styles.App}>
            <Sidebar></Sidebar>
            <Header></Header>
            <h2 className={styles.desc}>IT IS MY REACT PRACTICE!!!</h2>
            <img src={logo} alt="React logo" className={styles.logo} />
            {value <= 1 ? <div className={styles.black}></div> : <div className={styles.red}></div>}
            <input type="text" ref={inputRef} className={styles.inputDef} />
            <button type="button" onClick={handleInput}>Handle Input</button>
            {inputValArray.map(item => {
                return (
                    <p key={value += 1}><b>{item}</b></p>
                );
            })}
            <h2 className={styles.todosTitle}><b>TODOS:</b></h2>
            <input type="text" className={styles.inputDef} ref={inputTodoRef} />
            <button type="button" onClick={handleTodo}>Add todo</button>
            <ul className={styles.todoList}>
                {todos !== [] && todos !== null && todos.map(todo => {
                    return (
                        <li className={styles.todo} key={nanoid()}>
                            <h4>{todo}</h4>
                        </li>
                    );
                })}
            </ul>
            <Footer></Footer>
        </div>
    );
};

export default App;