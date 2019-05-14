import React from "react";
import { Container, Row, Col, Button, ButtonToolbar} from 'reactstrap';
import '../index.css';

export class Dashboard extends React.Component {
    render() {
        const title_style = {
            backgroundColor: '#AAB2E9',
            color: '#5200B1',
            fontSize : '18px',
            fontWeight: 'bold'
        };
        return (
            <Container class="container">
                <Row>
                    <Col xs="10" style={title_style}>CALL CENTER - SAMPLE ADMINISTRATION</Col>
                    <Col xs="2">
                        <ButtonToolbar>
                            <Button>REPORTS</Button>
                            <Button> EXIT</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
                <Row className="gaprow"></Row>
                <Row>
                
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
                </Row>
                <Row>
                <Col xs="3">.col-3</Col>
                <Col xs="auto">.col-auto - variable width content</Col>
                <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                <Col xs="6">.col-6</Col>
                <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Col sm="4">.col-sm-4</Col>
                </Row>
                <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
                </Row>
                <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
                </Row>
                <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
                </Row>
            </Container>

        );
    }   
}

export default Dashboard;