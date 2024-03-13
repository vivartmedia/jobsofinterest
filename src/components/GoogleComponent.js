import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


function GoogleComponent() {
    return (
        
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Google</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Why Work at Google?</Card.Subtitle>
                <Card.Text>
                  Renowned for its culture of innovation and collaboration, Google offers unparalleled employee benefits,
                  a commitment to work-life balance, and a hybrid work model. The company’s offices, located around the globe,
                  are designed to foster creativity and productivity.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Skills Required</Card.Subtitle>
                <Card.Text>
                  Google’s diverse technology ecosystem necessitates proficiency in a range of skills, including but not limited
                  to, software development, cloud technologies, artificial intelligence (AI), and machine learning (ML).
                  While Google uses a variety of programming languages and technologies, my familiarity with React, HTML, CSS, JavaScript, and an understanding of C# could serve as a solid foundation. Expanding my skill set to include Python or Java and deeper cloud technology knowledge could open more opportunities.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                <Card.Text>
                In a hypothetical position at Google, I might aim to contribute to innovative projects with significant impact, leveraging my web development skills to enhance user experiences or develop new features for Google's array of products and services.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                <Card.Text>
                I currently possess a strong foundation in web development, crucial for many roles at Google. Learning additional skills, particularly in areas like cloud computing or AI, would increase my alignment with Google's technical requirements.
                </Card.Text>
                <Card.Link href="https://buildyourfuture.withgoogle.com/internships" target='_blank'>Google Internships</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
     
    );
  }
  

export default GoogleComponent
