import styled from "styled-components";

export const CardTodoStyled = styled.div`
  --color: ${(props) => props.color};
  --bg: ${(props) => `${props.color}30`};
  height: 200px;
  background: white;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  border-left: 3px solid var(--color);
`;

export const TitleCardStyled = styled.h3`
  display: inline-block;
  color: var(--color);
  background: var(--bg);
  padding: 0.2rem 2rem;
  border-radius: 10px;
  margin-bottom: 0.3rem;
  font-size: 1rem;
`;

export const CopyCardStyled = styled.p`
  height: 80px;
`;

export const ButtonAction = styled.button`
  font-size: 0.9rem;
  &:hover {
    color: rgba(0, 0, 0, 0.4);
  }
`;
