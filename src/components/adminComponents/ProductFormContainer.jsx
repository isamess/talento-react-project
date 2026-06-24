import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/productsService';
import { ProductFormUI } from './ProductFormUI';
import { validateProduct } from '../../utils/validateProduct';
import { uploadImage } from '../../services/uploadImage';
import './ProductFormContainer.css';




export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const[product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
});


//función para que no tenga que estar repitiendo código en cada input, es decir, es un manejador genérico para todos los campos del formulario. Forma programática de armar las clave-valor del obj de las product.

const handleChange = (e) => {
    const { name, value } = e.target; // desestructuramos el name y value del evento porque es lo que me interesa
    setProduct({...product, [name]: value}); //este name es el atributo del input
};

//manejador de las fotos
const handleFileChange = (e) => {
    const file = e.target.files[0] || null; // obtenemos el primer archivo seleccionado
    setFile(file);  
};

const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrors({}); //lo seteo a vacío para limpiar los errores anteriores cada vez que se intente enviar el formulario

    // Validación simple del formulario
    const newErrors = validateProduct({ ...product, file }); //le paso el obj del producto y la foto para validar
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setLoading(false);
        return;
    }
    //subir la imgen a Cloudinary y obtener la URL para armar el producto con la URL de la imagen y luego crear el producto en la base de datos
    try {
        const imageUrl = await uploadImage(file);
        const productData = {
            ...product, 
            price: parseFloat(product.price), 
            image: imageUrl}; //parseamos el precio a número y agregamos la URL de la imagen al obj del producto

        //alta-creación  del producto
        const id = await createProduct(productData);

        //vaciar el formulario
        setProduct({ name: "", description: "" , category: "", price: "" });
      setFile(null);
      //navigate(`/success/${id}`, { replace: true });//
        navigate(`/admin/products/success/${id}`, { replace: true });
        
    } catch (error) {
         setErrors({ general: error.message });  
    }
    finally {
        setLoading(false);
    } 
};  


return (
<ProductFormUI
    product={product}  //estado del obj del producto al componente de presentación
    errors={errors} //renderizar los msj de error del form
    loading={loading}  //muestra indicador de carga mientras se procesa el formulario y lo utilizamos en el botón
    onChange=  {handleChange}  //le pasamos todos los campos
    onFileChange={handleFileChange}  //manejador de las fotos
    onSubmit={handleSubmit}
/>
);

};