import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SpotifyComponent(){
    return (
        <Container className='mt-5'>
            <Row className='justify-content-md-center'>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Spotify</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Why Work at Spotify?</Card.Subtitle>
                            <Card.Text>
                                Spotify leads in audio streaming with a culture that values innovation, diversity, and offers a unique approach to work-life balance. It’s a place where technology meets music and creativity flourishes.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                            <Card.Text>
                                A strong foundation in web development, particularly with React, HTML, CSS, and JavaScript, is essential at Spotify. Familiarity with backend technologies and an appreciation for agile development practices align with Spotify's fast-paced, innovative environment.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                            <Card.Text>
                                In a role at Spotify, I would aim to enhance the user experience for millions of listeners worldwide, develop new features for the platform, and contribute to projects that support artists and podcast creators.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                            <Card.Text>
                                My web development skills, especially in React, position me well for a career at Spotify. Gaining experience with backend technologies and understanding the music and podcasting ecosystem could further solidify my fit within the company.
                            </Card.Text>
                            <Card.Link href="https://www.lifeatspotify.com/students" target='_blank'>Spotify Internships</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SpotifyComponent;