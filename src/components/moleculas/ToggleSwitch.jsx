import styled from "styled-components";
export function ToggleSwitch() {
  return (
    <Container>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
      </label>
    </Container>
  );
}

const Container = styled.div`
 position: relative;
 left:8px;
 top:8px;
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: 0.5s;
    transform:scale(0.55);
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: ${({theme})=> theme.text};
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: 0.8s;
  }

  #bar1,
  #bar3 {
    width: 70%;
  }

  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: 0.5s;
    transform: rotate(180deg);
  }
`;
