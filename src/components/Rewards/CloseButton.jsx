import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function CloseButton() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="閉じる" aria-label="閉じる">
        <Fab color="primary" className={classes.fab} disabled>
          <CloseOutlinedIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}