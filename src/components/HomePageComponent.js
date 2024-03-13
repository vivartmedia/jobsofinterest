import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HomePageComponent = () => {


  return (
    
    <div  className='d-flex justify-content-center m-4 '>
      
      <Card className='m-4' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>#1: BallastLane Applications </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Custom Software Development</Card.Subtitle>
        <Card.Text>
        Innovating digital solutions for scaling businesses with a blend of strategic planning and technical prowess.
        </Card.Text>
        <Link to={'/BallastLaneComponent'} >Learn more   </Link> <br></br>
        <Card.Link href="https://ballastlane.com/careers" target='_blank'>BalastLane Careers</Card.Link>
      </Card.Body>
    </Card>

      <Card className='m-4' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>#2: Google</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Innovating the Future</Card.Subtitle>
        <Card.Text>
        A tech giant fostering creativity and innovation with exceptional benefits and flexible work culture.
        </Card.Text>
        <Link to={'/GoogleComponent'} >Learn more   </Link> <br></br>
        <Card.Link href="https://buildyourfuture.withgoogle.com/internships" target='_blank'>Google Internships</Card.Link>
      </Card.Body>
    </Card>

    <Card className='m-4' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>#3: Microsoft</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Empowering Digital Transformation</Card.Subtitle>
        <Card.Text>
        Leading global technology with a focus on growth, innovation, and a diverse, remote-friendly work environment.
        </Card.Text>
        <Link to={'/MicrosoftComponent'} >Learn more   </Link> <br></br>
        <Card.Link href="https://careers.microsoft.com/v2/global/en/students" target='_blank'>Microsoft Internships</Card.Link>
      </Card.Body>
    </Card>

    <Card className='m-4' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>#4: Spotify</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Revolutionizing Music & Podcasts</Card.Subtitle>
        <Card.Text>
        Dynamic culture with a balance of innovation and work-life, transforming how we experience music and podcasts.
        </Card.Text>
        <Link to={'/SpotifyComponent'} >Learn more   </Link> <br></br>
        <Card.Link href="https://www.lifeatspotify.com/students" target='_blank'>Spotify Internships</Card.Link>
      </Card.Body>
    </Card>
    
   

    <Card className='m-4' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>#5: Airbnb</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Redefining Travel Experiences</Card.Subtitle>
        <Card.Text>
        Creating a sense of belonging worldwide with innovative platform features, focused on sustainable and accessible travel.
        </Card.Text>
        <Link to={'/AirbnbComponent'} >Learn more   </Link> <br></br>
        <Card.Link href="https://careers.airbnb.com/" target='_blank'>Spotify Internships</Card.Link>
      </Card.Body>
    </Card>

    


    </div>
    
  )
}

export default HomePageComponent
