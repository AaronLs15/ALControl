import styled from "styled-components";
import {Btn1, Footer, InputText2, Linea, Title, useAuthStore} from "../../index"
import {v} from "../../styles/variables";
import { Device } from  "../../styles/breakpoints";

export function LoginTemplate() {
    const {loginGoogle} = useAuthStore()
    return (
        <Container>
            <div className="card">
                <ContentLogo>
                    <img src={v.logo}/>
                </ContentLogo>
                <Title $paddingbottom="40px">Ingresar</Title>
                <form>
                    <InputText2>
                        <input className="form__field"
                        placeholder="email" type="text"/>
                    </InputText2>
                    <InputText2>
                        <input className="form__field"
                        placeholder="contraseña" type="password"/>
                    </InputText2>
                    <Btn1 titulo="INGRESAR" bgcolor="#1CB0F6" color="255,255,255" width="100%"/>
                </form>
                <Linea><span>o</span></Linea>
                <Btn1 funcion={loginGoogle} titulo="Google" bgcolor="#fff" icono={<v.iconogoogle/>} />

            </div>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.bgtotal};
    text-align: center;
    flex-direction:column;
    padding: 0 10px;
    color: ${({theme})=>theme.text};
    
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin:20px;
        @media ${Device.tablet}{
            width: 400px
            
        }
    }
`

const ContentLogo = styled.section`
    display:flex;
    align-items:center;
    justify-content: center;
    img{
        width:60%;
    }
`;