import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';

function PostForPlant({ photo }) {

  const urlPhoto = () => {
    if(photo.image) {
      return "http://localhost:8090/upload/" + photo.image
    } else {
      return "https://cdn.shopify.com/s/files/1/0004/2654/1108/products/LIVRAISON_PLANTE_GRANDE_MONSTERA_DELICIOSA_2_800x.jpg?v=1622459168"
    }
  }

  return (
    <Card>
      <img src={urlPhoto()} />
      <Card.Body>
        <Card.Text>Poster par <Badge bg="primary">Antoine</Badge> après avoir gardé la plante.</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <ButtonGroup>
            <Button variant="outline-secondary">View <Badge bg="secondary">0</Badge></Button>
            <Button variant="outline-secondary">Delete</Button>
          </ButtonGroup>

          <small className="text-muted">9 mins</small>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PostForPlant;
