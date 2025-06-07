import styled from "styled-components";
import {Btn1, Buscador, RegistrarMarca, TablaMarca, Title, useMarcaStore} from '../../index'
import { ConfettiExplosion } from "react-confetti-explosion";
import {v} from "../../styles/variables"
import { useState } from "react";

export function MarcaTemplate() {
  const [openRegistro,SetopenRegistro] = useState(false);
  const {datamarca,setBuscador} = useMarcaStore();
  const [accion,setAccion] =useState("");
  const [dataSelect,setdataSelect] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  function nuevoRegistro(){
    SetopenRegistro(!openRegistro)
    setAccion("Nuevo")
    setdataSelect([])
    setIsExploding(false)
  }


  return (
    <Container>
      {
        openRegistro && (<RegistrarMarca setIsExploding={setIsExploding} onClose={() => SetopenRegistro(!openRegistro)} dataSelect={dataSelect} accion={accion}/>)
      }
      <section className="area1">
        <Title>Marcas</Title>
        <Btn1 funcion={nuevoRegistro} bgcolor={v.colorPrincipal} titulo="nuevo" icono={<v.iconoagregar/>}/>
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador}/>
      </section>
      <section className="main">
        {
          isExploding && <ConfettiExplosion/>
        }
        <TablaMarca setdataSelect={setdataSelect} setAccion={setAccion} SetopenRegistro={SetopenRegistro} data={datamarca}/>
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