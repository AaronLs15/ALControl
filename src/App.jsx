import styled, { ThemeProvider } from "styled-components"
import {GlobalStyles,MyRoutes,Sidebar,Login} from "./index"
import {Device} from "./styles/breakpoints"
import { useThemeStore } from "./store/ThemeStore"
import { useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { useLocation } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {themeStyle} = useThemeStore();
  const {pathname} = useLocation()
  return (
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider>
        <GlobalStyles />
        {
          pathname!="/login"?(
          <Container className={sidebarOpen ? "active" : ""}>
            
            <section className="contenSideBar"><Sidebar state={sidebarOpen} setState={()=>setSidebarOpen(!sidebarOpen)}/></section>
            <section className="contentMenuambur">menu ambur</section>
            <section className="contentRoutes"><MyRoutes/></section>
          </Container>
        ):(<Login/>)
        }
        <ReactQueryDevtools initialIsOpen={true} />
        
      </AuthContextProvider>
    </ThemeProvider>
  )
}
const Container = styled.main`
  display:grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  color: ${({theme}) => theme.text};
  .contentSidebar{
    display:none;
  }
  .contentMenuambur{
    position:absolute;
  }
  .contentRoutes{
    grid-column: 1;
    width:100%;
  }
  @media ${Device.tablet}{
    grid-template-columns:88px 1fr;
    &.active{
      grid-template-columns: 260px 1fr;
    }
    .contentSidebar{
      display:initial;
    }
    .contentMenuambur{
      display: none;
    }
    .contentRoutes{
      grid-column: 2;
    }
  }
`
  
export default App
