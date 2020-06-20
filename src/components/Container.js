import styled from "styled-components";

const Container = styled.main`
  overflow: hidden;
  width: 100vw;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid trasparent;
  box-shadow: 0 2rem 4rem rgba(40, 42, 46, 0.2);

  @media all and (min-width: 480px) {
    height: auto;
    border-radius: 1rem;
    width: 50vh;
    margin: 4vh auto;
  }
`;

export default Container;
