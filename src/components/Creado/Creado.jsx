import { useState } from "react"
import axios from "axios";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
// const {
//     URL
// } = process.env;

export default function Creador(){

    const [taller, setTaller] = useState({
        modelo: '',
        nombre: '',
        price: 0,
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
        fecha: '',
        color: '',
        color_persona: '',
        nota: ''
    });

    const handleChange = (e) => {
        setTaller({
          ...taller,
          [e.target.name]: e.target.value,
        });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/nuevo', taller)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Card style={{ width: '40rem', left: '26.4%', marginTop: '5%', marginBottom: '5%'}}>
                    <Form.Floating className="mb-5">
                        <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        name="modelo"
                        placeholder="name@example.com"
                        onChange={(e) => {handleChange(e)}}
                        />
                        <label htmlFor="floatingInputCustom">Nombre del Modelo</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        name="nombre"
                        placeholder="Password"
                        onChange={(e) => {handleChange(e)}}
                        />
                        <label htmlFor="floatingPasswordCustom">Nombre del Taller</label>
                    </Form.Floating>
                    <br/>
                    <Row className="g-5">
                        <Col sm={4}>
                            <FloatingLabel controlId="floatingInputGrid" label="Fecha de ingreso">
                            <Form.Control type="date" name="fecha" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={4}>
                            <FloatingLabel controlId="floatingInputGrid" label="Color">
                            <Form.Control type="text" name="color" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={4}>
                            <FloatingLabel controlId="floatingInputGrid" label="Precio Unitario">
                            <Form.Control type="text" name="price" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Talle 12</Accordion.Header>
                            <Accordion.Body>
                            <Row className="g-5">
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Cantidad">
                                    <Form.Control type="number" name="cantidad1" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Buenos">
                                    <Form.Control type="number" name="good1" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Fallas">
                                    <Form.Control type="number" name="bad1" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Talle 14</Accordion.Header>
                            <Accordion.Body>
                            <Row className="g-5">
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Cantidad">
                                    <Form.Control type="number" name="cantidad2" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Buenos">
                                    <Form.Control type="number" name="good2" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Fallas">
                                    <Form.Control type="number" name="bad2" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Talle 15</Accordion.Header>
                            <Accordion.Body>
                            <Row className="g-5">
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Cantidad">
                                    <Form.Control type="number" name="cantidad3" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Buenos">
                                    <Form.Control type="number" name="good3" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Fallas">
                                    <Form.Control type="number" name="bad3" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Talle 17</Accordion.Header>
                            <Accordion.Body>
                            <Row className="g-5">
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Cantidad">
                                    <Form.Control type="number" name="cantidad4" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Buenos">
                                    <Form.Control type="number" name="good4" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Fallas">
                                    <Form.Control type="number" name="bad4" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Talle 20</Accordion.Header>
                            <Accordion.Body>
                            <Row className="g-5">
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Cantidad">
                                    <Form.Control type="number" name="cantidad5" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Buenos">
                                    <Form.Control type="number" name="good5" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Fallas">
                                    <Form.Control type="number" name="bad5" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Talle 22</Accordion.Header>
                            <Accordion.Body>
                            <Row className="g-5">
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Cantidad">
                                    <Form.Control type="number" name="cantidad6" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid6" label="Buenos">
                                    <Form.Control type="number" name="good6" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={4}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Fallas">
                                    <Form.Control type="number" name="bad6" placeholder="name@example.com" onChange={(e) => {handleChange(e)}} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br/>
                    <FloatingLabel controlId="floatingTextarea2" label="Reporte (esto no se mostrará hasta enviar a proceso)">
                    <Form.Control
                      as="textarea"
                      placeholder="Deja un reporte aquí"
                      style={{ height: '100px' }}
                      name='nota'
                      onChange={(e) => {handleChange(e)}}
                    />
                  </FloatingLabel>
                        <Col>
                            <Form.Control
                                style={{marginLeft: '16rem', width: '8rem'}}
                                size="lg"
                                type="color"
                                name="color_persona"
                                id="exampleColorInput"
                                defaultValue="#563d7c"
                                title="Choose your color"
                                onChange={(e) => {handleChange(e)}}
                            />
                        </Col>
                </Card>
                <Button 
                    style={{ width: '12rem', alignItems: 'center'}} 
                    type="submit" variant="light"
                    >Guardar</Button>{' '}
                    <br/>
            </form>
        </div>
    );
}