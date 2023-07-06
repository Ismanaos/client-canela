import { useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';

export default function Agregado() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const [taller, setTaller] = useState({
    good1: 0,
    bad1: 0,
    cantidad1: 0,
    good2: 0,
    bad2: 0,
    cantidad2: 0,
    good3: 0,
    bad3: 0,
    cantidad3: 0,
    good4: 0,
    bad4: 0,
    cantidad4: 0,
    good5: 0,
    bad5: 0,
    cantidad5: 0,
    good6: 0,
    bad6: 0,
    cantidad6: 0,
    good7: 0,
    bad7: 0,
    cantidad7: 0,
    repLocal1: 0,
    repLocal2: 0,
    repLocal3: 0,
    repLocal4: 0,
    repLocal5: 0,
    repLocal6: 0,
    repLocal7: 0,
    talle1: 0,
    talle2: 0,
    talle3: 0,
    talle4: 0,
    talle5: 0,
    talle6: 0,
    talle7: 0,
    nota1: '',
    nota2: '',
    nota3: '',
    nota4: '',
    nota5: '',
    nota6: '',
    nota7: '',
    fecha: '',
    color: '',
    color_persona: '',
    nota: '',
    group1: '',
  });

  const [accordion, setAccordion] = useState([]);
  const [talle, setTalle] = useState('');
  const [numberTalle, setNumberTalle] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaller(prevTaller => ({
      ...prevTaller,
      [name]: value,
    }));
  };

  const createTalle = (number, talle) => {
    const talleKey = `talle${number}`;
    return (
      <Accordion.Item eventKey={number - 1} key={number - 1}>
        <Accordion.Header>Talle {talle}</Accordion.Header>
        <Accordion.Body>
          <Row className="g-5">
            <Col sm={3}>
              <FloatingLabel controlId="floatingInputGrid" label="Cantidad">
                <Form.Control type="number" name={`cantidad${number}`} placeholder="name@example.com" onChange={handleChange} />
              </FloatingLabel>
            </Col>
            <Col sm={3}>
              <FloatingLabel controlId="floatingInputGrid" label="Buenos">
                <Form.Control type="number" name={`good${number}`} placeholder="name@example.com" onChange={handleChange} />
              </FloatingLabel>
            </Col>
            <Col sm={3}>
              <FloatingLabel controlId="floatingInputGrid" label="Fallas">
                <Form.Control type="number" name={`bad${number}`} placeholder="name@example.com" onChange={handleChange} />
              </FloatingLabel>
            </Col>
            <Col sm={3}>
              <FloatingLabel controlId="floatingInputGrid" label="Reparación Local">
                <Form.Control type="text" name={`repLocal${number}`} placeholder="name@example.com" onChange={handleChange} />
              </FloatingLabel>
            </Col>
            <FloatingLabel controlId="floatingTextarea2">
              <Form.Control
                as="textarea"
                placeholder="Deja un reporte aquí"
                style={{ height: '100px' }}
                name={`nota${number}`}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    );
  };

  const handleInputTalle = (e) => {
    setTalle(e.target.value);
  };

  const handleMore = () => {
    setTaller(prevTaller => ({
      ...prevTaller,
      [`talle${numberTalle}`]: talle,
    }));

    setAccordion([
      ...accordion,
      createTalle(numberTalle, talle)
    ]);

    setNumberTalle(numberTalle + 1);
  };

  const handleLess = () => {
    accordion.pop();
    setAccordion([...accordion]);
    setNumberTalle(numberTalle - 1);
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    e.preventDefault();
    await axios.post(`http://localhost:3001/historial/edithTaller?id=${id}`, taller)
    handleShow();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <br/><br/><br/><br/><br/><br/>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Card style={{ width: '80vw' }}>
            <br/>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Ingreso"
                name="group1"
                type='radio'
                id={`inline-radio-1`}
                onChange={handleChange}
                value='Ingreso'
              />
              <Form.Check
                inline
                label="Reingreso"
                name="group1"
                type='radio'
                id={`inline-radio-2`}
                onChange={handleChange}
                value='Reingreso'
              />
              <Form.Check
                inline
                label="Segundo reingreso"
                name="group1"
                type='radio'
                id={`inline-radio-3`}
                onChange={handleChange}
                value='Segundo Reingreso'
              />
            </div>
            <br />
            <Row className="g-5">
              <Col sm={12}>
                <FloatingLabel controlId="floatingInputGrid" label="Fecha de ingreso">
                  <Form.Control type="date" name="fecha" placeholder="name@example.com" onChange={handleChange} />
                </FloatingLabel>
              </Col>
            </Row>
            <br/><br />
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <Button type="click" onClick={handleMore}>+</Button>
                  <Button variant='danger' type="click" onClick={handleLess}>-</Button>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  onChange={handleInputTalle}
                  placeholder="Talle"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor elige un talle.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Accordion alwaysOpen>
              <br/>
              {accordion.map(i => i)}
            </Accordion>
            <br /><br /><br />
            {/* <label>Reporte (esto no se mostrará hasta enviar a proceso)</label>
            <FloatingLabel controlId="floatingTextarea2" label="Reporte">
              <Form.Control
                as="textarea"
                placeholder="Deja un reporte aquí"
                style={{ height: '100px' }}
                name='nota'
                onChange={handleChange}
              />
            </FloatingLabel> */}
            <br />
            <Col>
            <Button
                style={{ width: '12rem', alignItems: 'center' }}
                type="submit" variant="light"
            >
                Guardar
            </Button>
            </Col>
          </Card>
        </form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Se agregó el modelo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="secondary" href="/modelos">
            Volver
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agregar más
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}