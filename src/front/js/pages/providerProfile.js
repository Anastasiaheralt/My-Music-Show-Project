import React from 'react'
import {ProviderProfileCarousel} from "./../component/providerProfileCarousel";
import { AddToCartModal } from '../component/addToCartModal';
import { ServiceDescription} from '../component/serviceDescription';
import { UserFeedback } from '../component/userFeedback';


export const ProviderProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-8">
            <h2>Juan Juancin</h2>
            <div className="container-fluid my-4">
              <div className="container-fluid d-flex">
                <p className="text">Costos pueden ir entre 200$ - 300$</p>
                <div className="alert alert-info" role="alert">Este proveedor tiene descuento, ¡aprovecha!</div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                     <label className="form-check-label" for="flexCheckDefault">
                        Agregar a proveedores favoritos
                    </label>
                </div>    
              </div>
              <ProviderProfileCarousel></ProviderProfileCarousel>
              <ServiceDescription></ServiceDescription>
              <UserFeedback></UserFeedback>
              <AddToCartModal></AddToCartModal>
            </div>
          </div>
          <div className='col-4'></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}; 
