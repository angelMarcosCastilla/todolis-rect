import styled from "styled-components";

function Grid({ children, ...rest }) {
  return <GridStyled {...rest}>{children}</GridStyled>;
}

const GridStyled = styled.div`
  height: 80vh;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
`;
export default Grid;
