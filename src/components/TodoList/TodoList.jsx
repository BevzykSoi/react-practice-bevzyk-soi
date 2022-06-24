import React, { Component } from 'react';
import styles from "./TodoList.module.css";
import Todo from '../Todo/Todo';
import { nanoid } from 'nanoid';

class TodoList extends Component { 
    render() { 
        return (
            <ul className={styles.todoList}>
                {this.props.todos !== [] && this.props.todos !== null && this.props.todos.map(todo => {
                    return (
                        <Todo todoTitle={todo} key={nanoid()}></Todo>
                    );
                })}
            </ul>
        );
    }
}
 
export default TodoList;