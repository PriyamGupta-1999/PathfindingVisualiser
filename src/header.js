import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Path Finding Visualiser</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Visualise Dijkstra Now!</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <br />


        </div>



    );
}

export default Header;