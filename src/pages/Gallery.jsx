import { Container, Row, Col, Card } from "react-bootstrap";

const galleryImages = [
  "../../public/images/gallery1.webp",
  "../../public/images/gallery2.webp",
  "../../public/images/gallery3.webp",
  "../../public/images/gallery4.webp",
  "../../public/images/gallery5.webp",
  "../../public/images/gallery6.webp",
];

function Gallery() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <Row>
        {galleryImages.map((image, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={image}
                alt={`Gallery ${index + 1}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
