import React from "react";

const datos = [
    { Cedula: "121", Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
    { Cedula: "131",Fecha: "12/4/2020", Cliente: "carlos", Empresa_Envio: "Fedex2", Tracking: "#133", Currier: "IDK", Via: "CDMX", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
    { Cedula: "141",Fecha: "12/4/2020", Cliente: "Joshua", Empresa_Envio: "Fedex3", Tracking: "#134", Currier: "IDK", Via: "David", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
    { Cedula: "341",Fecha: "12/4/2020", Cliente: "Maria", Empresa_Envio: "Fedex4", Tracking: "#135", Currier: "IDK", Via: "Nueva York", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
];

function Lista(){
    return(
        <>
        datos
        </>
    );
}

export { Lista };