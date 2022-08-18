import React from 'react'
import { AddToCartModal } from './addToCartModal'
import { Link } from "react-router-dom";

export const ServiceDescription = () => {
  return (
    <div className="container-fluid mt-3">
        <h4>Descripcion del servicio</h4>
        <p className='text-wrap fs-6 text'>Situada a escasos minutos de Madrid, El Encanto D'Valeria os ofrece todo lo que necesita vuestra boda para convertirse en el evento del año. Con una trayectoria de más de tres décadas de experiencia en el sector de la restauración, su equipo cuidará de hasta el más mínimo detalle para que todo salga a pedir de boca.

Espacios y capacidades

La finca dispone de unos espacios exteriores cargados de encanto en los que podréis disfrutar de sus jardines, fuentes y, sobre todo, unas espectaculares vistas, y en los que podréis llevar a cabo desde una romántica ceremonia civil hasta un elegante cóctel de bienvenido o un banquete en el que no falte absolutamente nada.</p>
        <Link to={<AddToCartModal/>} className="btn btn-primary">Contratar servicio</Link>
    </div>
  )
}
