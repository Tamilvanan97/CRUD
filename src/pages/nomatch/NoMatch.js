import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <div className="text-center">
                        <h1>404 Not Found</h1>
                        <p>The page you are looking for does not exist.</p>
                        <p>
                            Go back to <Link to="/">Home</Link>.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NoMatch;
