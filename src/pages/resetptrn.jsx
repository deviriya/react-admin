import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import PatternLock from "react-pattern-lock";
import { toast } from "react-toastify";

const ResetPattern = () => {
    const [path, setPath] = useState([]);
    const [pathone, setPathone] = useState([]);

    const onChange = path => {
        setPath([...path]);
    };
    const onChangeone = path => {
        setPathone([...path]);
    };

    const onSubmit = () => {

        if (path.length > 0) {
            if (path.length > 0) {
                let newpattern = path.join("");
                let confirmpattern = pathone.join("");
                console.log(newpattern, confirmpattern);
            } else toast.error("Confirm Pattern in empty.")
        } else toast.error("New Pattern in empty.")

    }

    return (
        <div className="login_form">
            <div className="col-md-8 my-4">
                <Card>
                    <CardBody className="">
                        <h3>Reset Pattern.</h3>

                        <Row>
                            <Col md={6}>

                                <div className="my-2">
                                    <label>New Pattern</label>
                                    <div className="d-flex justify-content-center">
                                        <PatternLock
                                            width={300}
                                            pointSize={15}
                                            size={3}
                                            path={path}
                                            onChange={onChange}
                                            style={{
                                                background: "#0b80f2",
                                                borderRadius: "16px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="my-2">
                                    <label>Confirm Pattern</label>
                                    <div className="d-flex justify-content-center">
                                        <PatternLock
                                            width={300}
                                            pointSize={15}
                                            size={3}
                                            path={pathone}
                                            onChange={onChangeone}
                                            style={{
                                                background: "#0b80f2",
                                                borderRadius: "16px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>


                        <div className="text-center">
                            <button className="btn btn-primary" onClick={onSubmit}>
                                Reset Pattern
                            </button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ResetPattern;