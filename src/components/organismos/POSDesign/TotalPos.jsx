import styled from "styled-components";
import { Btn1 } from "../../../index";
import { Device } from "../../../styles/breakpoints";
import { Icon } from "@iconify/react/dist/iconify.js";
export function TotalPos() {
  return (
    <Container>
      <section className="imagen">
        <img src="https://i.ibb.co/FLxnn3rp/Chat-GPT-Image-21-jun-2025-15-28-38.png" />
      </section>
      <section className="contentTotal">
        <section className="contentTituloTotal">
          <Btn1 border="2px" bgcolor="#ffffff" titulo="COBRAR" icono={<Icon icon="fluent-emoji-flat:money-with-wings"/>}/>
          <Btn1 border="2px" bgcolor="#3FF563" titulo="..." icono={<Icon icon="fluent-emoji-flat:safety-vest"/>}/>
        </section>
        <span>$ 799.00</span>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-radius: 15px;
  font-weight: 700;
  font-size: 40px;
  background-color: #3ff563;
  padding: 10px;
  color: #207c33;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    background-color: #7fff99;
    position: absolute;
    border-radius: 50%;
    top: -20px;
    left: -15px;
  }
  &::before{
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-color: ${({theme})=> theme.bgtotal};
    position: absolute;
    border-radius: 50%;
    top: 5px;
    right: 5px;
  }
  .imagen {
    z-index: 1;
    width: 55px;
    position: relative;
    @media ${Device.desktop} {
      bottom: initial;
    }
    img {
      width: 100%;
    }
  }
  .contentTotal {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .contentTituloTotal {
      display: flex;
      align-items: center;
      margin-top: 30px;
      gap: 10px;
      @media ${Device.desktop} {
        display: none;
      }
    }
  }
`;
