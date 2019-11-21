import React from 'react';
import {Col, Container,Row} from 'reactstrap';
import SciFi from "../data/scifi.json";
import Welcome from './Welcome';
import MyNav from './MyNav';
import BooksComponents from './BooksComponents.jsx';
class MainComponent extends React.Component {
    state = {  }
    render() { 
        console.log(SciFi)
        return (  
            <Container>
                <MyNav></MyNav>
                <Welcome></Welcome>
            <Row>
            {SciFi.map((bookEntry, index) =>(
                <Col md='3'>
                <BooksComponents book = {bookEntry} key= {index}/>
                </Col>
            ))}
            </Row>
            </Container>
        );
    }
}
 
export default MainComponent;