
import React from "react";
import { MdAdd,MdDelete,MdDone } from "react-icons/md";

import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const TodoTemplate = () =>{
    return(
        <div className='TodoTemplate'>
            <TodoHeader />

            <TodoMain />

            <TodoInput />
        </div>
    );
};

export default TodoTemplate;
