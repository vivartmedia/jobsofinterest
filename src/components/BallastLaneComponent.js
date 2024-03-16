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
                                Ballast Lane Applications is at the cutting edge of technology, pioneering in delivering robust digital solutions with a focus on custom software development. Their commitment to leveraging Azure and advanced DevOps practices underscores their dedication to excellence and innovation.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                            <Card.Text>
                                This role demands a deep understanding of Azure, containerization technologies like Docker and Kubernetes, and infrastructure as code with tools like Terraform and Ansible. While the position requires expertise in DevOps practices, my foundational skills in React and a broad understanding of web technologies provide a unique perspective. A willingness to dive deep into Azure and container orchestration will be key.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                            <Card.Text>
                                In joining Ballast Lane as a Senior DevOps Engineer, my objective would be to enhance the deployment, scalability, and security of applications. Leveraging my web development background, I aim to bridge the gap between development and operations, fostering a more integrated and efficient workflow.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                            <Card.Text>
                                Although the role challenges me with its focus on Azure and DevOps technologies, my solid base in software development and eagerness to master new technologies align with the demands of this position. My experience in web development, combined with a commitment to learning Azure deeply and understanding containerization, positions me to grow into this role and contribute significantly to Ballast Lane's projects.
                            </Card.Text>
                            <Card.Link href="https://ballastlane.com/position/1550568" target='_blank'>BalastLane Careers</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default BallastLaneComponent;
