import { LabelStyle } from "./styled";

function Label({ children, color, ...props }) {
  return (
    <LabelStyle color={color} {...props}>
      {children}
    </LabelStyle>
  );
}

export default Label;
