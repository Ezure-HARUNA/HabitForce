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
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

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

    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        createTodo({ todo: todo })
        setTodo('')
    };


    //++++++++++++++++++++++++++++++++++++++++++++++++
//     const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     createTodo({ todo: todo })
//       setTodo('')
//   };

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
                //   inputRef={register({ required: true, maxLength: 20 })}
                inputRef={register({
                    required: "入力してください！",
                    maxWidth: 20
                  })}
                  error={Boolean(errors.title)}
                //   helperText={errors.title && "タイトルは20文字以内にして下さい。"}
                  helperText={errors.title && errors.title.message}
                  />
            <Button
                // onClick={handleClick}
                 type="submit"
            >追加</Button>
            {/* <button type="button" onClick={handleOpen}>
                追加
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                    <SimpleModal />
                </div>
            </Modal> */}
            </StyledContainer>

        </form>
    )
}

export default Form
