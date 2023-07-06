import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getFechaTalleres } from '../../redux/actions';

export default function Buscador(){

    const dispatch = useDispatch();
    
    const [search, setSearch] = useState({
        fecha1:0,
        fecha2:0
    });

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    }

    const stateTalleres = useSelector((state) => state.allTalleres);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(stateTalleres)
        dispatch(getFechaTalleres(search.fecha1, search.fecha2))
    }
    
    return (
        <div>
            <br/><br/><br/><br/><br/><br/>
            <Card>
                <Card.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}><br/>
                        <FloatingLabel controlId="floatingInputGrid" label="Fecha Inicio">
                            <Form.Control type="date" name="fecha1" onChange={e => handleChange(e)} placeholder="name@example.com" />
                        </FloatingLabel><br/>
                        <FloatingLabel controlId="floatingInputGrid" label="Fecha Final">
                            <Form.Control type="date" name="fecha2" onChange={e => handleChange(e)} placeholder="name@example.com" />
                        </FloatingLabel><br/>
                        <Button type='submit'>Buscar</Button>
                    </Form>
                    {stateTalleres.length > 0 ? 
                        <div>
                            <Table striped>
                            <thead>
                                <tr>
                                <th>Modelo</th>
                                <th>Cantidad de Ingresos</th>
                                <th>Errores</th>
                                <th>Exito</th>
                                <th>Último Taller</th>
                                <th>Última fecha que ingreso</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stateTalleres.map(item => {
                                    return (
                                        <tr>
                                        <td>{item.nombre}</td>
                                        <td>{item.cantidad ? item.cantidad : 'Aún no ingreso nada' }</td>
                                        <td>{item.fallas ? `${item.fallas}%` : 'No hay nada' }</td>
                                        <td>{item.exito ? `${item.exito}%` : 'No hay nada' }</td>
                                        <td>{item.taller ? `${item.taller}` : 'No hay nada' }</td>
                                        <td>{item.fecha ? item.fecha : 'Sin fecha' }</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </Table>
                        </div>
                    : null}
                </Card.Body>
            </Card>
        </div>
    );
}