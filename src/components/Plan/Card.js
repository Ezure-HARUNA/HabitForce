import React, { useState, useReducer, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';

// import AppContext from '../../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../../actions/actions'
import reducer from '../../reducers/nextToWeek'
import { TodoContext } from '../App';
import { useForm } from "react-hook-form";
import { SentimentSatisfiedAlt } from '@material-ui/icons';
//firestore
import { useCreateWant } from '../../helpers/useCreateWant'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

const StyledLink = styled(Link)`
text-decoration: none!important;
`
const StyledButton =styled(Button)`
  margin-left: 2.1%;
  /* background-color:  #fe6b8b!important; */
  background-color: #ff8e53!important;
  font-weight: bold;
  height: 50px!important;
  border-radius: 25px!important;
`

const FirstTypography = styled(Typography)`
  margin-top: 12px!important;
`

const StyledTypography = styled(Typography)`
  margin-top: 0px;
`
const StyledTextField=styled(TextField)`
  width: 80%;
`

// const StylesTextField=styled(TextField)`
//   width: 40%;
// `


const Detail = (props) => {
  
  const classes = useStyles();
  // const [createWant, loading] = useCreateWant()
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  const todoContext = useContext(TodoContext)

  const handleClick = () => {
    // createWant({text, description, purpose, category, rewards})
  }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <FirstTypography component="h1" variant="h6" color="inherit" noWrap >
              ゴール
            </FirstTypography>
            <TextField 
              // value={text}
              name="todo"  
              label="やること" 
              ref={register({required: true, maxLength: 50})} 
              type="text"
              fullWidth
              margin="normal"
              inputRef={register({ required: true, maxLength: 20 })}
              error={Boolean(errors.todo)}
              helperText={errors.todo && "やることは20文字以内にして下さい。"}
            />
              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                詳細
              </StyledTypography>

              <TextField 
                // value={description}
                name="todo"  
                label="description" 
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              /> */}

              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                目的
              </StyledTypography>
              <TextField 
                // value={purpose}
                name="todo"  
                label="purpose" 
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              /> */}
              
              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                ご褒美
              </StyledTypography>
              <TextField 
                // value={rewards}
                name="todo"  
                label="rewards" 
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              /> */}

              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                カテゴリー
              </StyledTypography>
              <TextField 
                // value={category}
                name="todo"  
                label="category" 
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              /> */}
              <Link className="link" to='/top'>
               <Button
                  onClick={handleClick}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<ForwardOutlinedIcon />}
                >
                  目標・やること追加★
                </Button>
              </Link>

              
          </Container>
          </form>
          {/* </Paper> */}
        </div>
    )
}

export default Detail