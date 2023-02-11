import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';

function PostForPlant({ photo }) {
  return (
    <Card>
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
