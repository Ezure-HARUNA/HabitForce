import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Layout/Header'
import Card from './WantFolder/Card'

const Top = (props) => {
    const handleId= (e)=>{
        //e.preventDefault()
        props.setId(props.id)
    }
    return (
        <div>
            <Header></Header>
            <h2>やりたいことリストの画面だよ</h2>
            <Link className="link" onClick={(e)=>{handleId()}} to=''>
                Top画面へ
            </Link>
            <Card></Card>

        </div>
    )
}

export default Top