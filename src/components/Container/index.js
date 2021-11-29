import { ContainerStyled } from "./styled"

function Container({children,...rest}) {
  return (
    <ContainerStyled {...rest}>
      {children}
    </ContainerStyled>
  )
}

export default Container
