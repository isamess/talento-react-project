import { Outlet } from "react-router-dom";


export const AdminLayout = () => {
    return (
        <main>
            <Outlet/>  {/*componente de react-router-dom que renderiza el componente hijo que corresponde a la ruta actual. En este caso, renderiza el componente que corresponde a la ruta /admin, que puede ser el Dashboard, ProductFormContainer o ProductSuccess, dependiendo de la ruta que se esté visitando.*/}
        </main>
    )
};