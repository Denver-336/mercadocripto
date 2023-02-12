import { API_URL } from "../utils/env"
import metodoGET from "../utils/metodoGET"
import { Loader } from "./Loader/Loader"

export const ListaCripto = () => {
  const { data, error, loading } = metodoGET(API_URL)

  return (
    <div className="row d-flex align-items-center justify-content-center">
      <h1 className="col-12 text-center h1">Criptomonedas</h1>
      {error && (<h1>Error en la petición</h1>)}
      {loading && (<Loader />)}
      {
        data?.map(({ rank, id, name, priceUsd }) => (
          <div key={id} className="card text-center mb-3 col-10 col-sm-4">
            <div className="card-header">{rank}</div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{priceUsd}</p>
              <a href="/" className="btn btn-primary">Detalles</a>
            </div>
          </div>
        ))
      }
    </div>
  )
}