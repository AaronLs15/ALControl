import styled from "styled-components";
export function AreaDetalleVentaPos() {
  return (
    <AreaDetalleVenta>
      <Itemventa>
        <article className="contentdescripcion">
          <span className="descripcion">Renta de Carro Golf - $ 799.00</span>
          <span> Stock: 5 UND</span>
        </article>
        <article>
          <span className="detalle">
            <strong>Cant:</strong> 1 UND <strong>Importe: </strong> $ 799.00
          </span>
        </article>
      </Itemventa>
    </AreaDetalleVenta>
  );
}


const AreaDetalleVenta = styled.section `
  display:flex;
  width:100%;
  margin-top:10px;

`;

const Itemventa = styled.section `
  display:flex;
  justify-content:space-between;
  width:100%;
  .contentdescripcion{
    display:flex;
    flex-direction:column;
    .descripcion{
      font-weight: 700;
      font-size:20px;
    }
  }
`;
