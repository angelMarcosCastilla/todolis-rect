import Button from "components/Button";
import CircleColor from "components/CircleColor";
import useUser from "hooks/useUser";
import { colors } from "utils/color";
import { InputGroupStyle, InputStyled, LabelStyled } from "./styled";

const Form = ({ value, setValue }) => {
  const {user} = useUser()
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSelectcolor = (color) => {
    setValue({ ...value, color});
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const sendData = {...value, idUser: user.uid}
    console.log(sendData)
  }
  return (
    <form onSubmit={handleSubmit}>
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
          <CircleColor color={color} onClick={()=>handleSelectcolor(color)} />
        ))}
      </InputGroupStyle>
    </form>
  );
};

export default Form;
