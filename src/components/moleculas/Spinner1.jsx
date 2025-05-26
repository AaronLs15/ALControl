import styled from "styled-components";
import { BounceLoader } from "react-spinners";
export function Spinner1() {
  return (
    <Container>
      <BounceLoader color="#1d76c9" size={125}/>
    </Container>
  );
}
const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`;