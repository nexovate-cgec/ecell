import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const JoinUs = () => (
  <section id="join" className="py-5 bg-dark text-white">
    <Container>
      <Row className="align-items-center text-center text-md-start">
        <Col md={6} className="mb-4 mb-md-0">
          <h2 className="fw-bold mb-3">
            Ready to <span className="text-warning">Join EUREKA 2K25?</span>
          </h2>
          <p className="lead mb-4">
            Become a part of our entrepreneurial journey. Join EUREKA and build the future with us.
          </p>
          <Button
            variant="danger"
            size="lg"
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Times up
          </Button>
        </Col>

        <Col md={6}>
          <h2 className="fw-bold mb-3">
            Want to <span className="text-danger">Join E-Cell?</span>
          </h2>
          <p className="lead mb-4">
            Be a part of CGEC’s Entrepreneurship Cell. Learn, innovate, and grow with us.
          </p>
          <Button
            variant="warning"
            size="lg"
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default JoinUs;
