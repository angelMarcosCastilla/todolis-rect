import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap};
`;
