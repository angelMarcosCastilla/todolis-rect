import styled, { css } from "styled-components";

function InfoMenssaje({ children, warning,error, success }) {

  if (warning) return <Warning>{children}</Warning>;
  if (error) return <Error>{children}</Error>;
  if (success) return <Success>{children}</Success>;
  
  return <Warning>{children}</Warning>;
}

const styledMiixin = css`
  position: absolute;
  width: 100%;
  padding: 10px 20px;
  top: -3.5rem;
`;

const Warning = styled.div`
  ${styledMiixin}
  background-color:  #ffecb3;
  color: #e6ac00;
  border:1px solid  currentColor;
  font-weight: 700;
`;
const Error = styled.div`
  ${styledMiixin}
  background-color:  #ffecb3;
  color: #e6ac00;
  border:1px solid  currentColor;
  font-weight: 700;
`;
const Success= styled.div`
  ${styledMiixin}
  background-color:  #ffecb3;
  color: #e6ac00;
  border:1px solid  currentColor;
  font-weight: 700;
`;
export default InfoMenssaje;
