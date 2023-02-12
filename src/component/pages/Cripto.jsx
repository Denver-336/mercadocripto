import { useParams } from "react-router-dom"
import { API_URL } from "../../utils/env"
import metodoGET from "../../utils/metodoGET"

export const Cripto = () => {
  const parametro = useParams()
  const { data, error, loading } = metodoGET(`${API_URL}/${parametro.id}`)

  return (
    <>
      {
      loading ? (<Loader />)
        : (<h1 className="text-center h1 h-bg">Criptomoneda {parametro.id}</h1>)
      }
      {error && (<h1>Error en la petición</h1>)}
    </>
  )
}
