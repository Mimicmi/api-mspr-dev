import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Gardien de plantes</h1>
          <p className="text-center lead">Prenez soin de vos plantes et de celles de vos proches</p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={6}>
          <Image src="/plant-1.jpg" fluid />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Suivez l'état de santé des plantes</Card.Title>
              <Card.Text>
                Avec notre application, vous pouvez facilement suivre l'état de santé des plantes et recevoir des notifications sur les soins à apporter. Ajoutez vos plantes à votre compte, consultez leurs fiches d'informations et suivez leur croissance au fil du temps.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Partagez des conseils et des astuces</Card.Title>
              <Card.Text>
                Partagez vos connaissances en jardinage avec d'autres utilisateurs de l'application et recevez des commentaires et des conseils pour faire prospérer vos plantes. Consultez les publications des autres membres, réagissez et échangez avec eux pour en apprendre toujours plus.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Partagez des photos de vos plantes</Card.Title>
              <Card.Text>
                Partagez des photos de vos plantes avec d'autres utilisateurs de l'application et recevez des commentaires et des conseils pour les faire prospérer. Montrez vos plus belles plantes, partagez votre expérience et inspirez les autres utilisateurs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col className="text-center">
          <Button href='/sign-in' variant="success" size="lg">Créer un compte "Gardien de plantes" dès maintenant</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="text-center"><small>Développé par Antoine, Simon, Damien et Oussema</small></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;