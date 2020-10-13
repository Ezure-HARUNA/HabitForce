import React from 'react';
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import BreakAlarm from './BreakAlarm'

const Div=styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    .button-container {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin: 1rem;
    }
` 

const Label =styled.h2`
    margin: 0;
`
const Break = props => {
    return (
        <div className='break-container'>
            
            <Div className='button-container'>
                <IconButton onClick={props.incrementBreak}>
                    <AddBoxIcon/>
                </IconButton>
              

                <h2 id='break-length' style={{margin: 0}}>
                {props.breakLength}
                </h2>
                {/* <BreakAlarm breakLength={props.breakLength}/> */}
                
                <IconButton onClick={props.decrementBreak}>
                  <IndeterminateCheckBoxIcon/>
                </IconButton>
               
            </Div>
        </div>
    )
}

export default Break;