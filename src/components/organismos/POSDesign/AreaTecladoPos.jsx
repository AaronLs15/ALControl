import styled from "styled-components";
import { Btn1, TotalPos } from "../../../index";
import { Device } from "../../../styles/breakpoints";
export function AreaTecladoPos() {
  return (
    <Container>
      <section className="areatipopago">
        <article className="box">
          <Btn1 bgcolor="#a6f868" titulo="EFECTIVO" border="0" height="70px" width="100%" />
          <Btn1 bgcolor="#da1406" titulo="CREDITO" border="0" width="100%" />
        </article>
        <article className="box">
          <Btn1 bgcolor="#dcf120" titulo="TARJETA" border="0" height="70px" width="100%" />
          <Btn1 bgcolor="#f868d4"titulo="MIXTO" border="0" width="100%" />
        </article>
      </section>
      <section className="totales">
        <div className="subtotal">
          <span>
            SubTotal: <strong>$ 799.00</strong>
          </span>
          <span>IVA (16%): $ 127.84</span>
          <span>
            SubTotal: <strong>$ 926.84</strong>
          </span>
        </div>
        <TotalPos />
      </section>
    </Container>
  );
}
const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.color2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  width: calc(100% - 5px);
  border-radius: 15px;
  @media ${Device.desktop} {
    position: relative;
    width: auto;
    bottom: initial;
  }
  .areatipopago {
    display: none;
    @media ${Device.desktop} {
      display: initial;
    }
    .box {
      display: flex;
      gap: 20px;
      margin: 10px;
    }
  }
  .totales {
    display: flex;
    flex-direction:column;
    gap: 10px;
    padding:10px;
    .subtotal {
      display: none;
      flex-direction: column;
      justify-content: end;
      text-align: end;
      gap: 10px;
      font-weight: 500;
      @media ${Device.desktop} {
        display: flex;
      }
    }
  }
`;
