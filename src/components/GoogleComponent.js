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
                  <ul>
                    <li>Bachelor’s degree in Computer Science or a related field, supplemented by 2 years of experience in software development.</li>
                    <li>Solid foundation in programming languages (React, JavaScript, C#, etc.), data structures, algorithms, and an eagerness to learn more.</li>
                    <li>Interest in developing accessible technologies and enhancing software performance in large-scale systems.</li>
                  </ul>
                  
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Goals</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Design, develop, test, and maintain software solutions, managing project priorities and deadlines.</li>
                    <li> Engage in continuous learning to tackle full-stack challenges and contribute across Google’s technological spectrum.</li>
                   
                  </ul>
                  
                 
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Skillset Match</Card.Subtitle>
                <Card.Text>
                  With my background and proactive learning attitude, I'm poised to grow into this dynamic role, pushing technology forward at Google.
                </Card.Text>
                <Card.Link href="https://www.google.com/search?q=google+jobs+software+development,+cloud+technologies,+artificial+intelligence&oq=google+jobs+software+development,+cloud+technologies,+artificial+intelligence&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEINzAxOWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwim_ZmL_vaEAxXM6skDHW-nCv4Qkd0GegQIEBAB#fpstate=tldetail&htivrt=jobs&htiq=google+jobs+software+development,+cloud+technologies,+artificial+intelligence&htidocid=iT2Eyq24UOf5y_LLAAAAAA%3D%3D" target='_blank'>Google Job</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
     
    );
  }
  

export default GoogleComponent
