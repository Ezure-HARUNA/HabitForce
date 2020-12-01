import React, { useContext } from 'react'
import { ThisWeekContext } from '../ThisWeek/Detail'
import {
    List
  } from '@material-ui/core'

const OutlineList = () => {
    const thisWeekContext = useContext(ThisWeekContext)
    return (
        <div>
        <List>
          {thisWeekContext.outlines.map(outline => (
            <Fragment key={`${thisWeekContext.outlines.docId}--fragment`}>
              <ListItem key={`${thisWeekContext.outlines.docId}--list`}>
                <Checkbox
                  checked={outline.isComplete}
                  onClick={() => {
                    update({
                      docId: outline.docId,
                      
                      text: outline.text,
                      isComplete: !outline.isComplete,
                    })
                  }}
                /> */}
                {/* <Text primary={outline.text} completed={outline.isComplete} /> */}
                {/* <ListItemSecondaryAction>
                  <Button
                    color="default"
                    onClick={() => {
                      remove({ docId: outline.docId })
                    }}
                  >
                    Delete
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider key={`${outline.docId}--divider`} />
            </Fragment>
          ))}
        </List>
            
        </div>
    )
}

export default OutlineList
