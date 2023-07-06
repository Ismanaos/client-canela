import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { getParams, getHistorials } from '../../redux/actions';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';


export default function Detalle(){
    const dispatch = useDispatch();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const taller = useSelector(state => state.taller);
    const historial = useSelector(state => state.historial)
    useEffect(() => {
        dispatch(getParams(id));
        dispatch(getHistorials(id))
    }, [dispatch, id]);
    return (<div>
        <br/>
        {taller && taller.id === id ? 
            <div
                style={{
                width: '98vw', // Ancho al 100% del viewport
                height: '96vh', // Altura al 100% del viewport
                display: 'flex', // Mostrar elementos en línea
                alignItems: 'center', // Centrar verticalmente los elementos
                justifyContent: 'center', // Centrar horizontalmente los elementos
                }}
            >
                <Card style={{ width: '90vw', height: '85vh' }}>
                <Card.Body>
                    <Card.Title>{taller.modelo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{taller.nombre}</Card.Subtitle>
                    <Card.Text>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Información">
                            <Card.Title>Cantidad {taller.total} | Falta {taller.total - taller.cantTotal}</Card.Title>
                            <ListGroup key='xl' horizontal='xl' style={{
                                width: '88vw', // Ancho al 100% del viewport
                                height: '80vh', // Altura al 100% del viewport
                                display: 'flex', // Mostrar elementos en línea
                                alignItems: 'center', // Centrar verticalmente los elementos
                                justifyContent: 'center', // Centrar horizontalmente los elementos
                            }} className="my-2">
                            <ListGroup.Item>Pedidas: {taller.total}</ListGroup.Item>
                            <ListGroup.Item>Buenas: {taller.buenas}</ListGroup.Item>
                            <ListGroup.Item>Fallas: {taller.fallas}</ListGroup.Item>
                            <ListGroup.Item>Reparadas: {taller.repLocal}</ListGroup.Item>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="historial" title="Historial">
                            <Card.Subtitle className="mb-2 text-muted">Historial</Card.Subtitle>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Talle</th>
                                        <th>Cantidad</th>
                                        <th>Buenas</th>
                                        <th>Fallas</th>
                                        <th>Rep. Local</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                historial ? 
                                historial.reverse().map(item => {
                                    if(item.talle){
                                        const tallesArr = item.talle.split('|')
                                        return tallesArr.map(talle => {
                                            const talles = talle.split(' ')
                                            let flag = true;
                                            if(talles[4] === '0'){
                                                flag = false;
                                            }
                                            if(flag){
                                                return (
                                                        <tr>
                                                            <td>{item.fechaIngreso}</td>
                                                            <td>{talles[1]}</td>
                                                            <td>{talles[4]}</td>
                                                            <td>{talles[3]}</td>
                                                            <td>{talles[2]}</td>
                                                            <td>{talles[2]}</td>
                                                        </tr> 
                                                )
                                            }
                                            return false
                                        })
                                    }return false;
                                    }) : null
                                }
                                </tbody>
                            </Table>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Cantidad Ingreso</th>
                                        <th>Cantidad Fallas</th>
                                        <th>Veces Ingreso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    historial ? 
                                    historial.reverse().map(item => {
                                        console.log(historial)
                                        if(item.tipo === 'DEVOLUCION'){
                                            return (
                                                    <tr>
                                                        <td>{item.fechaIngreso}</td>
                                                        <td>{item.cantTotal}</td>
                                                        <td>{item.fallas}</td>
                                                        <td>{item.vecesIngreso}</td>
                                                    </tr> 
                                            )
                                        }
                                        return false;
                                    }) : null
                                }
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                        <br/>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div> : 
        <h1>Cargando</h1>}
    </div>)

}