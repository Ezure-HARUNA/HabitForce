import React, { useContext } from 'react';
import styled from 'styled-components'
import { TodoContext } from '../App';
import Card from './Card'
import { firestore } from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore'

// todoListという変数とdeleteTodoという関数をpropsとして受け取る
const Todo = ({type}) => {
    const todoContext = useContext(TodoContext)

    const query = firestore().collection('todoList').orderBy('updatedAt', 'desc')
    const [todoList = [], loading] = useCollectionData(query, { docId: 'id' })
    return (
        <div>
            {/*受け取ったtodoListを使って表示する*/}
            {todoContext.todoList.map((todo, id) => (
            <Container>
                <Card key={todo.id} todo={todo} />
                <button onClick={() => todoContext.deleteTodo(id)}>削除</button>
                <button onClick={() => todoContext.changeTodoStatus(id)}>{type === "todo" ? "完了済みにする" : "戻す"}</button>
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