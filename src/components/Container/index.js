import {ContainerLayout} from "./styled"

function Container({children}) {
  return (
    <ContainerLayout>
      {children}
    </ContainerLayout>
  )
}

export default Container
