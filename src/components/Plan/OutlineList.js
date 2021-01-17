import React, { useState } from 'react'
import 
  { TextField
  } 
from '@material-ui/core'
import { useForm } from "react-hook-form";
import styled from 'styled-components'

const StyledTextField = styled(TextField)`
width: 90%!important;
margin-left: 5%!important;

`

const OutlineList = (props) => {
    const { register, errors } = useForm();
    const [input, setInput] = useState(props.outlines[props.index].content)

    const handleInputChange = (e) => {
        //set系は時間差ある
        setInput(e.target.value)
        props.outlines[props.index].content=e.target.value
        props.setOutlines(props.outlines)
        console.log(props.outlines)
    }
    return (
        <div>
            <div>
            <StyledTextField 
                // value={ThisWeekContext.outlines[0]}
                label="outline" 
                value={input}
                // value={props.outlines[props.index].content}
                onChange={handleInputChange}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
            />
            </div>
        </div>
    )
}

export default OutlineList
