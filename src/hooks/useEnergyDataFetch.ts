import { useEffect, useState } from "react";
import {IEnergyData} from '../types/energyDataTypes'

const useEnergyDataFetch = (url: string) => {
    const [data, setData] = useState<IEnergyData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error("failed to fetch data")
                const dataJson = await response.json()
                setData(dataJson)
            } catch (error : any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { data, loading, error }
}

export default useEnergyDataFetch;