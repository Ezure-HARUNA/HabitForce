import React, { useContext, useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './Card'
import Detail from './Detail';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
import styled, {createGlobalStyle} from 'styled-components';
import Button from '@material-ui/core/Button';
import { MyContext } from '../App';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useCreateWant } from '../../helpers/useCreateWant'

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
width: 45%!important;
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
  const {task, setTask} = useContext(MyContext)

  const [text, setText] = useState('');
  const classes = useStyles();
  const theme = useTheme();
  const isWeb=useMediaQuery(theme.breakpoints.up('md'));
  const [createWant, loading] = useCreateWant()

  // const handleId= (e)=>{
  //   //e.preventDefault()
  //   props.setId(props.id)
  // }
    const nextToPage1= (e)=>{
        //e.preventDefault()
        props.setId(props.id)

    }

    const handleClick = (e) => {
      createWant({text: text.value, description: '詳細'} )
      // myContext.setWantTodo(e.target.value)
    }
    // const [task, setTask] = useState('');
    const [week, setWeek] = useState([]);
    const [category, setCategory] = useState('');

    return (
      <React.Fragment>
        <GlobalStyle/>
          <Container maxWidth="lg" >
            <Div container spacing={3}>
           
              <StyledPaper>
                <Card/>
              </StyledPaper>
              <StyledPaper>
                <Detail/>
              </StyledPaper>
            </Div>
              <StyledLink className="link" onClick={(e)=>{nextToPage1()}} to='/thisweek'>
                <StyledButton
                  onClick={handleClick}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<ForwardOutlinedIcon />}
                >
                  次のページ（今週やること）へ
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



