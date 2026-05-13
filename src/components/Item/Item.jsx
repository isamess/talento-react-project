import './Item.css';


export const Item = ({name, description, price, image, children}) => {
    return (
        <article >
            <div className='tarjeta'>
            <img  src={image}  alt={`Imagen de ${name}`} />
{/* onError={(e) => e.target.style.display = "none"} */}
            <div className="tarjeta__contenido"> 
                <h2 className="tarjeta__nombre">{name}</h2>
                <p className="tarjeta__descripcion">{description}</p>
                <p className="tarjeta__precio">Precio: ${price}</p>

            </div>

            </div>
            {children}  
        </article>
    )

};

