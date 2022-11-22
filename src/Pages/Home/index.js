import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

const Home = () => {
    return (
        <div>
            <Container className="container">
                <Row className="pt-4">
                    <Col sm={12} md={12} lg={12}><h3>Take Notes...</h3></Col>
                </Row>
                <Row className="pt-5">
                    <Col sm={12} md={12} lg={12}>
                        Form
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col sm={12} md={6} lg={4}>
                        todo
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        in-progess
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        done
                    </Col>
                </Row>
            </Container>
            <small><b>HASHIN ISRAQ © 2022 | ALL RIGHTS RESERVED</b></small>
        </div>
    );
};

export default Home;