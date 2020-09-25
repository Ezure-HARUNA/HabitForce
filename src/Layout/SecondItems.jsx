import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import { Link } from 'react-router-dom';

const SecondItems = (props) => {
  const handleId= (e)=>{
    //e.preventDefault()
    props.setId(props.id)
  }
    return (
            <div>
              {/* <ListSubheader inset>Saved reports</ListSubheader> */}
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Current month" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Last quarter" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Year-end sale" />
                </ListItem>
            </div>

    )
}

export default SecondItems