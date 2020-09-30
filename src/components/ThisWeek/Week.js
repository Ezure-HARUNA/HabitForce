import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Week() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>月</Button>
        <Button>火</Button>
        <Button>水</Button>
        <Button>木</Button>
        <Button>金</Button>
        <Button>土</Button>
        <Button>日</Button>
      </ButtonGroup>
    </div>
  );
}