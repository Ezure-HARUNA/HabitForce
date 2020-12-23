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
import { MyContext } from '../../components/App';
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

export const TaskContext = createContext();

const Detail = (props) => {
  
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, [])
  const [text, setText] = useState('');
  const [textDescription, setTextDescription] = useState('');
  const [textPurpose, setTextPurpose] = useState('');
  const [textCategory, setTextCategory] = useState();
  const [textRewards, setTextRewards] = useState('');
  const [task, setTask] = useState('');
  const [week, setWeek] = useState([]);
  const [category, setCategory] = useState('');
  const [createWant, loading] = useCreateWant()
  const myContext = useContext(MyContext)
  

  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  const nextToPage1= (e)=>{
    //e.preventDefault()
    // e.target.value
    setTask(task)
    props.setId(props.id)

    dispatch({
      type: 'FOLLOW_TO_TASK_THIS_WEEK',
      task,
      week,
      category
    })
}

const handleChange = (e) => {
  // createWant(text)
  console.log(e.target.value)
  setText({value: e.target.value})
  // myContext.setWantTodo(e.target.value)
} 

const handleChangeDescription = (e) => {
  setTextDescription({value: e.target.value})
  myContext.setDescription(e.target.value)
} 

const handleChangePurpose = (e) => {
  setTextPurpose({value: e.target.value})
  myContext.setPurpose(e.target.value)
} 

const handleChangeRewards = (e) => {
  setTextRewards({value: e.target.value})
  myContext.setRewards(e.target.value)
} 

const handleChangeCategory = (e) => {
  setTextCategory({value: e.target.value})
  myContext.setCategory(e.target.value)
} 

const handleClick = (e) => {
  createWant({text: text.value, description: '詳細'} )
  // myContext.setWantTodo(e.target.value)
}

    return (
      <TaskContext.Provider 
        value={{
          text, setText, 
          task, setTask, 
          textDescription, setTextDescription,
          textCategory, setTextCategory
        }}>
          {/* <Paper> */}
          <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
              <Container className="button-container">
                {/* <StyledButton
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  size="large"
                  startIcon={<CancelOutlinedIcon />}
                >
                  キャンセル
              </StyledButton>
              <StyledButton
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<SaveOutlinedIcon />}
                >
                  保存
              </StyledButton> */}
              </Container>
              <FirstTypography component="h1" variant="h6" color="inherit" noWrap >
                やりたいこと
              </FirstTypography>
              <TextField 
                value={myContext.text}
                name="todo"  
                label="やること" 
                onChange={handleChange}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                詳細
              </StyledTypography>

              <TextField 
                value={myContext.description}

                name="todo"  
                label="description" 
                onChange={handleChangeDescription}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                目的
              </StyledTypography>

              <TextField 
                value={myContext.purpose}

                name="todo"  
                label="purpose" 
                onChange={handleChangePurpose}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                いつやる
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                月　火　水　木　金　土　日
              </StyledTypography>
             
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                ご褒美
              </StyledTypography>
              <TextField 
                value={myContext.rewards}

                name="todo"  
                label="rewards" 
                onChange={handleChangeRewards}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                カテゴリー
              </StyledTypography>


              <TextField 
                value={myContext.textCategory}
                name="todo"  
                label="category" 
                onChange={handleChangeCategory}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />

              
          </Container>
          </form>
          {/* </Paper> */}
        </TaskContext.Provider>
    )
}

export default Detail