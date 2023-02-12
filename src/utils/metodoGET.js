import { useEffect, useState } from "react"

export default function metodoGET (endpoint) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      fetch(endpoint)
      .then(resp => resp.json())
      .then(data => setData(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return { data, error, loading }
}