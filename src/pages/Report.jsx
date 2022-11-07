import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import { Lista } from '../pages/Lista';


function Report() {

    return(
        <>
        <Table>
        <Lista />
        </Table>
        </>
    );


}
export { Report };