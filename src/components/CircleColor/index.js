import styled from "styled-components";

function CircleColor({ color, ...rest }) {
  return <CircleStyled color={color} {...rest} />;
}

const CircleStyled = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 8px;
`;
export default CircleColor;
