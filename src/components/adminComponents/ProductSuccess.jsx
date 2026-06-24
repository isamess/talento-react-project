import { Link, useParams } from "react-router-dom";
import "./ProductFormContainer.css";

export const ProductSuccess = () => {
  const { id } = useParams(); //toma el id del producto que se pasa por la URL y lo muestra en la página de éxito

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h2>Producto cargado con exito</h2>
      <p>ID de producto: {id}</p>
      <p>Puede cargar otro haciendo click en el boton.</p>

      <Link className="btn bg-primary primary" to="/admin" replace>
        Agregar otro producto
      </Link>
    </section>
  );
};