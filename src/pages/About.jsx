import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>About Your Mood</h2>
          <p>
            At Your Mood, we believe in serving the finest coffee and freshly
            baked treats in a warm and inviting atmosphere. Our journey started
            with a passion for great coffee and a love for bringing people
            together.
          </p>
          <p>
            Whether you're here for a quick espresso or a relaxing afternoon
            with friends, we ensure every visit is a delightful experience.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="../../public/images/aboutus.webp"
            alt="Cafe interior"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
