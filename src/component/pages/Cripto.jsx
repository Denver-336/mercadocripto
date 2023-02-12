import { useParams } from "react-router-dom"
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
      <div className='table-responsive my-5'>
        <table className='table table-bordered table-sm'>
          <thead>
            <tr className='table-active'>
              <th className='text-center' scope='col'>Rankin</th>
              <th className='text-center' scope='col'>Símbolo</th>
              <th className='text-center' scope='col'>Nombré</th>
              <th className='text-center' scope='col'>Precio</th>
              <th className='text-center' scope='col'>Variación (24hs)</th>
            </tr>
          </thead>
          <tbody className="text-light">
            {
              data && (
                <tr key={data.id}>
                  <th className='text-center' scope='row'>{data.rank}</th>
                  <td className='text-center'>{data.symbol}</td>
                  <td className='text-center'>{data.name}</td>
                  <td className='text-center'>
                    $ {parseFloat(data.priceUsd).toFixed(2)}
                  </td>
                  <td className={ parseFloat(data.changePercent24Hr) > 0 ? "text-info text-center" : "text-center text-danger" }>
                    {parseFloat(data.changePercent24Hr).toFixed(2)}%
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </article>
  )
}