// import { Container, Row, Col, Button, Image } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <Container className="mt-5 text-center">
//       <Row>
//         <Col>
//           <h1>Welcome to Your Mood</h1>
//           <p className="lead">
//             Enjoy the finest coffee and delicious treats in a cozy atmosphere.
//           </p>
//           <Button variant="primary" as={Link} to="/menu" className="me-2">
//             View Menu
//           </Button>
//           <Button variant="outline-secondary" as={Link} to="/contact">
//             Visit Us
//           </Button>
//         </Col>
//       </Row>

//       {/* Featured Section */}
//       <Row className="mt-5">
//         <Col md={6}>
//           <Image
//             src="../../public/images/home-interior.webp"
//             alt="Cafe Interior"
//             fluid
//             rounded
//           />
//         </Col>
//         <Col md={6} className="d-flex align-items-center">
//           <div>
//             <h2>Experience the Perfect Brew</h2>
//             <p>
//               Our expert baristas craft every cup with precision and passion.
//               From rich espresso to creamy lattes, each sip is an experience.
//             </p>
//             <Button variant="success" as={Link} to="/about">
//               Learn More
//             </Button>
//           </div>
//         </Col>
//       </Row>

//       {/* Testimonials Section */}
//       <Row className="mt-5">
//         <Col>
//           <h2>What Our Customers Say</h2>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={4}>
//           <p>"Amazing coffee and great ambiance! A must-visit." - Sarah L.</p>
//         </Col>
//         <Col md={4}>
//           <p>
//             "Best pastries in town. The croissants are my favorite!" - James M.
//           </p>
//         </Col>
//         <Col md={4}>
//           <p>
//             "Friendly staff and a cozy environment. Perfect for relaxing." -
//             Emily R.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Home;
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h1>Welcome to Your Mood</h1>
          <p className="lead">
            Enjoy the finest coffee and delicious treats in a cozy atmosphere.
          </p>
          <Button variant="primary" as={Link} to="/menu" className="me-2">
            View Menu
          </Button>
          <Button variant="outline-secondary" as={Link} to="/contact">
            Visit Us
          </Button>
        </Col>
      </Row>

      {/* Featured Section */}
      <Row className="mt-5">
        <Col md={6}>
          <Image
            src="/images/home-interior.webp"
            alt="Cafe Interior"
            fluid
            rounded
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2>Experience the Perfect Brew</h2>
            <p>
              Our expert baristas craft every cup with precision and passion.
              From rich espresso to creamy lattes, each sip is an experience.
            </p>
            <Button variant="success" as={Link} to="/about">
              Learn More
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
