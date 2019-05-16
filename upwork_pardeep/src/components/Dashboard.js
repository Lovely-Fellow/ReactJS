import React from "react";
import { Container, Row, Col, Button, ButtonToolbar, Dropdown} from 'reactstrap';
import '../index.css';

export class Dashboard extends React.Component {
    render() {
        const title_style = {
            backgroundColor: '#AAB2E9',
            color: '#5200B1',
            fontSize : '18px',
            fontWeight: 'bold',
            border: '2px solid #5200B1',
            borderBottom:'none'
        };
        const margin_left = {
            marginLeft:'8px'
        };
        const margin_right = {
            marginRight:'8px'
        };
        const border_top_none =
        {
            borderTop: 'none'
        };
        const border_bottom_none =
        {
            borderBottom: 'none'
        };
        
        const border_right = {
            borderRight: '2px solid #5200B1',
        };
        const border_left = {
            borderLeft: '2px solid #5200B1',
        }
        const inputStyle =
        {
            
            marginLeft: '-15px',
            paddingLeft: '5px',
            width: '100%'
        }
        
        return (
            <Container class="container">
                <Row style={border_bottom_none}>
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
                    <Col>
                        <Row >
                            <Col className="label paddingtop paddingbottom">PRIMARY TICKER:</Col>
                            <Col><input type="text"/></Col>
                            <Col><Button>ALL POSITIONS</Button></Col>
                        </Row>
                        <Row>
                            <Col className="label paddingtop paddingbottom">RELATED TICKER(S):</Col>
                            <Col><input type="text"/></Col>
                            <Col><Button>RELATED POSITIONS</Button></Col>
                        </Row>
                        
                    </Col>
                    <Col></Col>
                    <Col style={margin_left}></Col>
                </Row>
                <Row className="gaprow"></Row>
                <Row>
                    <Col>
                        <Row style={{borderBottom:'none', borderTop:'none'}}>
                            <Col style={title_style}>
                            NEWS PROPERTILES
                            </Col>
                        </Row>
                        <Row style={{borderBottom:'none', borderTop:'none'}}>
                            <Col className="label">
                                CLASSIFICATION:
                            </Col>
                            <Col >
                                <input style={inputStyle} type="text"/>
                            </Col>
                        </Row>
                        <Row style={{borderBottom:'none'}}>
                            <Col className="label">
                                MESSAGETYPE:
                            </Col>
                            <Col >
                                <select style={inputStyle} className="browser-default">
                                    <option>Select Message Type...</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </Col>
                        </Row>
                        <Row style={{borderBottom:'none'}}>
                            <Col className="label">
                                MESSAGETYPE:
                            </Col>
                            <Col >
                                
                            </Col>
                        </Row>
                        <Row className="gaprow"></Row>
                    </Col>
                    <Col xs="9">
                        <Row style={{borderBottom:'none', borderTop:'none'}}>
                            <Col style={title_style}>
                            PUT RTF EDITOR HERE
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
                <Row>
                <Col style={margin_right} xs="6">.col-6</Col>
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