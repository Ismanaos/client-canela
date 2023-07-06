import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTaller, getHistorials } from '../../redux/actions';
import './Modelos.css';
import axios from 'axios';
// const {
//     URL
// } = process.env;

export default function Talleres() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaller());
  }, [dispatch]);

  const [showHistorial, setShowHistorial] = useState(false);
  
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseHistorial = () => setShowHistorial(false);
  const handleShowHistorial = () => setShowHistorial(true);

  const stateTalleres = useSelector((state) => state.talleres);

  const stateHistorial = useSelector(state => state.historial)

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/eliminar?id=${id}`)
      .then(() => {
        dispatch(getTaller());
        handleClose();
        setShowToast(true);
      })
      .catch(error => {
        console.log("Error al eliminar la tarjeta:", error);
      });
  }
  const handleHistorial = async (id) => {
    handleShowHistorial();
    dispatch(getHistorials(id));
  }

  const popover =(nota) => {
      return (
      <Popover id="popover-basic">
        <Popover.Body>
          {nota}
        </Popover.Body>
      </Popover>
    );
  }
    
  
  return (
    <div className="card-container">
      {stateTalleres.length > 0 ? (
        <div className="card-container">
          {stateTalleres.reverse().map((item) => (
              <div className="card-item" key={item.id}>
              <Card style={{ width: '21rem', backgroundColor: '#d0aa96' }}>
              <Button variant="danger" className="delete-button" onClick={handleShow}>X</Button>
                <Card.Body>
                  <Card.Title>{item.ropa}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">{item.nombre} | Lote {item.lote}</Card.Subtitle>
                  <Card.Footer>Pedidos: {item.total}</Card.Footer>
                  <Card.Footer>Llegados: {item.cantTotal}</Card.Footer>
                  <Card.Footer>Fallados: {item.fallas}</Card.Footer>
                  <br/>
                  <Button bsPrefix='btn-agregar' href={`/agregar?id=${item.id}`} style={{ marginRight: '10px' }}>
                    Agregar
                  </Button>

                  <Button bsPrefix='btn-historial' className='btn-historial' onClick={() => handleHistorial(item.id)}>
                    Historial
                  </Button>
                </Card.Body>
              </Card>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Woohoo, estás por borrar un modelo!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Este modelo no se podrá recuperar y se perderan los datos (No el historial)
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(item.id)}>
                    Borrar
                  </Button>
                </Modal.Footer>
              </Modal>
              <div>
                <Modal size="lg" show={showHistorial} onHide={handleCloseHistorial}>
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Historial del modelo {item.ropa}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {stateHistorial.length > 0 ? <Table striped>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Fecha</th>
                          <th>Talles</th>
                          <th>Cantidad</th>
                          <th>Buenas</th>
                          <th>Falla</th>
                          <th>Local</th>
                          <th>Ingreso</th>
                          <th>Nota</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stateHistorial.map((item, i) => {
                          return item.talle?.split('|').map((items) => {
                            const obj = items?.split(' ')
                            if(obj[1] === '0'){
                              return null
                            }else{
                              return (<tr>
                                <td>{item.lote}</td>
                                <td>{item.fechaIngreso}</td>
                                <td>{obj[0]}</td>
                                <td>{obj[3]}</td>
                                <td>{obj[2]}</td>
                                <td>{obj[1]}</td>
                                <td>{obj[4]}</td>
                                <td>{item.vecesIngreso}</td>
                                <td>
                                <OverlayTrigger trigger="click" placement="right" overlay={popover(obj[5])}>
                                  <Button variant="primary">?</Button>
                                </OverlayTrigger>
                                </td>
                              </tr>)
                            }
                          })
                        })}
                      </tbody>
                    </Table> 
                    : <div>No hay nada</div>}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseHistorial}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
            </div>
          ))} 
              <ToastContainer
              fixed
                className="p-3"
                position='bottom-middle'
                style={{ zIndex: 1 }}
              >
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide bg='danger'>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">ADM CANELA</strong>
                </Toast.Header>
                <Toast.Body className='variant text-white'>Se ha borrado el modelo!</Toast.Body>
              </Toast>
              </ToastContainer>
        </div>
      ) : (
        <img style={{ margin: '5%' }} alt='No hay nada' src='https://media.istockphoto.com/id/1330868056/es/vector/persona-que-tiene-una-pregunta-un-personaje-femenino-de-pie-en-una-pose-pensativa-sostiene.jpg?s=170667a&w=0&k=20&c=IcpcCmT8SkByi0Qre4CvjGJrkzqOiteXbLezK3ko88E=' />
      )}
    </div>
  );
}