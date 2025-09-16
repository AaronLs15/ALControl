import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import { v } from "../../styles/variables";
import {
  AreaDetalleVentaPos,
  AreaTecladoPos,
  Btn1,
  FooterPos,
  HeaderPos,
  InputText2,
  Reloj,
} from "../../index";
export function POSTemplate() {
  return (
    <Container>
      <HeaderPos />
      <Main>
        <AreaDetalleVentaPos />
        <AreaTecladoPos />
      </Main>
      <FooterPos />
    </Container>
  );
}
const Container = styled.div`
  height: calc(100vh - 60px);
  display: grid;
  grid-template: "header" 220px "main" auto;
  padding:10px;
  padding-top:50px;
  
  @media ${Device.desktop} {
    grid-template: "header header" 140px 
    "main main" 
    "footer footer" 60px;
  }
`;

const Main = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow:hidden;
  @media ${Device.desktop} {
    flex-direction: row;
  }
`;
