import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

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

const StyledContainer =styled(Container)`
  display: flex;
  justify-content: flex-end;
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

const Detail = () => {
  const classes = useStyles();
    return (
        <React.Fragment>
          <Container>
              <StyledContainer className="button-container">
                <StyledButton
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
              </StyledButton>
              </StyledContainer>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                やりたいこと
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="want to do" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                詳細
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="description" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                目的
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="purpose" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                いつやる
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                月　火　水　木　金　土　日
              </StyledTypography>
             
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                ご褒美
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="rewards" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                カテゴリー
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StylesTextField id="standard-basic" label="category" />
              </form>


          </Container>
        </React.Fragment>
    )
}

export default Detail