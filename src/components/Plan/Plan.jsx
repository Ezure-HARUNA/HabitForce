import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './Card'
import Detail from './Detail';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
import styled, {createGlobalStyle} from 'styled-components';
import Button from '@material-ui/core/Button';
import { TodoContext } from '../App';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useCreateWant } from '../../helpers/useCreateWant'
import { useForm } from "react-hook-form";
import firebase from 'firebase'; 
import 'firebase/firestore';
import OutlineForm  from './OutlineForm'
import OutlineList  from './OutlineList'
import { useCreateTodo } from '../../helpers/useCreateTodo'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #F2F2F2;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-around!important;
  
`

const StyledPaper = styled(Paper)`
width: 80%!important;
height: 85%!important;
position: relative!important;
`

const StyledTypography = styled(Typography)`
  margin-top: 2.5%!important;
  margin-left: 5%!important;
`
const StyledTextField = styled(TextField)`
width: 90%!important;
margin-left: 5%!important;
`

const StyledLink = styled(Link)`
text-decoration: none!important;
margin-left: 300px!important;

`

const StyledButton =styled(Button)`
  margin-left: 52.5%;
  font-weight: bold;
  border-radius: 25px!important;
  position: absolute!important;
  bottom: 0px!important;
  right: 0px!important; 
  z-index: 10!important;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`

function Copyright() {

  return (
    // <AppContext.Provider value={{ state, dispatch}}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    // </AppContext.Provider>
  );
}

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));


const Plan = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const todoContext = useContext(TodoContext)
  const isWeb=useMediaQuery(theme.breakpoints.up('md'));
  const { register, errors } = useForm();
  const db = firebase.firestore(); 

  const [createTodo, loading] = useCreateTodo();
  const [goals, setGoals] = useState('')
  const [rewards, setRewards] = useState('')
  const [categories, setCategories] = useState('')


  // 追記 一番最初にfirestoreからデータを取ってきてstateに入れる
  // useEffect(() => {
  //   (async () => {
  //     const resTodo = await db.collection("todoList").doc("todo").get();
  //     // stateに入れる
  //     todoContext.setTodoList(resTodo.data());
  //     const resFinishedTodo = await db.collection("todoList").doc("finishedTodo").get();
  //     // stateに入れる
  //     todoContext.setFinishedList(resFinishedTodo.data());
  //     // Loading終了
  //     todoContext.setIsLoading(false);
  //   })()
  // }, [db])

  // const addTodo = async () => {
  //   if (!!todoContext.inputGoals) {
  //     // 追記 Todoが変化したのでtrue
  //     todoContext.setIsChangedTodo(true);
  //     todoContext.setTodoList([...todoContext.todoList, todoContext.inputGoals]);
  //     todoContext.setInputGoals('');
  //     todoContext.setInputCategories('');
  //     todoContext.setInputRewards('');
  //   }


  // }

    const handleClick = (e) => {
      // createWant
      //   ({
      //     text, 
      //     description
      //   } )
      // myContext.setWantTodo(e.target.value)
      createTodo({goals, categories, rewards})
      todoContext.setInputGoals('');
      todoContext.setInputCategories('');
      todoContext.setInputRewards('');
    }
    
    const outlinesData = [
      {id: 1, content: ''},
      {id: 2, content: ''},
      {id: 3, content: ''}
    ]
    const [outlines, setOutlines] = useState(outlinesData)
    const addOutline = (outline) => {
        outline.id = outlines.length + 1
        setOutlines([...outlines, {id: outlines.length + 1, content: ''}])
      }

    return (
      <React.Fragment>
        <GlobalStyle/>
          <Container maxWidth="lg" >
            <Div container spacing={3}>
           
              {/* <StyledPaper>
                <Card/>
              </StyledPaper>
              <StyledPaper>
                <Detail/>
              </StyledPaper> */}

              {/* やること追加 */}
              <StyledPaper>
                <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                  今週のゴール
                </StyledTypography>
                <StyledTextField 
                  value={todoContext.inputGoals}
                  onChange={(e) => todoContext.setInputGoals(e.target.value)}
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

                <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                  アウトライン
                </StyledTypography>
                {outlines.map((outline, index) => (
                  <OutlineList outlines={outlines} setOutlines={setOutlines} index={index}
                  />
                ))}
                <OutlineForm addOutline={addOutline} outlines={outlines}/>

                <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                  ご褒美
                </StyledTypography>
                <StyledTextField 
                  value={todoContext.inputRewards}
                  onChange={(e) => todoContext.setInputGoals(e.target.value)}
                  name="todo"  
                  label="ご褒美" 
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
                <StyledTextField 
                  value={todoContext.inputCategories}
                  onChange={(e) => todoContext.setInputGoals(e.target.value)}
                  name="todo"  
                  label="カテゴリー" 
                  ref={register({required: true, maxLength: 50})} 
                  type="text"
                  fullWidth
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.todo)}
                  helperText={errors.todo && "やることは20文字以内にして下さい。"}
                  />
              </StyledPaper>
              {/* やること追加終了 */}

            </Div>
              <StyledLink className="link" to='/top'>
              <StyledButton
                  // onClick={addTodo()}
                  onClick={handleClick}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<ForwardOutlinedIcon />}
                >
                  やること追加
                </StyledButton>
              </StyledLink>
            

            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>  
      </React.Fragment>
      
    )
}

export default Plan



