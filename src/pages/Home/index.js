import useHome from "./useHome";
import Container from "../../components/Container";
import Label from "../../components/Label";
import TodoContainer from "../../components/TodoContainer";
import { StyledLink } from "./styled";
import { useEffect, useContext } from "react";
import { UserContext } from "context/UserContext";
import { useLocation } from "wouter";

function Home() {
  const {handleFilterAll, handleFilterCompleted, handleFilterIncompleted} = useHome();
  
  const {user} = useContext(UserContext)
  const [location, setLocation] = useLocation()
  useEffect(()=>{
    !user && setLocation("/login")
  },[user,setLocation])
  
  return (
    <section>
      <Container>
        <div className="flex space-between mb-2">
          <div className="flex">
            <Label style ={{"cursor": "pointer"}}  color="#909BAE"  onClick={handleFilterAll}>
              Todos
            </Label>
            <Label style ={{"cursor":"pointer"}} color="#909BAE" onClick={handleFilterCompleted}>
              Completado
            </Label>
            <Label style ={{"cursor":"pointer"}} color="#909BAE" onClick={handleFilterIncompleted}>
              Incompleto
            </Label>
          </div>
          <StyledLink to="addTask">Agregar Tarea</StyledLink>
        </div>
        <TodoContainer />
      </Container>
    </section>
  );
}
 


export default Home;
