// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// function Contact() {
//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Contact Us</h2>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Form>
//             <Form.Group className="mb-3" controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter your name" required />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter your email" required />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="message">
//               <Form.Label>Message</Form.Label>
//               <Form.Control as="textarea" rows={4} placeholder="Your message" required />
//             </Form.Group>

//             <Button variant="primary" type="submit">Send Message</Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Contact;
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-5">
      <h2 className="text-center">Contact Us</h2>
      <Row>
        <Col md={6}>
          <p>
            📍 Location: 123 Cafe Street, Coffee City, CO
            <br />
            📞 Phone: (123) 456-7890
            <br />
            📧 Email: info@cafebliss.com
          </p>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
