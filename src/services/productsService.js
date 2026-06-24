import { 
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    updateDoc,
    doc,
    query, 
    getDoc, 
    where
 } from "firebase/firestore";
import { db } from "../firebase/config";
//creamos colección de productos, con esto ya tenemos la referencia a la colección de productos en firebase, y podemos usarla para hacer consultas a esa colección
const productsRef = collection(db, "products");


// Función para obtener todos los productos no la necesito si quiero mostrar por categoría, pero la dejo por si quiero mostrar todo en algún momento
export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);
        const productsFormat = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };   //coloco mi id dentro del objeto que me devuelve firebase, para poder usarlo luego en el detalle del producto
        });
        return productsFormat;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }};

    //traer un producto por su id
export const getProductById = async (id) => {
    try {
        const productRef = doc(db, "products", id);
        const snapshot = await getDoc(productRef);
        if (snapshot.exists()) {
            const product = { id: snapshot.id, ...snapshot.data() };
            console.log("Doc:", product);
            return product;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }};

    //filtrar por categoria, trae todos los productos si no se le pasa una categoría, o solo los de esa categoría si se le pasa una
export const getByCategory = async (category) => {
    try{
        let queryRef;
//verificamos que se haya pasado una categoría, si no se pasó, traemos todos los productos, si se pasó, filtramos por esa categoría, luego lo guardamos en queryRef para hacer la consulta a firebase, y luego lo mapeamos para devolver un array de productos con su id incluido
        if(category){
            queryRef = query(productsRef, where("category", "==", category));
        }else{
            queryRef = productsRef;
    }
        const snapshot = await getDocs(queryRef);

        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return productsFormat;
    }catch(error){
        console.error("Error fetching products by category:", error);
        return [];
    }
};

//Alta de producto, recibe un objeto con los datos del producto, y lo agrega a la colección de productos en firebase, devuelve el id del nuevo producto creado, o lanza un error si hubo un problema al crear el producto
export const createProduct = async (productData) => {
    try {
        const docRef = await addDoc(productsRef, productData); //agrega un nuevo producto a la coleccion de Firestore, con los datos que le pasamos como argumento, y devuelve una referencia al documento creado
        return docRef.id; // Devuelve el ID del nuevo producto creado. Opcional
    } catch (error) {
        console.error("Error creando el producto:", error);
        throw error; // Lanza el error para que pueda ser manejado por el componente que llama a esta función
    };
}