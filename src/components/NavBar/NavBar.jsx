import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { getSearch } from '../../redux/actions';

export default function NavSearch(){

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(search))
  }

    return (
      <Navbar fixed='top' bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand >ADM Canela</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/talleres">Talleres</Nav.Link>
              <Nav.Link href="/proceso">Proceso</Nav.Link>
              <Nav.Link href="/crear">Crear</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => handleInputSearch(e)}
              />
              <Button variant="light" name='search' onSubmit={(e) => handleSubmit(e)} >Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}