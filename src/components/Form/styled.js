import styled from "styled-components";

export const GroupInput = styled.div`
  margin-bottom: 2rem;

  & label {
    display: block;
    margin: 0.7rem;
    width: 100%;
  }
  & input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid lightgrey;
    outline: none;
    &:focus {
      box-shadow: 0 0 4px #1597e5;
      border-color: #1597e5;
    }
  }
`;
export const StyledButton = styled.button`
  width: 100%;
  background-color: #1597e5;
  color: #fefefe;
  padding: 1rem 1rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 10px;
  font-size: 1rem;
  &:active {
    transform: scale(0.99);
  }
  &:hover {
    opacity: 0.9;
  }
`;
export const StyledBtnColor = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  margin-right: 1rem;
  border-radius: 25px;
  cursor: pointer;
`;
