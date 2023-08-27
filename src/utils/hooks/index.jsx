import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      const response = await fetch(url)

      const data = await response.json()

      setData(data)

      setLoading(false)
    }

    setLoading(true)

    fetchData()
  }, [url])
// on utilise le hook useEffect pour faire une requete fetch et on utilise le hook useState pour stocker les données et l'état de chargement
  return { isLoading, data }
}
