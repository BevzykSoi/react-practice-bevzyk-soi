import React, { Component } from 'react';
import styles from "./Todo.module.css";

class Todo extends Component {
    render() {
        return (
            <li className={styles.todo}>
                <h4>{this.props.todoTitle}</h4> 
            </li>
        );
    }
}

export default Todo;