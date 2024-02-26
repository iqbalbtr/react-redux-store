import { useEffect, useState } from "react"
import { Stack } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getPagination, getPaginationCategory } from "../services/auth.product"
import { updateOffset } from "../redux/slices/paginationSlice"
import useScrollToTop from "../hooks/useScrollToTop"

const PaginationList = () => {

    const pagination = useSelector((state) => state.pagination.data)
    const [lengthPagination, setLengthPagination] = useState(0)
    const calcCurrent = parseFloat(pagination["offset"] / pagination.limit)
    const currentPage = calcCurrent === 0 ? 1 : calcCurrent
    const category = useSelector((state) => state.category.data)
    const dispacth = useDispatch()
    const toTop = useScrollToTop()


    useEffect(() => {
        if(pagination.status === "default") {
            getPagination(pagination, (status, data) => {
                if (status) {
                    setLengthPagination(data)
                } else {
                    console.error("Error")
                }
            })
        } else {
            getPaginationCategory(pagination, category.id, (status, data) => {
                if (status) {
                    setLengthPagination(data)
                } else {
                    console.error("Error")
                }
            })
        }
        toTop
    }, [pagination])


    return (
        <Stack className="flex gap-2 m-2">
            {
                [...Array(lengthPagination)].map((_, i) => (
                    <span
                        className={`py-2 cursor-pointer px-4 rounded-md ${currentPage === i + 1 ? "bg-white" : "bg-primary "}`}
                        key={i}
                        onClick={() => dispacth(updateOffset({ key: "offset", value: i + 1 }))}
                    >{i + 1}</span>
                ))
            }
        </Stack>
    )
}

export default PaginationList