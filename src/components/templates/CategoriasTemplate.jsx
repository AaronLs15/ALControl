import styled from "styled-components";
import {Btn1, Title} from '../../index'
import {v} from "../../styles/variables"
export function CategoriasTemplate() {
  return (
    <Container>
      <section className="area1">
        <Title>Categorias</Title>
        <Btn1 bgcolor={v.colorPrincipal} titulo="nuevo" icono={<v.iconoagregar/>}/>
      </section>
      <section className="main">main</section>
    </Container>
  );
}
const Container = styled.div`
  height:100vh;
  padding: 15px;
  display:grid;
  grid-template:
  "area1" 60px
  "main" auto;
  .area1{
    grid-area:area1;
    background-color:rgba(216, 15, 15, 0.2);
    display:flex;
    justify-content:end;
    align-items:center;
    gap: 15px;
  }
  .main{
    grid-area:main;
    background-color:rgba(255, 0, 140, 0.2)
  }
`;