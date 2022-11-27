import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useDatas from "../../hooks/useDatas";
import "./style.css";


const Home = () => {
    const [datas] = useDatas();
    const handleAdd = () => {
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let catagory, catagoryE;
        if (document.getElementById('catagory1').checked === true) {
            catagory = document.getElementById('catagory1').value;
            catagoryE = document.getElementById('catagory1');
        } else if (document.getElementById('catagory2').checked === true) {
            catagory = document.getElementById('catagory2').value;
            catagoryE = document.getElementById('catagory2');
        } else if (document.getElementById('catagory3').checked === true) {
            catagory = document.getElementById('catagory3').value;
            catagoryE = document.getElementById('catagory3');
        }
        else {
            catagory = "";
        }

        if (title !== "" && description !== "" && catagory !== "") {
            fetch('https://hi-todo-notes-server.up.railway.app/datas', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ title, description, catagory })
            })
                .then(res => res.json())
                .then(result => {
                })
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
            catagoryE.checked = false;
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
                <Row className="pt-1">
                    <Col sm={12} md={12} lg={12}>
                        <div style={{ padding: "30px", backgroundColor: '#212529' }}>
                            <form className="row g-2" style={{ border: "1px solid #808080", padding: "30px" }}>
                                <div className="col-12" style={{ backgroundColor: '#212529' }}>
                                    <label htmlFor="" className="form-label text-white">Title</label>
                                    <input placeholder="title...." type="text" className="form-control" id="title" required />
                                </div>
                                <div className="col-12" style={{ backgroundColor: '#212529' }}>
                                    <label htmlFor="" className="form-label text-white">Description </label>
                                    <textarea placeholder="description......" type="text" className="form-control" id="description" required />
                                </div>
                                <div className="col-12 p-0 m-0" style={{ backgroundColor: '#212529', width: "auto" }} >
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
                                    <input style={{ width: "100%", backgroundColor: "gray", color: "black", padding: "10px", marginTop: "2px", borderRadius: "5px", fontWeight: "bold" }} type="submit" value="Add" onClick={e => {
                                        e.preventDefault();
                                        handleAdd();
                                    }} />
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col sm={12} md={6} lg={4}>
                        <h3 style={{ color: "#808080", border: "1px solid #808080" }}>todo</h3>
                        {
                            datas.map(data => data?.catagory === "todo" ? <div
                                key={data._id}
                            >
                                <Container className="pt-5">
                                    <h4 className="pb-2">{data.title}</h4>
                                    <h5>{data.description}</h5>
                                    <div>
                                        <input type="button" value="in-progress" className="mx-4 my-3 bg-secondary" />
                                        <input type="button" value="done" className="mx-4 bg-secondary" />
                                    </div>
                                </Container>
                            </div> : <></>)
                        }
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <h3 style={{ color: "#808080", border: "1px solid #808080" }}>in-progess</h3>
                        {
                            datas.map(data => data?.catagory === "in-progress" ? <div
                                key={data._id}
                            >
                                <Container className="pt-5">
                                    <h4 className="pb-2">{data.title}</h4>
                                    <h5>{data.description}</h5>
                                    <div>
                                        <input type="button" value="done" className="mx-4 bg-secondary" />
                                    </div>
                                </Container>
                            </div> : <></>)
                        }
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <h3 style={{ color: "#808080", border: "1px solid #808080" }}>done</h3>
                        {
                            datas.map(data => data.catagory === "done" ? <div
                                key={data._id}
                            >
                                <Container className="pt-5">
                                    <h4 className="pb-2">{data.title}</h4>
                                    <h5>{data.description}</h5>
                                </Container>
                            </div> : <></>)
                        }
                    </Col>
                </Row>
            </Container>
            <small><b>HASHIN ISRAQ © 2022 | ALL RIGHTS RESERVED</b></small>
        </div>
    );
};

export default Home;