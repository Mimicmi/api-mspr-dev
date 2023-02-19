import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../../services/UserService'
import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';

function NavbarMenu() {

  const { role, updateRole, updateJwt } = useContext(UserContext);


  const logout = () => {
    localStorage.clear()
    updateRole(null);
    updateJwt(null);
    return <Navigate to="/login"></Navigate>
  };

  const renderNav = () => {
    switch (role) {
      case "ROLE_BOTANIST":
        return(<>
          <Nav.Link href="#deets">Les publications</Nav.Link>
          <Nav.Link href="/species">Les espèces</Nav.Link>
          <NavDropdown.Item onClick={logout}>Déconnexion</NavDropdown.Item>
          </>
        );
      case "ROLE_CLIENT":
        return(<>
          <Nav.Link href="/my-plants">Mes plantes</Nav.Link>
          <NavDropdown title="Annonces" id="collasible-nav-dropdown" href="/les-annonces">
            <NavDropdown.Item href="#action/3.1">Mes annonces</NavDropdown.Item>
            <NavDropdown.Item href="/les-annonces">Les annonces</NavDropdown.Item>
          </NavDropdown>
    
          <NavDropdown title="Mon profil" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Mes infos</NavDropdown.Item>
            <NavDropdown.Item onClick={logout}>Déconnexion</NavDropdown.Item>
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