import React, { useContext } from 'react';
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
import Pomodoro from './Pomodoro'
import TimeLimit from './TimeLimit'
import Week from './Week'
// import AppContext from "../../contexts/AppContext"
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
// import AppContext from '../contexts/AppContext'
import { TaskContext } from '../Want/Detail';
// import { myContext } from '../../components/App'



const useStyles = makeStyles((theme) => ({
  
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginLeft: 32,
    },
    button: {
      margin: theme.spacing(1),
    },
    week: {
      marginLeft: -16,
    }
  },
}));

const StyledContainer =styled(Container)`
  display: flex;
  .main-container {
    display: flex;
  }
  .router-container {
    margin: 50px 60px 50px;
    background-color: #f8f8f8!important;
  }
`
const StyledButton =styled(Button)`
  margin-left: 2.1%;
`

// const StyledPaper =styled(Paper)`
//   color: blue;
// `

const StyledTypography = styled(Typography)`
  margin-top: 16px;
`
const StyledTextField=styled(TextField)`
  width: 80%;
`

const StylesTextField=styled(TextField)`
  width: 40%;
`

const ThisWeekCard = (props) => {
  const classes = useStyles();
  const setTask  = useContext(TaskContext)
  // const myContext = useContext(myContext)
  const nextToPage1= (e)=>{
    //e.preventDefault()
    props.setId(props.id)

}
  
    return (
        <React.Fragment>
          <Container>
              <StyledContainer className="button-container">
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
              </StyledContainer>
              <h2>今週やること</h2>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                詳細
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                {/* {myContext.wantTodo} */}
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="今週やること" />
              </form>
              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                詳細なアウトライン
              </StyledTypography> */}
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="詳細なアウトライン" />
              </form>
              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                ご褒美
              </StyledTypography> */}
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="ご褒美" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                いつやる
              </StyledTypography>
              
              <Week className={classes.week}/>
              {/* <StyledContainer className="pomodoro-container"> */}
                <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                  ポモドーロ機能
                </StyledTypography>                
                <Pomodoro/>
              {/* </StyledContainer> */}

              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="rewards" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                カテゴリー
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit"  noWrap >
                カテゴリー
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit"  noWrap >
                制限時間
              </StyledTypography>

              
              <TimeLimit className={classes.root}/>
              <Link className="link" onClick={(e)=>{nextToPage1()}} to='/top'>
                <StyledButton
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large"
                    startIcon={<ForwardOutlinedIcon />}
                  >
                    編集完了(TOPへ)
                  </StyledButton>
                </Link>


          </Container>
        </React.Fragment>
    )
}

export default ThisWeekCard