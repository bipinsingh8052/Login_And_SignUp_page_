
import '../css/footer.css'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function FooterTo() {
  return (
    <>
     <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>Disaster Management System Hub</h5>
            <p>
              A platform to track, predict, and respond to disasters in real-time.
              Ensuring safety with AI-driven alerts and evacuation guidance.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link>Home</Link></li>
              <li><Link>Alerts</Link></li>
              <li><Link>Safety Tips</Link></li>
              <li><Link>Contact</Link></li>
            </ul>
          </Col>

          {/* Contact & Social Media */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: yadavjii101@gmail.com</p>
            <p>Phone: 8052056711</p>
            <div className="social-icons">
              <Link ><i className="fab fa-facebook"></i></Link>
              <Link ><i className="fab fa-twitter"></i></Link>
              <Link ><i className="fab fa-linkedin"></i></Link>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-3">
          <Col className="text-center">
            <p> BipinSingh&copy; {new Date().getFullYear()} Disaster Management System Hub. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer> 
    </>
  )
}
