import styled from "styled-components";
export function Switch1({state,setState}) {
  return (
    <Container>
      <label class="switch">
        <input checked={state} class="checkbox" type="checkbox" onClick={setState} />
        <span class="slider"></span>
      </label>
    </Container>
  );
}
const Container = styled.div`
  .checkbox {
    display: none;
  }

  .slider {
    width: 60px;
    height: 30px;
    background-color: lightgray;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    border: 4px solid transparent;
    transition: .3s;
    box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.25) inset;
    cursor: pointer;
  }

  .slider::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transform: translateX(-30px);
    border-radius: 20px;
    transition: .3s;
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }

  .checkbox:checked ~ .slider::before {
    transform: translateX(30px);
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }

  .checkbox:checked ~ .slider {
    background-color: #2196F3;
  }

  .checkbox:active ~ .slider::before {
    transform: translate(0);
  }
`;