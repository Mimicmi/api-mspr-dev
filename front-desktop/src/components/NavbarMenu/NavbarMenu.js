import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import './NavbarMenu.css'

import { UserContext } from '../../services/UserService'
import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';

function NavbarMenu() {

  const { role, updateRole, updateJwt } = useContext(UserContext);


  const logout = () => {
    sessionStorage.clear()
    updateRole(null);
    updateJwt(null);
    return <Navigate to="/login"></Navigate>
  };

  const renderNav = () => {
    switch (role) {
      case "ROLE_BOTANIST":
        return(<>
          <Nav.Link href="/post">Publications</Nav.Link>
          <Nav.Link href="/species">Espèces</Nav.Link>
          

          <NavDropdown title="Mon profil" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/account">Mes infos</NavDropdown.Item>
            <NavDropdown.Item onClick={logout}>Déconnexion</NavDropdown.Item>
          </NavDropdown>
          </>
        );
      case "ROLE_CLIENT":
        return(<>
          <Nav.Link href="/my-plants">Mes plantes</Nav.Link>
          <NavDropdown title="Annonces" id="collasible-nav-dropdown" href="/les-annonces">
            <NavDropdown.Item href="/les-annonces/to-me">Mes annonces</NavDropdown.Item>
            <NavDropdown.Item href="/les-annonces">Les annonces</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Les Publications" id="collasible-nav-dropdown" href="/post">
            <NavDropdown.Item  href="/post">Publications</NavDropdown.Item>
            <NavDropdown.Item  href="/post/add">Ajouter</NavDropdown.Item>
          </NavDropdown>
    
          <NavDropdown title="Mon profil" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/account">Mes infos</NavDropdown.Item>
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
        <Navbar.Brand href="/" className='nom-projet'>A-rosa-je</Navbar.Brand>
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