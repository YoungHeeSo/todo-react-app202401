
import React, {useState} from "react";

import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const TodoTemplate = () =>{

    /*
        리액트는 부모 컴포넌트에서 자식 컴포넌트로의 데이터 이동이 반대보다 쉽기 때문에(부모->자식 이 데이터 이동이 쉽다)
        할 일 데이터는 상위 부모 컴포넌트에서 처리하는 것이 좋다
     */


    // 리액트는 상태변수여야만 값이 바뀌는걸 알 수 있다 그러므로 상태변수로 값을 관리해주어야 한다!!
    const [todoList, setTodoList] = useState([
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
    ]);

    // 부모가 자식에서 데이터를 주는 것: 상향식 전달
    // 데이터 상향식 전달을 위해 부모가 자식에서 함수를 하나 전달
    const addTodo = (todoText) => {
        // console.log('할 일 등록 함수를 todotemplate에서 실행!!')
        console.log('todoText: ', todoText);

        const makeNewId = () =>{
            /*if(todoList.length === 0 ) return 1;
            return todoList[todoList.length-1].id+1;*/
            return todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;

        }

        const newTodo = {
            id: makeNewId(),
            title: todoText,
            done: false
        };

        // todoList.push(newTodo);
        /*
            상태 변수의 변경은 오로지 setter를 통해서만 가능
            상태값이 변경감지가 되면 리액트는 렌더링을 다시 시작합니다
            다만 상태변수가 const 형태로 불변성을 띄기 때문에
            기존의 상태값을 바꾸는 것은 불가능!
            새로운 상태로 만들어서 바꿔야 합니다

         */
        /*
        const copyTodoList = todoList.slice();
        copyTodoList.push(newTodo);
        setTodoList(copyTodoList);
        => 한 줄 정리
        */
        setTodoList([...todoList, newTodo]);

        console.log(todoList);
    }

    

    return(
        <div className='TodoTemplate'>
            <TodoHeader />
            <TodoMain todoList={todoList}/>
            <TodoInput onAdd={addTodo}/> {/* 함수 형태로 보내지 말것 ex) addTodo() */}
        </div>
    );
};

export default TodoTemplate;
