import { Link } from "react-router-dom"
import { API_URL } from "../../utils/env"
import metodoGET from "../../utils/metodoGET"
import { Loader } from "./Loader"

export const ListaCripto = () => {
  const { data, error, loading } = metodoGET(API_URL)

  return (
    <article>
      {
        loading ? (<Loader />)
          : (<h1 className="text-center mt-3 h1 h-bg">Criptomonedas</h1>)
      }
      {error && (<h1>Error en la petición</h1>)}
      <div className='table-responsive-sm mx-3 mx-sm-5 mt-3'>
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
              data?.map((data) => (
                <tr key={data.id}>
                  <th className='text-center' scope='row'>{data.rank}</th>
                  <td className='text-center'>{data.symbol}</td>
                  <td className='text-center'><Link to={`/lista/${data.id}`}>{data.name}</Link></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </article>
  )
}