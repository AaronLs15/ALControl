import styled from "styled-components";
import {Btn1, Buscador, RegistrarProductos, TablaProductos, Title, useProductosStore} from '../../index'
import { ConfettiExplosion } from "react-confetti-explosion";
import {v} from "../../styles/variables"
import { useState } from "react";

export function ProductosTemplate() {
  const [openRegistro,SetopenRegistro] = useState(false);
  const {dataProductos,setBuscador,generarCodigo} = useProductosStore();
  const [accion,setAccion] =useState("");
  const [dataSelect,setdataSelect] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  function nuevoRegistro(){
    SetopenRegistro(!openRegistro)
    setAccion("Nuevo")
    setdataSelect([])
    setIsExploding(false)
    generarCodigo();
  }


  return (
    <Container>
      <RegistrarProductos setIsExploding={setIsExploding} onClose={() => SetopenRegistro(!openRegistro)} dataSelect={dataSelect} accion={accion} state={openRegistro}/>
      
      <section className="area1">
        <Title>Productos</Title>
        <Btn1 funcion={nuevoRegistro} bgcolor={v.colorPrincipal} titulo="nuevo" icono={<v.iconoagregar/>}/>
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador}/>
      </section>
      <section className="main">
        {
          isExploding && <ConfettiExplosion/>
        }
        <TablaProductos setdataSelect={setdataSelect} setAccion={setAccion} SetopenRegistro={SetopenRegistro} data={dataProductos}/>
      </section>
    </Container>
  );
}

const Container = styled.div`
  height:calc(100vh - 30px);
  padding: 15px;
  display:grid;
  grid-template:
    "area1" 60px
    "area2" 60px
    "main" auto;
  .area1{
    grid-area:area1;
    display:flex;
    justify-content:end;
    align-items:center;
    gap: 15px;
    border-bottom:10px;
  }
  .area2{
    grid-area:area2;
    display:flex;
    justify-content:end;
    align-items:center;
  }
  .main{
    grid-area:main;
  }
`;