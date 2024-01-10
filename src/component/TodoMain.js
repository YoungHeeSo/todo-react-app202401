import React from 'react';

import './scss/TodoMain.scss'
import TodoItem from "./TodoItem";

const TodoMain = () => {

    const todoList = [
        {
            id: 1,
            title: '장보기',
            done: false
        },
        {
            id: 2,
            title: '점심먹기',
            done: true
        },
        {
            id: 3,
            title: '간식먹기',
            done: true
        },
        {
            id: 4,
            title: '운동하기',
            done: false
        },
    ]

    /*const todoList = [
        {
            id: 1,
            title: '장보기',
            done: false
        },
        {
            id: 2,
            title: '점심먹기',
            done: true
        },
        {
            id: 3,
            title: '간식먹기',
            done: true
        },
        {
            id: 4,
            title: '운동하기',
            done: false
        },
    ]*/

    return (
        <ul className='todo-list'>
            {
                todoList.map(todo => <TodoItem key={todo.id} item={todo} />)
            }
        </ul>
    );
};

export default TodoMain;