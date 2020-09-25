import React from 'react';
import { Link } from 'react-router-dom';
import Card from './WantFolder/Card'
import Grid from '@material-ui/core/Grid';

const Top = (props) => {
    const handleId= (e)=>{
        //e.preventDefault()
        props.setId(props.id)
    }
    return (
        <div>
            <h2>Top画面だよ</h2>
            <Link className="link" onClick={(e)=>{handleId()}} to='/wanttodo'>
                やりたいことリスト画面へ
            </Link>
            <Grid container spacing={3}>
                <Card />
            </Grid>
            <Grid>
                
            </Grid>
        </div>
    )
}

export default Top