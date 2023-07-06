import { useState } from "react"
import axios from "axios";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
// const {
//     URL
// } = process.env;

export default function Creador(){
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [taller, setTaller] = useState({
        ropa: '',
        nombre: '',
        cantidad1: 0,
        cantidad2: 0,
        cantidad3: 0,
        cantidad4: 0,
        cantidad5: 0,
        cantidad6: 0,
        cantidad7: 0,
        fecha: '',
        color: '',
        color_persona: '',
        nota: '',
        lote: 0
    });
    const [accordion, setAccordion] = useState([]);

    const [talle, setTalle] = useState('');

    const variant = 'dark';

    const [numberTalle, setNumberTalle] = useState(1);
    const createTalle = (number, talle) => {
        return (
            <Accordion.Item eventKey={number-1} key={number-1}>
                <Accordion.Header>Talle {talle}</Accordion.Header>
                <Accordion.Body>
                <Row className="g-5">
                    <Col sm={12}>
                        <FloatingLabel controlId="floatingInputGrid" label="Cantidad">
                        <Form.Control type="number" name={`cantidad${number}`} placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                        </FloatingLabel>
                    </Col>
                </Row>
                </Accordion.Body>
            </Accordion.Item>
        )
    }

    const handleInputTalle = (e) => {
        setTalle(e.target.value);
    }

    const handleLess = () => {
        accordion.pop();
        setAccordion([...accordion])
        let number = numberTalle - 1;
        setNumberTalle(number);
    }

    const handleMore = () => {
        setAccordion([
            ...accordion,
            createTalle(numberTalle, talle)
        ]);
        let number = numberTalle + 1;   
        setNumberTalle(number);
        console.log(numberTalle);
    }

    const handleChange = (e) => {
        setTaller({
          ...taller,
          [e.target.name]: e.target.value,
        });
      };
    
    const handleSubmit = async (e) => {
        axios.post('http://localhost:3001/nuevo', taller)
        .then(() => {
            handleShow();
        })
    }


    return (
        <dvi>
            <br/><br/><br/><br/>
            <div style={{
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <form onSubmit={handleSubmit}>
                    <Card 
                        border={variant.toLowerCase()}
                        key={variant}
                        text='dark' 
                        style={{ width: '70vw'}}>
                        <Card.Header>NUEVO MODELO</Card.Header>
                        <Form.Floating className="mb-5">
                            <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            name="ropa"
                            required
                            placeholder="Taller"
                            onChange={(e) => {handleChange(e)}}
                            />
                            <label htmlFor="floatingInputCustom">Modelo</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            name="nombre"
                            required
                            placeholder="Modelo"
                            onChange={(e) => {handleChange(e)}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                            <label htmlFor="floatingPasswordCustom">Taller</label>
                        </Form.Floating>
                        <br/><br/>
                        <Row className="g-5">
                            <Col sm={4}>
                                <FloatingLabel controlId="floatingInputGrid" label="Fecha de egreso">
                                <Form.Control required type="date" name="fecha" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                </FloatingLabel>
                            </Col>
                            <Col sm={4}>
                                <FloatingLabel controlId="floatingInputGrid" label="Color">
                                <Form.Control required type="text" name="color" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                </FloatingLabel>
                            </Col>
                            <Col sm={4}>
                                <FloatingLabel controlId="floatingInputGrid" label="Lote">
                                <Form.Control required type="text" name="lote" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <br/><br/>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">
                                    <Button variant='primary' onClick={() => handleMore()}>+</Button>
                                    <Button variant='danger' onClick={() => handleLess()}>-</Button>
                                </InputGroup.Text>
                                <Form.Control
                                type="text"
                                onChange={e => handleInputTalle(e)}
                                placeholder="Talle"
                                aria-describedby="inputGroupPrepend"
                                required
                                />
                            </InputGroup>
                        <Accordion alwaysOpen>
                            {accordion.map(i => i)}
                        </Accordion>
                        <br/><br/>
                        <Card.Footer className="text-muted">
                            <Col>
                            <Button 
                                style={{ width: '12rem', alignItems: 'center'}} 
                                type="submit" variant="primary"
                            >
                                Guardar
                            </Button>
                            </Col>
                        </Card.Footer>
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
        </dvi>
    );
}