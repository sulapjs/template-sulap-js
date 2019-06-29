import React, { useState } from 'react';
import { Col, Button} from 'react-bootstrap';

function SidebarDashboard(props) {

    const [ sidebarMenu, setSidebarMenu ] = useState([ 'new Content', 'Product' ])

    return (
        <>
            <div style={{ marginTop:'10px' }}>
                <p style={{ margin:'0px', textAlign:'left', padding:'0px 15px', letterSpacing:'1px' }}> <b>content management</b> </p>
            </div>
            { sidebarMenu.map( menu => {
                return  <div className='d-flex justify-content-center' style={{ textAlign:'center', paddingTop:'10px', paddingLeft:'15px', paddingRight:'5px' }}>
                    <Button block variant="light" className='shadow-sm'>  { menu } </Button>
                </div>
            })}
             <div style={{ marginTop:'10px' }}>
                <p style={{ margin:'0px', textAlign:'left', padding:'0px 15px', letterSpacing:'1px' }}> <b> all models </b> </p>
            </div>
     
        </>
    );
}

export default SidebarDashboard