
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormGroup,List,ModalFooter,Button } from "reactstrap";
import './Table.css';
import { useEffect } from "react";

function Table(props) {

  const [numero, setnumero] = useState({
    MontoDeCompras:0,
    MontoDeEnvios:0,
    TasaVenta:0
  });
  const [suma, setsuma] = useState();
  
  useEffect(() => {
    const {MontoDeCompras,TasaVenta} = numero;
    setsuma(Number(MontoDeCompras)+Number(TasaVenta));
  }, [numero]);

  const sumar = (event)=>{
    const {name,value}=event.target;
    setnumero({...numero,[name]:value});
  }



    return (
        <>
      <form>
      <FormGroup>
        Numero de Pedido:
        <input className="form-control" name='Numero de Pedido' 
          type="number"/>
      </FormGroup>

      <FormGroup>
          Fecha:
        <input className="form-control" name='Fecha' type="date"/>
      </FormGroup>
      
      <FormGroup>
          Cliente:
        <input className="form-control" name='Cliente' />
      </FormGroup>
      
      <FormGroup>
         Empresa_Envio:
        <select  name="Empresa_Envio" className="form-select" aria-label="Default select example" >
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>
      </FormGroup>
      
      <FormGroup>
         Currier:
        <select  className="form-select" aria-label="Default select example">
        <option selected value="Seleccione Currier"></option>
          <option value="WM import">WM import</option>
        </select>

        <label>
           o Ingrese otro currier:
          <input className="form-control" name='Otros' type="text"/>
           </label>
      </FormGroup>
      
      <FormGroup>
        Via:
        <select className="form-select" aria-label="Default select example">
        <option selected value="Seleccione Via"></option>
          <option name='Maritima'>Maritima</option>
          <option name= 'Aereo' >Aereo</option>
        </select>
      </FormGroup>

      <FormGroup>
        <List>
          Monto de compras
        <input  type="Number" name="MontoDeCompras" min={0} onChange=
        {sumar} value={numero.MontoDeCompras} />
  
          Tasa de Venta
        <input  name='TasaVenta' type="Number" min={0} onChange=
        {sumar} value={numero.TasaVenta} />
          
          SubTotal
          <input name='total1' value={suma}/>
          </List>
      </FormGroup>

      <FormGroup>
        <List>
        Monto de Envio:
        <input  type="Number" name="MontoDeEnvio" min={0}/>

           Total
          <input name='total2'/>
        </List>
      </FormGroup>

      <FormGroup>
        <List>
          Abono
        <input  type="Number" min={0}/>

        Total
          <input name='total2'/>
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

export { Table };