import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";
import { actionsTodo } from "../../context/TodoContext/actions";
import { colors } from "../../utils/color";
import { useLocation } from "wouter";

function Form({ setData, data }) {
  const [value, setValue] = useState({ title: "", description: "", color:"#2E6FCC"});
  const {state, dispatch } = useContext(TodoContext);
  const [, setLocation] = useLocation();

  useEffect(() => {
    data.id && setValue(data)
  },[data])

  const HandleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });

    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClickColor = (e, color) => {

    e.preventDefault();
    setValue({ ...value, color: color });
    setData((prevState) => {
      return { ...prevState, color: color };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(value.id){
      console.log(value, state.todos)
      const editData = state.todos.map((todo) => todo.id === value.id ? value : todo)
      console.log(editData)
      dispatch({
        type: actionsTodo.EDIT_TASK,
        payload: editData,
      });
      setLocation("/");

    }else{

      const data = { ...value, iscomplete: false, id: Date.now() };
      dispatch({
        type: actionsTodo.ADD_TASK,
        payload: data,
      });
      setLocation("/");

    }

   
  };

  return (
    <form>
      <GroupInput>
        <label htmlFor="titulo">Titulo</label>
        <input
          type="text"
          id="titulo"
          value={value.title}
          name="title"
          onChange={(e) => HandleChange(e)}
        />
      </GroupInput>
      <GroupInput>
        <label htmlFor="descripcion">Descripcion</label>
        <input
          type="text"
          id="descripcion"
          value={value.description}
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
      <StyledButton onClick={handleSubmit}>
        {data?.id ? "Editar Tarea" : "Agregar tarea"}
      </StyledButton>
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
