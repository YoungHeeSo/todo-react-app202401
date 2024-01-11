
import React from "react";

import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const TodoTemplate = () =>{

    /*
        리액트는 부모 컴포넌트에서 자식 컴포넌트로의 데이터 이동이 반대보다 쉽기 때문에(부모->자식 이 데이터 이동이 쉽다)
        할 일 데이터는 상위 부모 컴포넌트에서 처리하는 것이 좋다
     */

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
    ]

    // 부모가 자식에서 데이터를 주는 것 상향식 전달
    // 데이터 상향식 전달을 위해 부모가 자식에서 함수를 하나 전달
    const addTodo = (todoText) => {
        // console.log('할 일 등록 함수를 todotemplate에서 실행!!')
        console.log(todoText)
    }

    return(
        <div className='TodoTemplate'>
            <TodoHeader />
            <TodoMain todoList={todoList}/>
            <TodoInput onAdd={addTodo}/>
        </div>
    );
};

export default TodoTemplate;
