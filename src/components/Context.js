import React, {createContext, useState} from 'react'

export const TodoContext = createContext();

const Context = ({children}) => {
    const [calendarCount, setCalendarCount] = useState(0);
    const [inputTodo, setInputTodo] = useState('');
    return (
        <TodoContext.Provider 
            value=
                {
                    calendarCount, setCalendarCount,
                    inputTodo, setInputTodo
                }
        >
            {children}
        </TodoContext.Provider>
    )
}

export default Context
