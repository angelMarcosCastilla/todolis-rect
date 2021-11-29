import styled from "styled-components";

function LoadFull() {
  return <ContainerLoad>load</ContainerLoad>;
}

const ContainerLoad = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f2f2f2;
`;

export default LoadFull;
