
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormGroup,List,ModalFooter,Button } from "reactstrap";
import './Table.css';

function Table(props) {
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
         Currier:
        <select  className="form-select" aria-label="Default select example">
        <option selected value="Seleccione Via"></option>
          <option value="WM import">WM import</option>
        </select>

        <label>
           o Ingrese otro currier:
          <input className="form-control" name='Otros' type="text"/>
           </label>
      </FormGroup>
      
      <FormGroup>
        Via:
        <select  className="form-select" aria-label="Default select example">
        <option selected value="Seleccione Via"></option>
          <option value="Maritima">Maritima</option>
          <option value="Aerea">Aerea</option>
        </select>
      </FormGroup>
      
      <FormGroup>
        <List>
          Cantidad_Pieza
        <input  type="Number" min={0}/>
  
          Peso:
        <input  name='Peso' type="Number" min={0}/>
    
          Costo_Envio:
        <input  type="Number" min={0}/>
          </List>
      </FormGroup>

      <FormGroup>
        <List>
          Monto de compras
        <input  type="Number" min={0}/>
  
          tasa de venta
        <input  name='Peso' type="Number" min={0}/>
    
          <Button>Total</Button>
          </List>
      </FormGroup>

      <FormGroup>
        <List>
          abono
        <input  type="Number" min={0}/>

          <Button>Restar</Button>
          </List>
      </FormGroup>
      
      <FormGroup>
        Status:
        <select className="form-select" aria-label="Default select example">
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>
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