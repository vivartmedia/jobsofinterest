import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function BallastLaneComponent() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>BallastLane Applications</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Why Work at Ballast Lane Applications?</Card.Subtitle>
                            <Card.Text>
                                A leader in custom software development, Ballast Lane Applications creates innovative digital platforms for businesses looking to scale. Their approach combines strategic insight with technical expertise.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                            <Card.Text>
                                Experience in web and mobile app development, particularly with React, and a strong understanding of full-stack development practices. The company's project-oriented approach values versatility in frontend and backend technologies.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                            <Card.Text>
                                As part of Ballast Lane, I would contribute to developing custom software solutions that empower businesses to innovate and grow, working closely with a diverse client base to meet their unique needs.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                            <Card.Text>
                                My grounding in React, coupled with a broad understanding of web technologies, positions me well for a role at BallastLane. Expanding my skill set in mobile app development and cloud services could enhance my contributions to their projects.
                            </Card.Text>
                            <Card.Link href="https://ballastlane.com/careers" target='_blank'>BalastLane Careers</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default BallastLaneComponent;
