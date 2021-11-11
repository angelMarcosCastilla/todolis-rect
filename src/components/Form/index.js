import useForm from "./useForm";
import { GroupInput, StyledBtnColor, StyledButton } from "./styled";
import { colors } from "../../utils/color";

function Form({ setData, data }) {
  const { handleSubmit, handleClickColor, HandleChange, value } = useForm({
    setData,
    data,
  });

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
