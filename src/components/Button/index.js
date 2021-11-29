import styled from "styled-components";



function Button({children, ...rest} ) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 100%;
  margin-bottom: 1rem;
  padding: .7rem 0;
  border-radius:7px;
  background-color: ${(props) => props.bg ? props.bg : "#2196F3"};
  color: white;
  font-size: 1rem;
  font-weight: 700;

`;
export default Button;
