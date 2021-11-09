import styled from "styled-components";

export const LabelStyle = styled.span`
  --colorLabel: ${(props) => props.color};
  --bgLabel: ${(props) => props.color + "20"};

  background-color: var(--bgLabel);
  display: inline;
  padding: 0.3rem 0.7rem;
  font-size: 1rem;
  border-radius: 5px;
  color: var(--colorCard);
  font-weight: 700;
`;
