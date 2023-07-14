import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Tooltip from 'react-bootstrap/Tooltip';
import { Col, Form, Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import imagenEditar from '../../assets/images/editar.png'
import imagenHistorial from '../../assets/images/expediente.png'
import imagenComprobante from '../../assets/images/cheque.png'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContabilidad, getHistorialContabilidad } from '../../redux/actions';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function Contabilidad(){
    const [asfJor, setAsdJor] = useState('')
    const useless = 'Pilar2022'
    const [contabilidad, setContabilidad] = useState({
        lote: 0,
        cantidad: 0,
        precioUnitario: 0,
    });
    const [newContabilidad, setNewContabilidad] = useState({
        pagado: 0,
    })

    const handleChangeCreate = (e) => {
        setContabilidad({
            ...contabilidad,
            [e.target.name]: e.target.value,
        })
    }

    const handlePass = (e) => {
        setAsdJor(e.target.value);
    }

    const handleChangeEditar = (e) => {
        setNewContabilidad({
            ...contabilidad,
            [e.target.name]: e.target.value,
        })
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showHistorial, setShowHistorial] = useState(false);

    const handleCloseHistorial = () => setShowHistorial(false);
    const handleShowHistorial = () => setShowHistorial(true);

    const [showEditar, setShowEditar] = useState(false);

    const handleCloseEditar = () => setShowEditar(false);
    const handleShowEditar = () => setShowEditar(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContabilidad())
    }, []);

    const stateContabilidad = useSelector(state => state.contabilidad);
    const stateHistorial = useSelector(state => state.contabilidadHistorial);

    const handleHistorial = async(id) => {
        dispatch(getHistorialContabilidad(id));
        handleShowHistorial();
    }

    const handleSubmitANewContabilidad = async(e, lote) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/contabilidad/editar?lote=${lote}`, newContabilidad)
        .then(() => {
            dispatch(getContabilidad())
            handleCloseEditar()
        });
    }

    const handleSubmitAContabilidad = async(e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/contabilidad', contabilidad)
        .then(() => {
            dispatch(getContabilidad())
            handleClose()
        });
    }

    return(
        <div>
            <br/><br/><br/><br/>
            {asfJor === useless ? <div>
                <Row>
                    <Col>
                    </Col>
                    <Col md="auto">
                        <Button variant='secondary' onClick={handleShow}>
                            Agregar 
                        </Button>
                    </Col>
                    <Col xs lg='2'>
                    <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="button-tooltip-2">Comprobantes</Tooltip>}
                            >
                            {({ ref, ...triggerHandler }) => (
                                <Button
                                variant="danger"
                                {...triggerHandler}
                                className="d-inline-flex align-items-center"
                                >
                                <label>Resumen</label>
                                <Image
                                    ref={ref}
                                    src={imagenComprobante}
                                />
                                </Button>
                            )}
                            </OverlayTrigger>
                    </Col>
                </Row>
                <br/>
                {stateContabilidad.length > 0 ? 
                        <Table striped bordered hover variant='dark'>
                            <thead>
                                <tr>
                                <th>Lote</th>
                                <th>Estado</th>
                                <th>Fecha</th>
                                <th>Tarifa</th>
                                <th>Cant.</th>
                                <th>Total</th>
                                <th>Faltante</th>
                                <th>Movimientos</th>
                                <th>Editar</th>
                                </tr>
                            </thead>
                        {stateContabilidad.map(item => {
                            return(
                                <>
                            <tbody>
                                <tr>
                                <td>{item.lote}</td>
                                <td>{item.concepto}</td>
                                <td>{item.fecha}</td>
                                <td>${item.tarifa}</td>
                                <td>{item.cantidad}</td>
                                <td>${item.total}</td>
                                <td>${item.faltante}</td>
                                <td>
                                    <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="button-tooltip-2">Movimiento del lote</Tooltip>}
                                    >
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                        variant="light"
                                        {...triggerHandler}
                                        className="d-inline-flex align-items-center"
                                        onClick={() => handleHistorial(item.lote)}
                                        >
                                        <Image
                                            ref={ref}
                                            src={imagenHistorial}
                                        />
                                        </Button>
                                    )}
                                    </OverlayTrigger>
                                </td>
                                <td>
                                    <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="button-tooltip-2">Pagar lote</Tooltip>}
                                    >
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                        variant="light"
                                        onClick={handleShowEditar}
                                        {...triggerHandler}
                                        className="d-inline-flex align-items-center"
                                        >
                                        <Image
                                            ref={ref}
                                            src={imagenEditar}
                                        />
                                        </Button>
                                    )}
                                    </OverlayTrigger>
                                </td>
                                </tr>
                            </tbody>
                            <Modal show={showHistorial} onHide={handleCloseHistorial}>
                                <Modal.Header closeButton>
                                <Modal.Title>Historial</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {stateHistorial.length > 0 ? 
                                            <Table striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                    <th>Fecha</th>
                                                    <th>Pagado</th>
                                                    </tr>
                                                </thead>
                                            {stateHistorial.map(itemHistorial => {
                                                return(
                                                    <tbody>
                                                        <tr>
                                                        <td>{itemHistorial.fechaIngreso}</td>
                                                        <td>{itemHistorial.pagado}</td>
                                                        </tr>
                                                    </tbody>

                                                )
                                            })}
                                        </Table>

                                        : <Modal.Body>No hay nada</Modal.Body>
                                    }
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseHistorial}>
                                    Cerrar
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={showEditar} onHide={handleCloseEditar}>
                                <Modal.Header closeButton>
                                <Modal.Title>Editar tabla</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <form onSubmit={(e) => handleSubmitANewContabilidad(e, item.lote)}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Pagado</Form.Label>
                                        <Form.Control type="number" name='pagado' onChange={e => handleChangeEditar(e)} placeholder="Pagado" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Guardar
                                    </Button>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseEditar}>
                                    Cerrar
                                </Button>
                                </Modal.Footer>
                            </Modal></>)})}
                        </Table>
                    : null }

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Agregar tabla</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form onSubmit={handleSubmitAContabilidad}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Lote</Form.Label>
                            <Form.Control type="number" name='lote' onChange={e => handleChangeCreate(e)} placeholder="Lote" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" name='precioUnitario' onChange={e => handleChangeCreate(e)} placeholder="Precio Unitario" />
                            <Form.Text className="text-muted">
                            Se calculará con la cantidad.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control type="number" name='cantidad' onChange={e => handleChangeCreate(e)} placeholder="Cantidad" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>
                </div> 
                : 
                <>
                <br/><br/><br/><br/>
                <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                <Card border="success" style={{ width: '29rem' }}>
                    <Card.Header>Ingresando a Contabilidad</Card.Header>
                    <Card.Body>
                        <Card.Title>
                        <Spinner animation="grow" variant="success" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </Spinner>
                        </Card.Title>
                        <Form.Label htmlFor="inputPassword5">Contraseña</Form.Label>
                        <Form.Control
                        type="password"
                        id="inputPassword5"
                        onChange={(e) => handlePass(e)}
                        aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                        Solo se puede ingresar conteniendo la contraseña.
                        </Form.Text>
                    </Card.Body>
                </Card>
                </div>
                </>
            }
        </div>
    )
}