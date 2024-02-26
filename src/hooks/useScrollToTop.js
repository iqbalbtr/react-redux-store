import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const useScrollToTop = () => {

    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [pathname])
}

export default useScrollToTop
