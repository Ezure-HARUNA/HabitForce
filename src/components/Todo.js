  
import React from 'react'
import styled from 'styled-components'


const Contents = styled.div`
  & {
    width: 80%;
    height: 90%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`

export default () => (
    <Contents>
      ログイン完了
    </Contents>
)