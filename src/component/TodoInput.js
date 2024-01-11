import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";
import './scss/TodoInput.scss';
import cn from 'classnames'; // class add/remove 도와주는 라이브러리

const TodoInput = ({ onAdd }) => {
    // useState - 렌더링 상태를 관리 하는 변수 지정 리액트 훅
    const [open, setOpen] = useState(false);

    // 할 일 입력창에 입력한 내용을 저장할 변수
    const [todoText, setTodoText] = useState('');


    // 버튼 클릭 이벤트
    const onToggle = e =>{
        setOpen(!open);
    }

    const todoChangeHandler = e => {
        // console.log(e.target.value)
        setTodoText(e.target.value)
    }

    const submitHandler = e => {
        onAdd(todoText); // 부모에게 주고 싶은 데이터 담기
        e.preventDefault(); // 리액트는 비동기식 이므로 페이지가 새로고침되는 것을 막아주는게 좋을 듯하다

        // 폼이 제출되면 입력창 비우기
        setTodoText(''); // 값 지정뿐 아니라 렌더링까지 해주어야 input을 빈 값으로 만들어준다!!
    }

    return (
        <>
            {open && (<div className='form-wrapper'>
                <form className='insert-form' onSubmit={submitHandler}> {/*submit 버튼을 누르거나 엔터를 누를 때 실행*/}
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        onChange={todoChangeHandler} // input 의 경우 change이벤트가 더 좋다리
                        value={todoText}
                    />
                </form>
            </div>)}

            {/*
                cn() : 첫번째 파라미터는 항상 유지할 클래스, 두번째 파라미터는 논리 상태값
                    => 논리상태값이 true 일경우 해당클래스가 추가
                       false일 경우 제거
            */}
            <button className={cn('insert-btn', {open})} onClick={onToggle}>
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;