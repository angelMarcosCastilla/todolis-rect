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
  
  @media screen and (max-width : 700px){
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
export default Grid;
