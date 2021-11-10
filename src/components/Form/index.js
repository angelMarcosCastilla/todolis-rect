import styled from "styled-components";
import { colors } from "../../utils/color";
function Form() {
  return (
    <form>
      <GroupInput>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" id="titulo" />
      </GroupInput>
      <GroupInput>
        <label htmlFor="descripcion">Titulo</label>
        <input type="text" id="descripcion" />
      </GroupInput>
      <GroupInput>
        <label>Eliga un color:</label>
        {colors.map((color) => (
          <StyledBtnColor color={color} />
        ))}
      </GroupInput>
      <StyledButton>Agregar tarea</StyledButton>
    </form>
  );
}

export default Form;

const GroupInput = styled.div`
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
const StyledButton = styled.button`
  width: 100%;
  background-color: #1597e5;
  color: #fefefe;
  padding: 1rem 1rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 10px;
  font-size: 1rem;
  &:active {
    transform: scale(.99);
  }
  &:hover{
    opacity: .9;
  }
`;
const StyledBtnColor = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  margin-right: 1rem;
  border-radius: 25px;
  cursor:pointer;
`;
