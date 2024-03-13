import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MicrosoftComponent() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Microsoft</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Why Work at Microsoft?</Card.Subtitle>
                            <Card.Text>
                                Microsoft empowers innovation and digital transformation, known for its inclusive culture,
                                comprehensive benefits, and remote-friendly work policies. It's an environment where technology
                                and people come together to solve complex challenges.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                            <Card.Text>
                                Proficiency in cloud services, software development, and data science are valuable at Microsoft.
                                My knowledge in React, C#, HTML, CSS, and JavaScript aligns with Microsoft's technology stack,
                                especially considering the importance of .NET and Azure in their ecosystem.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                            <Card.Text>
                                Aspiring to contribute to Microsoft means aiming to enhance cloud computing solutions, improve product
                                accessibility, and drive innovation in software development, utilizing my existing web development skills
                                and expanding my expertise in Azure and .NET technologies.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                            <Card.Text>
                                With a solid background in React, C#, and other web technologies, I'm on the right track.
                                Diving deeper into Microsoft-specific technologies like Azure and .NET will further align my skills
                                with Microsoft's projects and innovation goals.
                            </Card.Text>
                            <Card.Link href="https://careers.microsoft.com/v2/global/en/students" target='_blank'>Microsoft Internships</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MicrosoftComponent;
