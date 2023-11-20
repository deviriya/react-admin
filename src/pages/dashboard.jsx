import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";

const Dashboard = () => {

    return (
        <div className="animatediv">

            <h3>Dashboard</h3>

            <Row>
                <Col md={3}>
                    <div className="card primaryCard">
                        <div className="card-body">
                          <span>Total Users</span>
                          <h5>10</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;