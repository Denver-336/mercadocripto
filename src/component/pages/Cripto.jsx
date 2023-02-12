import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../utils/env"
import metodoGET from "../../utils/metodoGET"
import { Loader } from "./Loader"

export const Cripto = () => {
  const parametro = useParams()
  const { data, error, loading } = metodoGET(`${API_URL}/${parametro.id}`)

  return (
    <article className='bg-cripto container'>
      {
        loading ? (<Loader />)
          : (<h1 className="text-center m-3 h1 h-bg">Detalles de Criptomonedas</h1>)
      }
      {error && (<h1>Error en la petición</h1>)}
      <div className="row d-flex align-items-center justify-content-center g-2 mt-">
        {
          data && (
            <div className="card text-center mb-3 col-10 m-4">
              <div className="card-header">Rankin: {data.rank}</div>
              <div className="card-body">
                <h5 className="card-title">Nombré: {data.name}</h5>
                <h5 className="card-subtitle text-muted mb-2">Símbolo: {data.symbol}</h5>
                <p className="card-text mb-2">Precio: $ {parseFloat(data.priceUsd).toFixed(2)}</p>
              </div>
              <div className={ parseFloat(data.changePercent24Hr) > 0 ? "card-footer bg-info text-center" : "card-footer text-center bg-danger" }>
                Variación (24hs): {parseFloat(data.priceUsd).toFixed(2)}
              </div>
            </div>
          )
        }
      </div>
    </article>
  )
}
{/* <div className="row d-flex align-items-center justify-content-center g-2 mt-">
        {
          data?.map(({ symbol, id, name, priceUsd }) => (
            <div key={id} className="card text-center mb-3 col-10 col-sm-3 col-lg-2 m-4">
              <div className="card-header">{symbol}</div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">$ {parseFloat(priceUsd).toFixed(2)}</p>
                <Link to={`/lista/${id}`} className="btn btn-outline-dark">Detalles</Link>
              </div>
            </div>
          ))
        }
      </div> */}