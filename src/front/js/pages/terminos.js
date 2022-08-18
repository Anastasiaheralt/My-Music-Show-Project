import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import "./../component/register.css";

export const Terminos = () => {
  return (
    <>
      <br />
      <br />
      <Navbar />
      <div className="container-fluid ">
        <h3 className="mt-3 text-center">Terminos y Condiciones</h3>
        <p className="mx-4 p-5">
          <h5>The standard Lorem Ipsum passage, used since the 1500s</h5>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." Section
          1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
          <br />
          <br />
          <h5>1914 translation by H. Rackham</h5>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
      </div>

      <div className="form-check d-flex justify-content-center mb-5">
        <button type="button" className="btn btn-dark w-25 boton">
          <Link to="/register" className="text-white">
            Volver al Registro
          </Link>
        </button>
      </div>

      <Footer />
    </>
  );
};
