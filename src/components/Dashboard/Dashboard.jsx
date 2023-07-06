import NavbarSide from "./NavSide";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getHistorials, getTalleres } from '../../redux/actions';

import './Dashboard.scss'

export default function Dashboard(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTalleres());
    }, [dispatch]);

    const handleHistorial = (id) => {
        dispatch(getHistorials(id));
    }
    const stateHistorial = useSelector(state => state.historial);
    const stateTalleres = useSelector(state => state.talleresNombre);
    return (
        <div className="Dashboard">
            <NavbarSide/>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                {stateTalleres ? stateTalleres.map(item => {
                    return (
                        <Tab eventKey={item.nombre} title={item.nombre}>
                            <Row>
                            <Col key='primary' sm={4} md={4} lg={4}>
                                    <Card
                                        bg='primary'
                                        text={'primary' === 'light' ? 'dark' : 'white'}
                                        style={{ width: '27rem', height: '8rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Header>Exitos</Card.Header>
                                        <Card.Body>
                                        <Card.Text>
                                            { item.exitoTotal ? 
                                            <div>
                                                {item.exitoTotal}% 
                                                <ProgressBar variant="info" now={item.exitoTotal} />
                                            </div>
                                            : 'Aún no definido'}
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                    <Col key='danger' sm={4} md={4} lg={4}>
                                    <Card
                                        bg='danger'
                                        text={'danger' === 'light' ? 'dark' : 'white'}
                                        style={{ width: '27rem', height: '8rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Header>Errores</Card.Header>
                                        <Card.Body>
                                        <Card.Text>
                                            { item.errorTotal ? 
                                            <div>
                                                {item.errorTotal}%
                                                <ProgressBar variant="warning" now={item.errorTotal} />
                                            </div>
                                             : 'Aún no definido'}
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                    <Col key='secondary' sm={4} md={4} lg={4}>
                                    <Card
                                        bg='secondary'
                                        text={'secondary' === 'light' ? 'dark' : 'white'}
                                        style={{ width: '27.4rem', height: '8rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Header>Totales</Card.Header>
                                        <Card.Body>
                                        <Card.Text>
                                            { item.cantTotal ? `${item.cantTotal}` : 'Aún no definido'}
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                            </Row>
                                <br/>
                                <Table striped>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Modelo</th>
                                        <th>Cantidad</th>
                                        <th>Buenas</th>
                                        <th>Falla</th>
                                        <th>Fecha</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {item.ropas.map((ropa, i) => {                                    
                                            return (<tr>
                                            <td>{ropa.lote}</td>
                                            <td>{ropa.nombre}</td>
                                            <td>{ropa.cantidad ? ropa.cantidad : 'Aún no hay nada'}</td>
                                            <td>{ropa.exito ? ropa.exito : 'Aún no hay nada'}</td>
                                            <td>{ropa.fallas ? ropa.fallas : 'Aún no hay nada'}</td>
                                            <td>{ropa.fecha}</td>
                                            </tr>)
                                    })}
                                    </tbody>
                                </Table> 
                            {item.ultimaFecha}
                        </Tab>
                    )
                })
                    :null
                }
                </Tabs>
        </div>
    )
};