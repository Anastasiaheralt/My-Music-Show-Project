import React from 'react';
import { Navbar } from "./../component/navbar";
import { Footer } from "./../component/footer";

export const userPage = () => {
  return (
    <div>
        <br />
        <br />
        <Navbar />
        <div className="container-fluid my-4">
            <div className="row">
                <div className='col-3'></div>
                <div className='col-9'>
                    <img src="http://www.deepdiveintel.com/wp-content/uploads/2013/09/Owl-Eye-art-300x300.jpg" class="img-thumbnail" alt="..."/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
};
