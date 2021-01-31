import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import styled from 'styled-components';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom'
import { useCreateTodo } from '../helpers/useCreateTodo'
import { TodoContext } from '../components/App'
import { PlanContext } from '../components/Plan/Plan';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`

const StyledToolbar = styled(Toolbar)`
  position: relative!important;
`

const StyledTypography = styled(Typography)`
  position: absolute!important;
  right: 0%!important;
  /* font-weight: bold!important; */
`

const StyledListItemText=styled(ListItemText)`
 :hover {
    color: blue!important;
  }
`

const StyledLink=styled(Link)`
  /* text-decoration:none!important; */
  text-decoration: none!important;
  color: white!important;
`


// const StyledButton = styled(Button)`
// background: blue;
//   border-radius: 3px;
//   border: 0;
//   color: white!important;
//   height: 48px;
//   padding: 0 30px;
//   box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
//   margin-left:10px;
//   margin-top:-15px;
// `;



export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleId= ()=>{
    //e.preventDefault()
    props.setId(props.id)
  }
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //handleClickのタスク追加の処理
  const todoContext = useContext(TodoContext)
  const planContext = useContext(PlanContext)
  const [createTodo, loading] = useCreateTodo();
  const [goals, setGoals] = useState('')
  const [rewards, setRewards] = useState('')
  const [categories, setCategories] = useState('')
  console.log(todoContext)

  const handleClick = (card) => {

    createTodo({goals: todoContext.inputGoals, categories: todoContext.inputCategories, rewards: todoContext.inputRewards })
    todoContext.setInputGoals('');
    todoContext.setInputCategories('');
    todoContext.setInputRewards('');
    //cardのadd
      card.id = planContext.cards.length + 1
      planContext.setCards([...planContext.cards, {id: planContext.cards.length + 1, content: ''}])
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <StyledAppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <StyledToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Habit Force
          </Typography>
          <StyledLink className="link" to='/top'>
          <StyledTypography 
            variant="h6" noWrap
            onClick={handleClick}
          >
            保存
          </StyledTypography>
          </StyledLink>
        </StyledToolbar>
      </StyledAppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Divider />
      <StyledLink className="link" onClick={(e)=>{handleId()}} to=''>
        <ListItem button>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
        <ListItemText primary="Home" />
       </ListItem>
      </StyledLink>
      <StyledLink className="link" onClick={(e)=>{handleId()}} to='/wanttodo'>
        <ListItem button>
          <ListItemIcon>
            <WhatshotOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="やりたいことリスト作成" />
        </ListItem>
      </StyledLink>
      <StyledLink className="link" onClick={(e)=>{handleId()}} to='/calendar'>
        <ListItem button>
          <ListItemIcon>
            <DateRangeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="カレンダー" />
        </ListItem>
      </StyledLink>
      <StyledLink className="link" onClick={(e)=>{handleId()}} to='/pomodoro'>
        <ListItem button>
          <ListItemIcon>
            <WatchLaterOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="ポモドーロ" />
        </ListItem>
      </StyledLink>
      <StyledLink className="link" onClick={(e)=>{handleId()}} to='/rewards'>
        <ListItem button>
          <ListItemIcon>
            <CardGiftcardOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="ご褒美設定" />
        </ListItem>
      </StyledLink>

      <Divider />

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
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main>
    </div>
  );
}
