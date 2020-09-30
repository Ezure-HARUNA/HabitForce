import React, { makeStyles, useContext  } from 'react';
import ThisWeekCard from './ThisWeekCard'
import Paper from '@material-ui/core/Paper';
import AppContext from '../contexts/AppContext'

import clsx from 'clsx';

const StyledPaper = styled(Paper)`
  margin: 10px;
  height: 90vh!important;
  overflow:visible;
`

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

}));

const ThisWeek = ({stack}) => {
  const { state, dispatch } = useContext(AppContext);
  const stack = stack.id
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <React.Fragment>
           {/* <Header/> */}
          <StyledPaper className={fixedHeightPaper}>
            
            <ThisWeekCard/>
          </StyledPaper>
        </React.Fragment>
    )
}

export default ThisWeek