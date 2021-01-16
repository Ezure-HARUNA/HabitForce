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
height: 84.4%!important;
`

const StyledLink = styled(Link)`
text-decoration: none!important;
position: relative;
margin-left: 300px!important;

`

const StyledButton =styled(Button)`
  margin-left: 2.1%;
  /* background-color:  #fe6b8b!important; */
  /* background-color: #ff8e53!important; */
  background-color: blue!important;
  font-weight: bold;
  height: 50px!important;
  border-radius: 25px!important;
  position: absolute;
  bottom: 0px!important;
  right: 0px!important;
  z-index: 10!important;
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

  const db = firebase.firestore(); // 追記

  // 追記 一番最初にfirestoreからデータを取ってきてstateに入れる
  useEffect(() => {
    (async () => {
      const resTodo = await db.collection("todoList").doc("todo").get();
      // stateに入れる
      todoContext.setTodoList(resTodo.data());
      const resFinishedTodo = await db.collection("todoList").doc("finishedTodo").get();
      // stateに入れる
      todoContext.setFinishedList(resFinishedTodo.data());
      // Loading終了
      todoContext.setIsLoading(false);
    })()
  }, [db])

  const addTodo = async () => {
    if (!!todoContext.inputGoals) {
      // 追記 Todoが変化したのでtrue
      todoContext.setIsChangedTodo(true);
      todoContext.setTodoList([...todoContext.todoList, todoContext.inputGoals]);
      todoContext.setInputGoals('');
    }
  }

    const handleClick = (e) => {
      // createWant
      //   ({
      //     text, 
      //     description
      //   } )
      // myContext.setWantTodo(e.target.value)
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
                <Typography component="h1" variant="h6" color="inherit" noWrap >
                  今週のゴール
                </Typography>
                <TextField 
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

                <Typography component="h1" variant="h6" color="inherit" noWrap >
                  アウトライン
                </Typography>
                {outlines.map((outline, index) => (
                  <OutlineList outlines={outlines} setOutlines={setOutlines} index={index}
                  />
                ))}
                <OutlineForm addOutline={addOutline} outlines={outlines}/>
              </StyledPaper>
              {/* やること追加終了 */}

            </Div>
              <StyledLink className="link" to='/top'>
              <Button
                  onClick={addTodo()}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<ForwardOutlinedIcon />}
                >
                  やること追加
                </Button>
              </StyledLink>
            

            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>  
      </React.Fragment>
      
    )
}

export default Plan



