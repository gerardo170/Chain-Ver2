import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormGroup,List,ModalFooter,Button } from "reactstrap";
import './Table.css';
import { useEffect } from "react";

function Trackings(props) {

  const [numero2, setnumero2] = useState({
    Cantidad_Pieza:0,
    Peso:0
  });
  const [Multiplicar, setMultiplicar] = useState();
  
  useEffect(() => {
    const {Cantidad_Pieza,Peso} = numero2;
    setMultiplicar(Number(Cantidad_Pieza)*Number(Peso));
  }, [numero2]);

  const Multi = (event)=>{
    const {name,value}=event.target;
    setnumero2({...numero2,[name]:value});
  }

    return (
        <>
      <form>
      <FormGroup>
      <List>
        Tracking 1:
        <input  type="Number" min={0}/>
  
        Tracking 2:
        <input  name='Peso' type="Number" min={0}/>
    
        Tracking 3:
        <input  type="Number" min={0}/>

        Tracking 4:
        <input  type="Number" min={0}/>
          </List>
      </FormGroup>
       
       <FormGroup>
        <List>
          <div>
       Empresa_Envio 1 :
        <select>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>

        Empresa_Envio 2 :
        <select>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>

        Empresa_Envio 3 :
        <select>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>
      
        Empresa_Envio 4 :
        <select>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>
        </div>
        </List>
       </FormGroup>

       <FormGroup>
        <List>
          <div>
          Cantidad Pieza
          <input  type="Number" name='Cantidad_Pieza'  min={0} onChange=
          {Multi} value={numero2.Cantidad_Pieza}/>

           Peso
          <input  type="Number" name='Peso'  min={0} onChange=
          {Multi} value={numero2.Peso}/>
        
          Costo Envio:
          <input  name='Costo_Envio' value={Multiplicar}/>
          </div>
        </List>
       </FormGroup>

       <FormGroup>
        <List>
          <div>
          Cantidad Pieza
          <input  type="Number" name='Cantidad_Pieza'  min={0} onChange=
          {Multi} value={numero2.Cantidad_Pieza}/>

           Peso
          <input  type="Number" name='Peso'  min={0} onChange=
          {Multi} value={numero2.Peso}/>
        
          Costo Envio:
          <input  name='Costo_Envio' value={Multiplicar}/>
          </div>
        </List>
       </FormGroup>

       <FormGroup>
        <List>
          <div>
          Cantidad Pieza
          <input  type="Number" name='Cantidad_Pieza'  min={0} onChange=
          {Multi} value={numero2.Cantidad_Pieza}/>

           Peso
          <input  type="Number" name='Peso'  min={0} onChange=
          {Multi} value={numero2.Peso}/>
        
          Costo Envio:
          <input  name='Costo_Envio' value={Multiplicar}/>
          </div>
        </List>
       </FormGroup>

       <FormGroup>
        <List>
          <div>
          Cantidad Pieza
          <input  type="Number" name='Cantidad_Pieza'  min={0} onChange=
          {Multi} value={numero2.Cantidad_Pieza}/>

           Peso
          <input  type="Number" name='Peso'  min={0} onChange=
          {Multi} value={numero2.Peso}/>
        
          Costo Envio:
          <input  name='Costo_Envio' value={Multiplicar}/>
          </div>
        </List>
       </FormGroup>
       
       <FormGroup>
       <List>
        <div>
        Status:
        <select className="form-select" aria-label="Default select example">
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>

        Status:
        <select className="form-select" aria-label="Default select example">
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>

        Status:
        <select className="form-select" aria-label="Default select example">
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>

        Status:
        <select className="form-select" aria-label="Default select example">
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>
        </div>
       </List>
      </FormGroup>

      <ModalFooter>
     <Button  color="danger">Cancelar</Button>
     <Button  color="primary">Guardar</Button>
     </ModalFooter>
      </form>
      </>
    );
}

export { Trackings };