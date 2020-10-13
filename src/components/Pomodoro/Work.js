import React from 'react';
// import './Session.css';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const Div=styled.div`
　  display: flex;
    flex-direction: column;
    align-items: center;
    display: table-cell;
    vertical-align: middle;
    .button-container {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin-top: 2rem;
    }
` 

const Work = (props) => {
    return (
        <Div className='session-container'>
            <Div className="button-container">
              <IconButton onClick={props.incrementWork}>
                <AddBoxIcon/>
              </IconButton>

                <h2 id='session-length' style={{margin: 0}}>
                {props.workLength}
                </h2>
                
                <IconButton onClick={props.decrementWork}>
                  <IndeterminateCheckBoxIcon/>
                </IconButton>
            </Div>
        </Div>
    )
}

export default Work;