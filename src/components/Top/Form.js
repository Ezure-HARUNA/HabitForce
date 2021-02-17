import React, { useContext, useState } from 'react'
import { 
    Container, TextField, Button, Dialog,
    DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core'
import ContributionGraph from './ContributionGraph'
import { TodoContext } from '../Context'
import { useCreateTodo } from '../../helpers/useCreateTodo'
import firebase from 'firebase'; 
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';

const StyledContainer =styled(Container)`
display: flex!important;
width: 80%!important;
`

const StyledButton = styled(Button)`
  margin-left: 12px!important;
  margin-top: 25px!important;
  height: 40px !important;
  background-color: #44a340!important;
  color: white !important;
`

const Form = () => {
    const todoContext = useContext(TodoContext);

    const [createTodo, loading] = useCreateTodo()
    const [todo, setTodo] = useState('')

    const handleClick = () => {
      createTodo({ todo: todo })
      setTodo('')
    }

    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        setOpen(true);

    };

    //Dialogの分岐

    const [open, setOpen] = React.useState(false);

    const handleClickAddHabit = () => {
        setOpen(false);
        createTodo({ todo: todo })
        setTodo('')

    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledContainer>
            <TextField 
              disabled={loading}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              label="タイトル(必須)"
              type="text"
              name="title"
              fullWidth
              margin="normal"
              inputRef={register({
                required: "入力してください！",
                maxWidth: 20
              })}
              error={Boolean(errors.title)}
              helperText={errors.title && errors.title.message}
            />
            <StyledButton variant="contained" type="submit">
              追加
            </StyledButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"習慣を追加しますか？"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  追加することで、毎日の積み上げを可視化することができます。
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  いいえ
                </Button>
                <Button onClick={handleClickAddHabit} color="primary" autoFocus>
                  はい
                </Button>
              </DialogActions>
            </Dialog>
          </StyledContainer>
        </form>
    )
}

export default Form
