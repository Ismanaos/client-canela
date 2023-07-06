import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getProceso, getHistorials } from '../../redux/actions';
import './Talleres.scss'
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

export default function Procesos() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const objeto = [{nombre: 'nombre 1', pasiv: true}, {nombre: 'nombre 2', pasiv: false}, {nombre: 'nombre 3', pasiv: true}, {nombre: 'nombre 4', pasiv: true}, {nombre: 'nombre 5', pasiv: true}, {nombre: 'nombre 6', pasiv: false},]

  return (
    <div>
      {true ? (
        <div>
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
            >
            {objeto.map(item => {
              return (
                <Tab eventKey={item.nombre} title={item.nombre} disabled={!item.pasiv}>
                  <br/><br/>
                  <Dashboard/>
                </Tab>
              )
            })}
          </Tabs>
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