import {Routes,Route} from 'react-router-dom';
import { Categorias, Configuraciones, Home, Login, ProtectedRoute, UserAuth } from '../index';
export function MyRoutes(){

    const {user} = UserAuth()

    return(
        <Routes>
            <Route element= {<ProtectedRoute user={user} redirectTo="/login"/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Configuracion" element={<Configuraciones/>}/>
                <Route path="/Configuracion/Categorias" element={<Categorias/>}/>

            </Route>
            <Route path="/login" element={<Login/>}/>

        </Routes>
        
    )
}