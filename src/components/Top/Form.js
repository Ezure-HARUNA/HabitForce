import React, { useContext, useState } from 'react'
import { 
    Container, TextField, Button 
} from '@material-ui/core'
import ContributionGraph from './ContributionGraph'
import { TodoContext } from '../Context'
import { useCreateTodo } from '../../helpers/useCreateTodo'
import firebase from 'firebase'; 
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
//+++++

const StyledContainer =styled(Container)`
display: flex!important;
`

const Form = () => {
//   const { register, errors } = useForm();
    const todoContext = useContext(TodoContext);

    const [createTodo, loading] = useCreateTodo()
    const [todo, setTodo] = useState('')

    const handleClick = () => {
      createTodo({ todo: todo })
      setTodo('')

    }

    //+++++++++++++++++++
    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <StyledContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
                  disabled={loading}
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  label="habit"
                  type="text"
                  name="title"
                  fullWidth
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={errors.title && "タイトルは20文字以内で入力してください。"}
                  />
    

            <Button
                onClick={handleClick} type="submit"
            >追加</Button>
            </form>
            </StyledContainer>

        </div>
    )
}

export default Form
