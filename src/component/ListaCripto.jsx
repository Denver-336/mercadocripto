import { API_URL } from "../utils/env"
import metodoGET from "../utils/metodoGET"
import { Loader } from "./Loader/Loader"

export const ListaCripto = () => {
  const { data, error, loading } = metodoGET(API_URL)

  return (
    <>
      {
      loading ? (<Loader />)
        : (<h1 className="text-center h1">Criptomonedas</h1>)
      }
      {error && (<h1>Error en la petición</h1>)}
      <div className="row d-flex align-items-center justify-content-center g-2 mt-">
        {
          data?.map(({ symbol, id, name, priceUsd }) => (
            <div key={id} className="card text-center mb-3 col-10 col-sm-3 col-lg-2 m-4">
              <div className="card-header">{symbol}</div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{parseFloat(priceUsd).toFixed(4)}</p>
                <a href="/" className="btn btn-outline-dark">Detalles</a>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}