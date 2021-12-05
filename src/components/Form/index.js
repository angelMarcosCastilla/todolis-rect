import Button from "components/Button";
import CircleColor from "components/CircleColor";
import InfoMenssaje from "components/InfoMessaje";
import useUser from "hooks/useUser";
import { useState } from "react";
import addTask from "services/task/addTask";
import editTask from "services/task/editTask";
import { colors } from "utils/color";
import { InputGroupStyle, InputStyled, LabelStyled } from "./styled";

const Form = ({ value, setValue, setLocation }) => {
  const { user } = useUser();

  const [warning, setWarning] = useState(false);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSelectcolor = (color) => {
    setValue({ ...value, color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = { ...value, idUser: user.uid };

    if (sendData.id) {
      editTask(sendData.id, sendData);
    } else {
      if (value.title.trim() === "" || value.description.trim() === "") {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 1000);
      } else {
        addTask(sendData);
      }
    }

    setLocation("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      {warning && <InfoMenssaje warning>Hay campos vacios </InfoMenssaje>}
      <InputGroupStyle>
        <LabelStyled htmlFor="title">Título</LabelStyled>
        <InputStyled
          type="text"
          id="title"
          name="title"
          value={value.title}
          onChange={handleChange}
        />
      </InputGroupStyle>
      <InputGroupStyle>
        <LabelStyled htmlFor="description">Descripción</LabelStyled>
        <InputStyled
          type="text"
          id="description"
          name="description"
          value={value.description}
          onChange={handleChange}
        />
      </InputGroupStyle>
      <LabelStyled>Escoge un color</LabelStyled>
      <InputGroupStyle>
        {colors.map((color) => (
          <CircleColor
            color={color}
            key={color}
            onClick={() => handleSelectcolor(color)}
          />
        ))}
      </InputGroupStyle>
      <Button>{value.id ? "Editar Tarea" : "Agregar Tarea"}</Button>
    </form>
  );
};

export default Form;
