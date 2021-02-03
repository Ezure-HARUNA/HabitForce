import React, { useContext } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

const StyledFormControlLabel=styled(FormControlLabel)`
  margin: 16px!important;
`

const Outlines = ({outline}) => {
    return (
        <div>
            <StyledFormControlLabel
              control={
                <Checkbox
                  checked={outline.isComplete}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label={outline}                    
            />
             <Typography component="h1" variant="h6" color="inherit" noWrap >
                {outline.times}
              </Typography>
        </div>
    )
}

export default Outlines
