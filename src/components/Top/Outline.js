import React, { useContext } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'

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
              label={outline.outlines}                    
            />
        </div>
    )
}

export default Outlines
