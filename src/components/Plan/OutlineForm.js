import React, { useState } from 'react'
import 
  { Fab, Tooltip, TextField
  } 
from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'
import { useForm } from "react-hook-form";

const StyledTooltip = styled(Tooltip)`
    display: block!important;
    margin: 0 auto;
    margin-top: 6px!important;
`

const OutlineForm = (props) => {
    const { register, errors } = useForm();
    // const [outline, setOutline] = useState(initialFormState)


    const handleClick = (e) => {
        // e.preventDefault()
        // 追加
        props.addOutline(props.outlines)
    }
    
  
    return (
        <form>
            {/* <TextField 
                // value={ThisWeekContext.outlines[0]}
                label="outline" 
                onChange={handleChangeOutline}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
            /> */}
            <StyledTooltip title="Add" aria-label="add" m={10} onClick={handleClick}>
                <Fab color="primary" >
                  <AddIcon />
                </Fab>
              </StyledTooltip>
        </form>
    )
}

export default OutlineForm



