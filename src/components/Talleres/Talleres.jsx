import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTaller } from '../../redux/actions';
import './Talleres.css';
import axios from 'axios';
// const {
//     URL
// } = process.env;

export default function Talleres() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaller());
  }, [dispatch]);

  const stateTalleres = useSelector((state) => state.talleres);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/eliminar?id=${id}`)
      .then(() => {
        dispatch(getTaller());
      })
      .catch(error => {
        console.log("Error al eliminar la tarjeta:", error);
      });
  }
  const handleSubmit = async (id) => {
    axios.post(`http://localhost:3001/proceso/nuevo?id=${id}`)
  }
  console.log(stateTalleres)
  return (
    <div className="card-container">
      {stateTalleres.length > 0 ? (
        <div className="card-container">
          {stateTalleres.reverse().map((item) => (
              <div className="card-item" key={item.id}>
              <Card style={{ width: '21rem', backgroundColor: item.color_persona }}>
                <Button variant="danger" className="delete-button" onClick={() => handleDelete(item.id)}></Button>
                <Card.Body>
                  <Card.Title>{item.modelo}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.nombre}</Card.Subtitle>
                  
                  {item.talle.split('|').map((talles, i) =>{
                    const obj = talles.split(' ');
                    if(obj[4] === 0)obj[4]='No';
                    if(obj[3] === 0)obj[3]='No';
                    if(obj[2] === 0)obj[2]='No';
                    return (
                      <Accordion >
                        <Accordion.Item eventKey={i}>
                          <Accordion.Header>{`Talle ${obj[1]}`}</Accordion.Header>
                          <Accordion.Body>
                            <ListGroup horizontal='xl'>
                                <ListGroup.Item>{`Fallas ${obj[2]}`}</ListGroup.Item>
                                <ListGroup.Item>{`Buenas ${obj[3]}`}</ListGroup.Item>
                                <ListGroup.Item>{`Cantidad ${obj[4]}`}</ListGroup.Item>
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    )
                  })}
                  <Card.Text>
                    Fecha de llegada: {item.fecha}
                  </Card.Text>
                  <Card.Text>
                    Precio unitario: {item.price}
                  </Card.Text>
                  <Card.Text>
                    Saldo deudor: 20
                  </Card.Text>
                    <Button variant="primary" onClick={(e) => handleSubmit(item.id)}>Enviar Errores</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <img style={{ margin: '5%' }} alt='No hay nada' src='https://media.istockphoto.com/id/1330868056/es/vector/persona-que-tiene-una-pregunta-un-personaje-femenino-de-pie-en-una-pose-pensativa-sostiene.jpg?s=170667a&w=0&k=20&c=IcpcCmT8SkByi0Qre4CvjGJrkzqOiteXbLezK3ko88E=' />
      )}
    </div>
  );
}