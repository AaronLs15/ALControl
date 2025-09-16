import styled from "styled-components";
import { Btn1, InputText2, ListaDesplegable, Reloj, useProductosStore } from "../../../index";
import { v } from "../../../styles/variables";
import { Device } from "../../../styles/breakpoints";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
export function HeaderPos() {
  const[stateLectora, setStateLectora] = useState(true);
  const [stateTeclado, setStateTeclado] = useState(false);
  const [stateListaproductos, setStateListaproductos] = useState(false);
  const {setBuscador,dataProductos,selectProductos} = useProductosStore();
  const searchref = useRef(null);
  function focusclick(){
    searchref.current.focus();
    searchref.current.value.trim() === ""?setStateListaproductos(false):setStateListaproductos(true);

  }
  function search(e){
    setBuscador(e.target.value);
    let texto = e.target.value;
    if(texto.trim()==="" || stateLectora){
      setStateListaproductos(false);
    }
    else{
      setStateListaproductos(true);
    }
  }
  useEffect(()=>{
    searchref.current.focus();
  },[])

  return (
    <Header>
      <section className="contentPrincipal">
        <ContentUser className="area1">
          <div className="contentimg">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" />
          </div>
          <div className="textos">
            <span className="usuario">Aaron</span>
            <span className="cargo">Cajero</span>
          </div>
        </ContentUser>
        <article className="contentlogo area2">
          <img src={v.logo} />
          <span> AL Control 1.0</span>
        </article>
        <article className="contentfecha area3">
          <Reloj />
        </article>
      </section>
      <section className="contentbuscador">
        <article className="area1">
          <InputText2>
            <input
            ref={searchref}
              onChange={search}
              className="form__field"
              type="text"
              placeholder="buscar..."
            />
            <ListaDesplegable funcion={selectProductos} setState={() => setStateListaproductos(!stateListaproductos)} data={dataProductos} state={stateListaproductos}/>
          </InputText2>
        </article>
        <article className="area2">
          <Btn1 funcion={()=>{
            setStateLectora(true)
            setStateTeclado(false)
            setStateListaproductos(false)
            focusclick()
            }} bgcolor={stateLectora?"#5849fe":({theme})=>theme.bgtotal} color={stateLectora?"#fff":({theme})=>theme.text} border="2px" titulo="Lectora" icono={<Icon icon="material-symbols:barcode-reader-outline-sharp" width="24" height="24" />}/>
          <Btn1 funcion={()=>{
            setStateTeclado(true)
            setStateLectora(false)
            focusclick()
            }} bgcolor={stateTeclado?"#5849fe":({theme})=>theme.bgtotal} color={stateTeclado?"#fff":({theme})=>theme.text}  border="2px" titulo="Teclado" icono={<Icon icon="material-symbols:keyboard-alt-outline" width="24" height="24" />}/>
        </article>
      </section>
    </Header>
  );
}
const Header = styled.div`
  grid-area: header;
  display: flex;
  height: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.color2};
  flex-direction: column;
  gap:10px;
  @media ${Device.desktop} {
    border-bottom: 2px solid ${({theme}) => theme.color2};
  }
  .contentPrincipal {
    width: 100%;
    display: grid;
    grid-template:
      "area1 area2"
      "area3 area3";
    .area1 {
      grid-area: area1;
    }
    .area2 {
      grid-area: area2;
    }
    .area3 {
      grid-area: area3;
    }
    @media ${Device.desktop} {
      display: flex;
      justify-content: space-between;
    }
    .contentlogo {
      display: flex;
      align-items: center;
      font-weight: 700;
      img {
        width: 30px;
        object-fit: contain;
      }
    }
  }
  .contentbuscador {
    display: grid;
    grid-template:
      "area2 area2"
      "area1 area1";
    gap:10px;
    height: 100%;
    align-items:center;
    .area1 {
      grid-area: area1;
    }
    .area2 {
      grid-area: area2;
      display:flex;
      gap:10px; 
    }
    @media ${Device.desktop} {
      display: flex;
      gap:10px;
      .area1{
        width:40vw;
      }
    }
  }
`;

const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .contentimg {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .textos {
    display: flex;
    flex-direction: column;
    .usuario {
      font-weight: 700;
    }
  }
`;
