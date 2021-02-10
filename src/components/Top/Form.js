import React, { useContext } from 'react'
import { 
    Container, TextField, Button 
} from '@material-ui/core'
import ContributionGraph from './ContributionGraph'
import { TodoContext } from '../Context'
import { useCreateTodo } from '../../helpers/useCreateTodo'

const Form = () => {
    const todoContext = useContext(TodoContext);

    const [createTodo, loading] = useCreateTodo()

    const handleClick = () => {
      createTodo({ todo: todoContext.inputTodo })
      todoContext.setInputTodo('')

    }
    return (
        <div>
            <Container>
            <TextField 
                  disabled={loading}
                  value={todoContext.inputCategories}
                  onChange={(e) => todoContext.setInputCategories(e.target.value)}
                  name="categories"  
                  label="categories" 
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
            >Commit</Button>
            </Container>
            <ContributionGraph/>

        </div>
    )
}

export default Form
