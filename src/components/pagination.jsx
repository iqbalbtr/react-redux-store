import { useEffect, useState } from "react"
import { Stack } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getPagination, getPaginationCategory } from "../services/auth.product"
import { updateOffset } from "../redux/slices/paginationSlice"
import useScrollToTop from "../hooks/useScrollToTop"
import { motion } from "framer-motion"

const PaginationList = () => {

    const pagination = useSelector((state) => state.pagination.data)
    const [lengthPagination, setLengthPagination] = useState(0)
    const calcCurrent = parseFloat(pagination["offset"] / pagination.limit)
    const currentPage = calcCurrent === 0 ? 1 : calcCurrent
    const category = useSelector((state) => state.category.data)
    const dispacth = useDispatch()
    const toTop = useScrollToTop()


    useEffect(() => {
        if (pagination.status === "default") {
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
        <Stack className="flex gap-2 mt-12">
            {
                [...Array(lengthPagination)].map((_, i) => (
                    <motion.span
                    whileTap={{
                        scale: 0.95,
                        transition: {
                            duration: 0.35
                        }
                    }}
                    whileHover={{
                        scale: 1.05
                    }}
                        className={`py-2 cursor-pointer px-4 rounded-md ${currentPage === i + 1 ? "bg-white text-primary border border-primary" : "bg-primary text-white"}`}
                        key={i}
                        onClick={() => dispacth(updateOffset({ key: "offset", value: i + 1 }))}
                    >{i + 1}</motion.span>
                ))
            }
        </Stack>
    )
}

export default PaginationList