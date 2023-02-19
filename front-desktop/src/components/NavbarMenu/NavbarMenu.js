import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../../services/UserService'
import React, { useState, useContext } from 'react';

function NavbarMenu() {

  const { role, jwt } = useContext(UserContext);
  const [idRole, setIdRole] = useState(() => {
    if(role && jwt) {
      switch (role) {
        case "ROLE_BOTANIST":
          return 2;
        case "ROLE_CLIENT":
          return 1;
        default:
          return 0;
      }
    }
  })

  const renderNav = () => {
    switch (idRole) {
      case 2:
        return(<>
          <Nav.Link href="#deets">Les publications</Nav.Link>
          <Nav.Link href="/species">Les espèces</Nav.Link>
          <NavDropdown.Item href="#action/3.2">Déconnexion</NavDropdown.Item>
          </>
        );
      case 1:
        return(<>
          <Nav.Link href="/my-plants">Mes plantes</Nav.Link>
          <NavDropdown title="Annonces" id="collasible-nav-dropdown" href="/les-annonces">
            <NavDropdown.Item href="#action/3.1">Mes annonces</NavDropdown.Item>
            <NavDropdown.Item href="/les-annonces">Les annonces</NavDropdown.Item>
          </NavDropdown>
    
          <NavDropdown title="Mon profil" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Mes infos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Déconnexion</NavDropdown.Item>
          </NavDropdown>
        
        </>
        )
      default:
        return(<>
          <Nav.Link href="/login"><Button variant="primary">Connexion</Button></Nav.Link>
          <Nav.Link href="/sign-in"><Button variant="light">Inscription</Button></Nav.Link>
          </>
        )
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand href="/">Arrosa-je</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav> 
          { renderNav() }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;