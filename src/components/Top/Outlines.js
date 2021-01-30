import React from 'react'

const Outlines = () => {
    return (
        <div>
            <StyledFormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label={card.outlines}                    
            />
        </div>
    )
}

export default Outlines
