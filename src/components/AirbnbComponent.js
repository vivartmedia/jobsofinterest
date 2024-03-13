import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";

function AirbnbComponent() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                    <Card.Body>
                            <Card.Title>Airbnb</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Why Work at Airbnb?</Card.Subtitle>
                            <Card.Text>
                                Airbnb revolutionizes how we experience travel, emphasizing a global community and unique stays. It's a platform that values innovation, diversity, and the power of belonging, offering a unique angle on tech and tourism.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                            <Card.Text>
                                Strong web development skills with React, HTML, CSS, and JavaScript are essential at Airbnb. Experience with full-stack development, especially knowledge in backend technologies and a passion for creating user-centric solutions, aligns with Airbnb’s mission.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                            <Card.Text>
                                At Airbnb, I would aim to enhance the platform's user experience, making travel more accessible and meaningful. Working on features that empower hosts and guests alike, and contributing to a global community of travelers.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                            <Card.Text>
                                My expertise in React and web development lays a solid foundation for a role at Airbnb. Expanding my skill set into full-stack development and focusing on user experience design could further my alignment with Airbnb’s innovative projects.
                            </Card.Text>
                            <Card.Link href="https://careers.airbnb.com/" target='_blank'>Spotify Internships</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default AirbnbComponent;