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
                                At Microsoft, innovation and collaboration create a world of possibilities. Engage in the transformation of analytics with leading products like Power BI and Azure Data Explorer, aiming to empower every individual to make better decisions with data.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Bachelor's Degree in Computer Science (or related discipline) or equivalent experience, with solid coding skills in C#, Java, or Python, and a strong foundation in object-oriented programming.</li>
                                    <li>Proven experience with web technologies, particularly React, and an understanding of the development lifecycle, from implementation to production release.</li>
                                    <li>Experience in creating and consuming RESTful APIs, with a preference for experience in responsive and accessible UI development, TypeScript, and Angular.</li>
                                    <li>My foundation in React, C#, HTML, CSS, and JavaScript, complemented by an eagerness to master TypeScript, Angular, and RxJs, aligns with the technical demands of this role.</li>
                                </ul>
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>As a full-stack engineer, I would focus on developing end-to-end features for Power BI, improving data modeling engines, and enhancing the user experience across web and desktop applications.</li>
                                    <li>My goal is to contribute to a team that values clean, well-factored code with good tests and maintainability, delivering scalable and high-quality software solutions.</li>
                                </ul>
                             </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                            <Card.Text>
                                While new to some specific technologies listed, my solid background in software development, especially in React and C#, positions me well for this role. My willingness to dive into Angular, TypeScript, and state management solutions, coupled with my foundation in web development, sets me on a path for success within Microsoft's dynamic environment.
                            </Card.Text>
                            <Card.Link href="https://jobs.careers.microsoft.com/global/en/job/1556285/Software-Engineer" target='_blank'>Microsoft Internships</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MicrosoftComponent;
