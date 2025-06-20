import {Routes,Route} from 'react-router-dom';
import { Categorias, Configuraciones, Home, Login, Productos, ProtectedRoute, Spinner1, useEmpresaStore, UserAuth,useUsuariosStore } from '../index';
import { useQuery } from '@tanstack/react-query';
export function MyRoutes(){

    const {user} = UserAuth();
    const {datausuarios,mostrarusuarios} = useUsuariosStore();
    const {dataempresa,mostrarempresa} = useEmpresaStore();
    const {isLoading,error} = useQuery({queryKey:"mostrar usuarios",queryFn:mostrarusuarios,refetchOnWindowFocus:false});
    const {data:dtempresa} = useQuery({queryKey:["mostrar empresa",datausuarios?.id],queryFn:()=>mostrarempresa({_id_usuario:datausuarios?.id}),enabled:!!datausuarios,refetchOnWindowFocus:false});


    if(isLoading){
        return(<Spinner1/>)
    }
    if(error){
        return(<span>error...</span>)
    }

    return(
        <Routes>
            <Route element= {<ProtectedRoute user={user} redirectTo="/login"/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Configuracion" element={<Configuraciones/>}/>
                <Route path="/Configuracion/Categorias" element={<Categorias/>}/>
                {/*<Route path="/Configuracion/Marca" element={<Marca/>}/>*/}
                <Route path="/Configuracion/productos" element={<Productos/>}/>


            </Route>
            <Route path="/login" element={<Login/>}/>

        </Routes>
        
    )
}