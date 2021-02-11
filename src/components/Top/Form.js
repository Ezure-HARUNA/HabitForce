import React, { useContext, useState } from 'react'
import { 
    Container, TextField, Button 
} from '@material-ui/core'
import ContributionGraph from './ContributionGraph'
import { TodoContext } from '../Context'
import { useCreateTodo } from '../../helpers/useCreateTodo'
import firebase from 'firebase'; 
import styled from 'styled-components'

const StyledContainer =styled(Container)`
display: flex!important;
`

const Form = () => {
    const todoContext = useContext(TodoContext);

    const [createTodo, loading] = useCreateTodo()
    const [todo, setTodo] = useState('')

    const handleClick = () => {
      createTodo({ todo: todo })
      setTodo('')

    }
    return (
        <div>
            <StyledContainer>
            <TextField 
                  disabled={loading}
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  name="todo"  
                  label="todo" 
                //   ref={register({required: true, maxLength: 50})} 
                  type="text"
                  fullWidth
                  margin="normal"
                //   inputRef={register({ required: true, maxLength: 20 })}
                //   error={Boolean(errors.todo)}
                //   helperText={errors.todo && "カテゴリーは20文字以内にして下さい。"}
                  />
            <Button
                onClick={handleClick}
            >追加</Button>
            </StyledContainer>

        </div>
    )
}

export default Form
