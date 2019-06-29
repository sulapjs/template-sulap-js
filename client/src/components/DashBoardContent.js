import React from 'react'
import { withRouter } from 'react-router-dom';
import ModelDetal from '../components/ModelDetail';

function DashBoardContent(props) {
    if(props.match.params.id === 'model-detail'){
        return (
            <>
                <ModelDetal />
            </>
        )
     } else {
         return null
     }
}

export default withRouter(DashBoardContent)

