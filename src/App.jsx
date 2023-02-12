import { Loader } from "./Loader/Loader"
import { API_URL } from "./utils/env"
import metodoGET from "./utils/metodoGET"

function App() {
  const { data, error, loading } = metodoGET(API_URL)

  return (
    <>
      {error && (<h1>Error en la petición</h1>)}
      {loading && (<Loader />)}
      {
        data && (
          <div>
            <h1>Lista de Criptomonedas</h1>
            <ol>
              {data.map(({ id, name, priceUsd }) => (<li key={id}>Nombre: {name}, Precio: {priceUsd}</li>))}
            </ol>
          </div>
        )
      }
    </>
  )
}

export default App
