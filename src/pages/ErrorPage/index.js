import { Link } from "wouter"
import "./styles.css"

function ErrorPage() {
  return (
    <div className="bgError contentCenter ">

      <h2 className="errorNumber">404</h2>
      <p className="errorCopy">Pagina no encontrada</p>

      <Link className="btnNotFound" to="/">regresar</Link>
    </div>
  )
}

export default ErrorPage
