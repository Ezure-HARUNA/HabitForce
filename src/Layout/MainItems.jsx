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



const MainItems = (props) => {
  const handleId= (e)=>{
    //e.preventDefault()
    props.setId(props.id)
  }
  return (
<div>
    <Link className="link" onClick={(e)=>{handleId()}} to=''>
        <ListItem button>
            <ListItemIcon>
                <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
    </Link>
    <Link className="link" onClick={(e)=>{handleId()}} to='/wanttodo'>
        <ListItem button>
            <ListItemIcon>
                <WhatshotOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="やりたいことリスト作成" />
        </ListItem>
    </Link>
    <Link className="link" onClick={(e)=>{handleId()}} to='/calendar'>
        <ListItem button>
            <ListItemIcon>
                <DateRangeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="カレンダー" />
        </ListItem>
    </Link>
    <Link className="link" onClick={(e)=>{handleId()}} to='/pomodoro'>
        <ListItem button>
            <ListItemIcon>
                <WatchLaterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="ポモドーロ" />
        </ListItem>
    </Link>
    <Link className="link" onClick={(e)=>{handleId()}} to='/rewards'>
        <ListItem button>
            <ListItemIcon>
                <CardGiftcardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="ご褒美設定" />
        </ListItem>
    </Link>
  </div>
  )
}

export default MainItems


