import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <Container>
        <p>&copy; {new Date().getFullYear()} Your Mood. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
