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
                                At Airbnb, I will be part of a community that’s transforming travel by fostering onnections worldwide. The Trust team, focusing on fraud detection and community standards, plays a crucial role in ensuring Airbnb's platform remains secure and trustworthy.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Bachelor’s degree in Computer Science or equivalent, with 7+ years in frontend web development.</li>
                                    <li>Extensive experience in TypeScript/JavaScript, GraphQL, REST APIs, and React. Fluency in HTML, CSS, and web technologies.</li>
                                    <li>My skills in React, JavaScript, C#, HTML, and CSS, supplemented by my adaptability and eagerness to learn new technologies like GraphQL, position me to significantly contribute to developing and enhancing Airbnb’s Trust Platform.</li>
                                </ul>
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Develop and optimize tools and frameworks for fraud detection and standard enforcement across Airbnb, working closely with a cross-functional team.</li>
                                    <li>Leverage my frontend expertise to standardize enforcement across Airbnb, ensuring a seamless and secure user experience.</li>
                                    <li>Collaborate with Android, iOS, and backend engineers to create foundational, cross-platform solutions.</li>
                                </ul>
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>While my primary expertise lies in web development, my foundational knowledge and readiness to dive into full-stack development and new web technologies align well with the role's requirements. My commitment to enhancing user experience and security on web platforms complements the mission of the Trust Platform team at Airbnb.</li>
                                    
                                </ul>
                            </Card.Text>
                            <Card.Link href="https://careers.airbnb.com/positions/5491458/" target='_blank'>Spotify Job</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default AirbnbComponent;