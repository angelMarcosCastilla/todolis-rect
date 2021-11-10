import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";
import { actionsTodo } from "../../context/TodoContext/actions";
import { colors } from "../../utils/color";
import {useLocation} from "wouter";
function Form({ setData, data }) {

  const {dispatch } = useContext(TodoContext);
  const [, setLocation] = useLocation();
  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClickColor = (e, color) => {
    e.preventDefault();
    setData({ ...data, color: color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionsTodo.ADD_TASK,
      payload: data,
    });
    setLocation("/")

  };
  return (
    <form>
      <GroupInput>
        <label htmlFor="titulo">Titulo</label>
        <input
          type="text"
          id="titulo"
          value={data.title}
          name="title"
          onChange={(e) => HandleChange(e)}
        />
      </GroupInput>
      <GroupInput>
        <label htmlFor="descripcion">Titulo</label>
        <input
          type="text"
          id="descripcion"
          value={data.description}
          name="description"
          onChange={(e) => HandleChange(e)}
        />
      </GroupInput>
      <GroupInput>
        <label>Eliga un color:</label>
        {colors.map((color) => (
          <StyledBtnColor
            key={color}
            color={color}
            onClick={(e) => handleClickColor(e, color)}
          />
        ))}
      </GroupInput>
      <StyledButton onClick={handleSubmit}>Agregar tarea</StyledButton>
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
    transform: scale(0.99);
  }
  &:hover {
    opacity: 0.9;
  }
`;
const StyledBtnColor = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  margin-right: 1rem;
  border-radius: 25px;
  cursor: pointer;
`;
