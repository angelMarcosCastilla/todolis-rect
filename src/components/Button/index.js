import styled from "styled-components"

const colores = {
  github: "#0B1C24",
  google: "#F06046"
}

const Button = ({ children, color,onClick}) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  )

}

const StyledButton = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: .8rem 0;
  font-size: 1.1rem;
  border-radius:5px;
  background-color: ${(props) => colores[props.color]};
  color: white;
  cursor: pointer;
  &:hover{
    opacity:.9;
  }
  &:active{
    opacity:.99;
  }
   & span{
   margin-right: 10px;
  }
` 
export default Button
