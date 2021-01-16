import React, { useContext } from 'react';
import styled from 'styled-components'
import { TodoContext } from '../App';
import Card from './Card'

// todoListという変数とdeleteTodoという関数をpropsとして受け取る
const Todo = ({type}) => {
    const todoContext = useContext(TodoContext)
    return (
        <div>
            {/*受け取ったtodoListを使って表示する*/}
            {todoContext.todoList.map((todo, idx) => (
            <Container>
                <Card key={todo.id} todo={todo} />
                <button onClick={() => todoContext.deleteTodo(idx)}>削除</button>
                <button onClick={() => todoContext.changeTodoStatus(idx)}>{type === "todo" ? "完了済みにする" : "戻す"}</button>
            </Container>
            ))}
            
        </div>
    )
  
}

export default Todo;

const Container = styled.div`
  color: #5c5c5c;
  letter-spacing: 1.8px;
`;