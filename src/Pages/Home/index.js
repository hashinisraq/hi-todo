import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

const Home = () => {
    const handleAdd = () => {
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let catagory;
        if (document.getElementById('catagory1').checked === true) {
            catagory = document.getElementById('catagory1').value;
        } else if (document.getElementById('catagory2').checked === true) {
            catagory = document.getElementById('catagory2').value;
        } else if (document.getElementById('catagory3').checked === true) {
            catagory = document.getElementById('catagory3').value;
        }
        else {
            catagory = "";
        }

        if (title !== "" && description !== "" && catagory !== "") {
            // fetch('#', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify({ title, description, catagory })
            // })
            //     .then(res => res.json())
            //     .then(result => {
            //     })
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
        }
        else {
            alert("Please complete all the fields carefully!");
        }
    }

    return (
        <div>
            <Container className="container">
                <Row className="pt-4">
                    <Col sm={12} md={12} lg={12}><h3>Take Notes...</h3></Col>
                </Row>
                <Row className="pt-5">
                    <Col sm={12} md={12} lg={12}>
                        <div>
                            <div style={{ padding: "80px", backgroundColor: '#212529' }}>
                                <form className="row g-2" style={{ border: "1px solid #808080", padding: "30px" }}>
                                    <div className="col-12" style={{ backgroundColor: '#212529' }}>
                                        <label htmlFor="" className="form-label text-white">Title</label>
                                        <input placeholder="title...." type="text" className="form-control" id="title" required />
                                    </div>
                                    <div className="col-12" style={{ backgroundColor: '#212529' }}>
                                        <label htmlFor="" className="form-label text-white">Description </label>
                                        <textarea placeholder="description......" type="text" className="form-control" id="description" required />
                                    </div>
                                    <div className="col-12 d-flex p-0 m-0" style={{ backgroundColor: '#212529' }} >
                                        <div className="form-check" style={{ backgroundColor: '#212529' }}>
                                            <input className="form-check-input" type="radio" name="catagory" id="catagory1" value="todo" />
                                            <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
                                                todo
                                            </label>
                                        </div>
                                        <div className="form-check" style={{ backgroundColor: '#212529' }}>
                                            <input className="form-check-input" type="radio" name="catagory" id="catagory2" value="in-progress" />
                                            <label className="form-check-label text-white" htmlFor="flexRadioDefault2">
                                                in-progress
                                            </label>
                                        </div>
                                        <div className="form-check" style={{ backgroundColor: '#212529' }}>
                                            <input className="form-check-input" type="radio" name="catagory" id="catagory3" value="done" />
                                            <label className="form-check-label text-white" htmlFor="flexRadioDefault3">
                                                done
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12" style={{ backgroundColor: '#212529' }}>
                                        <input style={{ width: "50%", backgroundColor: "gray", padding: "10px", marginTop: "2px", borderRadius: "5px" }} type="submit" value="Add" onClick={e => {
                                            e.preventDefault();
                                            handleAdd();
                                        }} />
                                    </div>
                                </form>
                            </div>
                        </div>
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