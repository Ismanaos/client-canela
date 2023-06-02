import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getProceso } from '../../redux/actions';
import './Proceso.css'
import axios from 'axios';

export default function Procesos() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProceso());
  }, [dispatch]);

  const stateProceso = useSelector((state) => state.proceso);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/proceso/eliminar?id=${id}`)
      .then(() => {
        dispatch(getProceso());
      })
      .catch(error => {
        console.log("Error al eliminar la tarjeta:", error);
      });
  }

  const handleSubmit = (id, id_talleres) => {
    axios.post(`http://localhost:3001/proceso/reenviar?id=${id_talleres}`)
    axios.delete(`http://localhost:3001/proceso/eliminar?id=${id}`)
      .then(() => {
        dispatch(getProceso());
      })
      .catch(error => {
        console.log("Error al eliminar la tarjeta:", error);
      });
  }

  return (
    <div className="card-container">
      {stateProceso.length > 0 ? (
        <div className="card-container">
          {stateProceso.reverse().map((item, i) => (
              <div className="card-item" key={item.id}>
              <Card style={{ width: '18rem', backgroundColor: item.color_persona }}>
                <Button variant="danger" className="delete-button" onClick={() => handleDelete(item.id)}>X</Button>
                <Card.Header>{item.modelo}</Card.Header>
                <Card.Body>
                  <Card.Title>{item.taller}</Card.Title>
                  <Card.Text>
                    {item.nota}
                  </Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={(e) => handleSubmit(item.id ,item.id_talleres)}>Devolver fallas</Button>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <br/><br/><br/><br/>
          <img style={{ margin: '5%' }} alt='No hay nada' src='https://media.istockphoto.com/id/1330868056/es/vector/persona-que-tiene-una-pregunta-un-personaje-femenino-de-pie-en-una-pose-pensativa-sostiene.jpg?s=170667a&w=0&k=20&c=IcpcCmT8SkByi0Qre4CvjGJrkzqOiteXbLezK3ko88E=' />
        </div>
      )}
    </div>
  );
}