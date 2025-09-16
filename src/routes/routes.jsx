import { Routes, Route } from "react-router-dom";
import {
  Categorias,
  Configuraciones,
  Home,
  Login,
  Productos,
  ProtectedRoute,
  POS,
  Layout,
} from "../index";
export function MyRoutes() {

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedRoute accesBy="non-authenticated">
            <Login />
          </ProtectedRoute>
        }
      />
      <Route path="/"
        element={
          <ProtectedRoute accesBy="authenticated">
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/Configuracion"
        element={
          <ProtectedRoute accesBy="authenticated">
            <Layout>
              <Configuraciones />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/Configuracion/Categorias"
        element={
          <ProtectedRoute accesBy="authenticated">
            <Layout>
              <Categorias />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/Configuracion/productos"
        element={
          <ProtectedRoute accesBy="authenticated">
            <Layout>
              <Productos />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/pos"
        element={
          <ProtectedRoute accesBy="authenticated">
            <Layout>
              <POS />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
