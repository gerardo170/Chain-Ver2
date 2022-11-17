import React from "react";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Sidebar from '../src/Components/Sidebar';
import Consulta from '../src/pages/Consulta';
import { Report } from '../src/pages/Report';
import { Table } from '../src/pages/Table';
import { Trackings } from '../src/pages/Trackings';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="flex">
      <Sidebar />
      <div className='content w-100'>
        <Routes>
        <Route path="/tabla" exact={true} element={<Table/>}/>
        <Route path="/tracking" exact={true} element={<Trackings/>} />
        <Route path="/consult" exact={true} element={<Consulta/>} />
        <Route path="/reporte" exact={true} element={<Report/>} />
        </Routes>
      </div>
      </div>
      </Router>
  );
}

export default App;
