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
          <Card.Link href="https://ballastlane.com/position/1550568" target='_blank'>BalastLane Careers</Card.Link>
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
          <Card.Link href="https://www.google.com/search?q=google+jobs+software+development,+cloud+technologies,+artificial+intelligence&oq=google+jobs+software+development,+cloud+technologies,+artificial+intelligence&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEINzAxOWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwim_ZmL_vaEAxXM6skDHW-nCv4Qkd0GegQIEBAB#fpstate=tldetail&htivrt=jobs&htiq=google+jobs+software+development,+cloud+technologies,+artificial+intelligence&htidocid=iT2Eyq24UOf5y_LLAAAAAA%3D%3D" target='_blank'>Google Job</Card.Link>
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
          <Card.Link href="https://jobs.careers.microsoft.com/global/en/job/1556285/Software-Engineer" target='_blank'>Microsoft Internships</Card.Link>
      </Card.Body>
    </Card>

    <Card className='m-4' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>#4: NVIDIA</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Revolutionizing graphics and AI technology</Card.Subtitle>
        <Card.Text>
            offers an unparalleled opportunity to contribute to the advancement of computing, AI, and automation solutions. 
        </Card.Text>
          <Link to={'/NvidiaComponent'} >Learn more   </Link> <br></br>
          <Card.Link href="https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/Software-Engineer_JR1981246-1" target='_blank'>NVIDIA Job</Card.Link>
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
          <Card.Link href="https://careers.airbnb.com/positions/5491458/" target='_blank'>Airbnb Job</Card.Link>
      </Card.Body>
    </Card>

    


    </div>
    
  )
}

export default HomePageComponent
