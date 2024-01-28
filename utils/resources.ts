import { useEffect, useState } from 'react'
import axios from 'axios'

interface ResourceData {
    downloads: string
    updates: Record<string, any>
    reviews: {
        count: number
        stars: number
    }
}

export function useResources(): ResourceData | null {
    const [data, setData] = useState<ResourceData | null>(null)

    useEffect(() => {
        const url = `https://api.polymart.org/v1/getResourceInfo?resource_id=3636`

        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                const data = response.data.response.resource
                setData(data)
            } catch (error) {
                console.error('Error fetching metadata:', error)
            }
        }

        fetchData()
    }, [])

    return data
}
