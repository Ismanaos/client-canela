import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { getSearch } from '../../redux/actions';
import image from '../../assets/images/logo.png'
import './Navbar.css'

export default function NavSearch(){

  const dispatch = useDispatch();
  
  const [search, setSearch] = useState('');

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(search))
  }

    return (
      <Navbar fixed='top' bg="#d78b30" expand="lg">
        <Container fluid>
        <Navbar.Brand href="/modelos">
            <img
              src={image}
              width="140"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/modelos">Modelos</Nav.Link>
              <Nav.Link href="/talleres">Talleres</Nav.Link>
              <Nav.Link href="/buscador">Buscador</Nav.Link>
              <Nav.Link href="/crear">Crear</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                onChange={(e) => handleInputSearch(e)}
              />
              <Button variant="light" onClick={handleSubmit} type="submit">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}