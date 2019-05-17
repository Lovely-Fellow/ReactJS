import React from "react";
import { Container, Row, Col, Button, ButtonToolbar, Input, DateTime } from 'reactstrap';
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
        const textalign_left =
        {
            textAlign:'left',
            
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
                                MESSAGEDATE:
                                
                            </Col>
                            <Col >
                                <Input type="datetime-local" style={{height:'10px'}} ></Input>
                            </Col>
                        </Row>
                        <Row className="gaprow"></Row>
                        <Row >
                            <Col style={textalign_left}>
                                <Input style={{marginLeft:'15px'}} type="checkbox"></Input>
                                <label style={{marginLeft:'35px', marginTop:'3px'}} for="scales">IMPORTANT</label> 
                            </Col>
                        </Row>
                        <Row >
                            <Col style={textalign_left}>
                                <Input style={{marginLeft:'15px'}} type="checkbox"></Input>
                                <label style={{marginLeft:'35px', marginTop:'3px'}} for="scales">DUPLICATE FOR</label> 
                                
                            </Col>
                        </Row>
                        <Row className="gaprow">
                        </Row>
                        <Row>

                        </Row>
                    </Col>
                    <Col xs="9">
                        <Row style={{borderBottom:'none', borderTop:'none'}}>
                            <Col style={title_style}>
                            PUT RTF EDITOR HERE
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col></Col>
                <Col xs="9">
                    <Row>
                        <Col xs="1">
                            <Button>CLEAR</Button>
                        </Col>
                        <Col style={{color:'gray', marginTop:'3px'}}>
                            CURRENT LENGTH: # OF CHARACTERS
                        </Col>
                        <Col xs="1">
                            <Button>SAVE</Button>
                        </Col>
                    </Row>
                </Col>
                </Row>
                <Row className="gaprow"></Row>
                <Row>
                    <Col style={textalign_left}>
                        <Button>POST MESSAGE</Button>
                    </Col>
 
                </Row>
                <Row className="gaprow"></Row>
                <Row className="gaprow"></Row>
                <Row className="gaprow" style={{height:'70px'}}></Row>

            </Container>

        );
    }   
}

export default Dashboard;