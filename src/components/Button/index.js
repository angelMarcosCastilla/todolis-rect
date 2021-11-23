import styled from "styled-components"
const colores =  {
  github:"black",
  google:"red"
}
const Button = ({ children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )

}

const StyledButton = styled.button`
 background-color: ${(props) => colores[props.color]};
 color: white;
`
export default Button
