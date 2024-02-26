import { useState } from "react"
import { useEffect } from "react"

const useFetch = (fetch) => {
    
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState("idle")

    useEffect(async() => {
        if (typeof fetch === "function"){
            setLoading("loading")
            return new Promise((resolve, reject) => {
                console.log(fetch)
            })
        }
    }, [])

    return {
        data,
        isLoading
    }
}
export default useFetch
