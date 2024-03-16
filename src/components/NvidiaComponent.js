import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function NvidiaComponent(){
    return (
        <Container className='mt-5'>
            <Row className='justify-content-md-center'>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                        <Card.Title>NVIDIA</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Why Work at Spotify?</Card.Subtitle>
                            <Card.Text>
                                NVIDIA, a pioneer in computer graphics and AI technology, offers an unparalleled opportunity to contribute to the advancement of computing, AI, and automation solutions. As a member of the Enterprise Productivity Engineering team, you'll engage in work that pushes the boundaries of technology, contributing to projects that have a substantial impact on the industry and society.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Bachelor's degree in Computer Science or related field, supplemented by at least 1 year of backend development experience.</li>
                                    <li>Proficiency in Python, Java, or C++, with a familiarity with cloud platforms like AWS or Google Cloud and containerization technologies such as Docker and Kubernetes.</li>
                                    <li>My foundational skills in React, JavaScript, C#, HTML, CSS, and familiarity with Azure position me to rapidly adapt to NVIDIA's tech stack and contribute to developing innovative software </li>
                                </ul>
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Collaborate with senior engineers to create high-quality, innovative software solutions that enhance NVIDIA's productivity and enterprise solutions.</li>
                                    <li>Write clean, efficient, and maintainable code, participate in code reviews, and work collaboratively across multi-functional teams to achieve project success.</li>
                                    <li>Embrace continuous learning to keep pace with NVIDIA's cutting-edge technology environment, contributing to projects that leverage AI to transform computing.</li>
                                </ul>
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>While new to some of the specific technologies listed, my solid background in software development and eagerness to learn position me well for this role. My ability to quickly grasp new technologies, combined with a commitment to high-quality software development practices, aligns with the demands of a Software Engineer at NVIDIA.</li>
                                    
                                </ul>
                            </Card.Text>
                            <Card.Link href="https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/Software-Engineer_JR1981246-1" target='_blank'>NNIDIA Job</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default NvidiaComponent;