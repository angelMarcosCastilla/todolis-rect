import styled from "styled-components";

export const Card = styled.article`
  --colorCard: ${(props) => props.color};
  background: #F3F7F9;
  padding: 15px 20px;
  height: 200px;
  margin-bottom: 3px;
  border-left: 5px solid var(--colorCard);
  border-radius: 0.4rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.header`
  padding: 0.5rem 0;
  margin-bottom: 1.2rem;
  position: relative;
`;


export const CardBody = styled.div`
  height: 65px;
  margin-bottom: 0.4rem;
`;

export const CardFooter = styled.footer`
  padding: 0.3rem 0.7rem;
`;

export const BtnCheck = styled.button`
  right: 0;
  top: -10px;
  position: absolute;
`;
export const BtnOptions = styled.button`
  cursor: pointer;
`;
