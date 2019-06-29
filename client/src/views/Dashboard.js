import React from 'react';
import NavbarDashboard from '../components/NavbarDashboard';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import NewModel from '../components/NewModel';
import ModelDetail from '../components/ModelDetail';
import CreateNewModel from '../components/CreateNewModel';
import SidebarDashboard from '../components/SidebarDashboard';
import { Route } from 'react-router-dom';
import DashboardContent from '../components/DashBoardContent'

function Dashboard(props) {
    return (
        <>
            <NavbarDashboard className='fixed-top'/>
            <Container fluid style={{ position:'absolute', height:'95vh' }}>
                <Row style={{ height:'100%' }}>
                    <Col lg={2} style={{ height:'100%', textAlign:'center',padding:'0px', backgroundColor:'#ededed', overflow:'scroll' }} className='shadow-sm'>
                        <SidebarDashboard />
                    </Col>
                    <Col lg={10}  style={{ overflow:'scroll' }}>
                        <Container fluid style={{ height:'95vh' }}>
                            <Route path='/dashboard/:id' component={ DashboardContent }/>
                            {/* <ModelDetail />
                            <NewModel />
                            <CreateNewModel /> */}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;