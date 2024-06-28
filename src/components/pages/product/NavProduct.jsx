import { useEffect, useState } from "react"
import { Container, Form, FormCheck, Stack, } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import CategoryBtn from "./CategoryButton"

const NavProduct = () => {

    const pagination = useSelector((state) => state.pagination.data)
    const [limit, setLimit] = useState(8)

    const handleLimit = (e) => {
        e.preventDefault()
        if (limit > 18) {
            alert("not allowed")
            return
        } else if (limit < 8) {
            alert("not allowed number")
            return
        }
    }

    return (
        <nav>
                <Stack className="md:px-24 px-4 w-full py-4 bg-[#F9F1E7]">
                    <div className="w-full flex-col md:flex-row gap-6 flex justify-between items-center">
                        <div className="flex justify-center items-center gap-6">
                            <CategoryBtn />
                            <span className=" w-[1px] py-4 bg-black"></span>
                            <span>Showing of 1-{limit} of {pagination["offset"]} result</span>
                        </div>
                        <div className="flex gap-6 items-center">
                            <span>Show</span>
                            <Form onSubmit={(e) => handleLimit(e)}>
                                <input
                                    onChange={(e) => setLimit(e.target.value)}
                                    type="number"
                                    value={limit}
                                    className="p-1 px-2 text-md max-w-[50px]"
                                />
                            </Form>
                            <span>Sort By</span>
                            <Form.Select
                                aria-label="Default select">
                                <option>default</option>
                                <option value="">Urutan terkecil</option>
                                <option value="">Urutan terkecil</option>
                            </Form.Select>
                        </div>
                    </div>
                </Stack>
        </nav>
    )
}

export default NavProduct