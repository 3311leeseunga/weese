import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Fade, createMuiTheme } from '@material-ui/core';
 
const useStyles = makeStyles(() =>
  createStyles({
    bar: {
      position: 'fixed',
      top: 0,
      left:0,
      width: '20rem',
      zIndex: 9999
    },
  }),
);
 
const Progress = (props) => {
  const classes = useStyles({});
  return (
    <Fade in={props.active}>
      <div className={classes.bar}>
          <LinearProgress 
            color="primary" 
            variant="determinate" 
            value={props.progress}
          />
      </div>
    </Fade>
  )
}
 
export default Progress