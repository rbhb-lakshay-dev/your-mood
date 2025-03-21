// import { Container, Row, Col, Card } from "react-bootstrap";

// const menuItems = [
//   {
//     id: 1,
//     name: "Espresso",
//     price: "$3.00",
//     image: "../../public/images/espresso.webp",
//   },
//   {
//     id: 2,
//     name: "Cappuccino",
//     price: "$4.00",
//     image: "../../public/images/cappuccino.webp",
//   },
//   {
//     id: 3,
//     name: "Latte",
//     price: "$4.50",
//     image: "../../public/images/latte.webp",
//   },
//   {
//     id: 4,
//     name: "Croissant",
//     price: "$2.50",
//     image: "../../public/images/croissant.webp",
//   },
//   {
//     id: 5,
//     name: "Cheesecake",
//     price: "$5.00",
//     image: "../../public/images/cheesecake.webp",
//   },
//   {
//     id: 6,
//     name: "Muffin",
//     price: "$3.50",
//     image: "../../public/images/muffin.webp",
//   },
// ];

// function Menu() {
//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Our Menu</h2>
//       <Row>
//         {menuItems.map((item) => (
//           <Col key={item.id} md={4} className="mb-4">
//             <Card className="h-100 text-center">
//               <Card.Img variant="top" src={item.image} alt={item.name} />
//               <Card.Body>
//                 <Card.Title>{item.name}</Card.Title>
//                 <Card.Text>{item.price}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Menu;
import { Container, Row, Col, Card } from "react-bootstrap";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: "$3.00",
    image: "../../public/images/espresso.webp",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "$4.00",
    image: "../../public/images/cappuccino.webp",
  },
  {
    id: 3,
    name: "Latte",
    price: "$4.50",
    image: "../../public/images/latte.webp",
  },
  {
    id: 4,
    name: "Croissant",
    price: "$2.50",
    image: "../../public/images/croissant.webp",
  },
  {
    id: 5,
    name: "Cheesecake",
    price: "$5.00",
    image: "../../public/images/cheesecake.webp",
  },
  {
    id: 6,
    name: "Muffin",
    price: "$3.50",
    image: "../../public/images/muffin.webp",
  },
];

function Menu() {
  return (
    <Container className="mt-5 text-center">
      <h2>Our Menu</h2>
      <Row>
        {menuItems.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
