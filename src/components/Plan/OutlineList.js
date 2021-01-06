import React from 'react'
import 
  { TextField
  } 
from '@material-ui/core'
import { useForm } from "react-hook-form";

const OutlineList = () => {
    const { register, errors } = useForm();
    return (
        <div>
            <div>
            <TextField 
                // value={ThisWeekContext.outlines[0]}
                label="outline" 
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
