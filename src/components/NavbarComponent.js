import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavbarComponent() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to ={'/'}>Jobs that Interest you
</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to = {'/BallastLaneComponent'}>#1: BallastLane</Nav.Link>
            <Nav.Link as={Link} to = {'/GoogleComponent'}>#2:Google</Nav.Link>
            <Nav.Link as={Link} to = {'/MicrosoftComponent'}>#3: Microsoft</Nav.Link>
            <Nav.Link as={Link} to = {'/SpotifyComponent'}>#4: Spotify</Nav.Link>
            <Nav.Link as={Link} to = {'/AirbnbComponent'}>#5: Airbnb</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavbarComponent;