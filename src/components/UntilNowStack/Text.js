import React, { useState, useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';

import styled from 'styled-components'
import { TodoContext } from '../../components/App';

const StyledContainer=styled(Container)`
  .big-container {
    margin: 50px 60px 50px!important;
  }
  .time-container {
    display: flex;
  }
  .category-container {
    margin-left: 30px;
  }
  /* },
  .small-container {
    margin-bottom: 16px;
  } */
    `
const StyledTypography=styled(Typography)`
    margin: 12px;
`

const StyledPaper = styled(Paper)`
  width: 250%!important;
  margin-top: 16px;
  height: 250px!important;
`

const Text = ({todo}) => {

    return (
        <React.Fragment>
              <StyledContainer className="small-container">
                <StyledPaper m={5} p={5}>
                    {/* .mapでカテゴリーを表示する */}
                    <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                        カテゴリー
                    </StyledTypography>
                    <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                        合計時間:反映部分
                    </StyledTypography>
                    {/* アウトラインと時間のmap */}
                    <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                        アウトライン(かかった時間)(反映部分)
                    </StyledTypography>
                    
                </StyledPaper>
          </StyledContainer>
        </React.Fragment>
    )
}

export default Text;