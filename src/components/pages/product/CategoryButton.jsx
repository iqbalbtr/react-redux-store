import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from "../../../services/auth.product"
import { Overlay } from "../../../layouts"
import { Form, FormCheck } from "react-bootstrap"
import { changeCategeory } from "../../../redux/slices/categorySlice"
import { useEffect } from "react"

const CategoryBtn = () => {

    const [getCategory, setGetCategory] = useState([])
    const category = useSelector((state) => state.category.data)
    const [toggle, setToggle] = useState(false)
    const dispacth = useDispatch()

    const handleCategory = (name, data, status) => {
        dispacth(changeCategeory({
            id: data.id,
            name: name,
            image: data.image
        }))
        dispacth(resetPagination())
        dispacth(paginationStatus(status))
    }


    useEffect(() => {
        getAllCategory((status, data) => {
            if (status) {
                setGetCategory(data)
            }
        })
    }, [])

    return (
        <div className="flex justify-center items-center gap-2 relative">
            <span>Category</span>
            <svg
                onClick={() => setToggle(cur => !cur)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={25}
                id="sliders-v-alt"
            >
                <path
                    d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z"></path>
            </svg>
            {
                <Overlay
                    toggle={toggle}
                    setToggle={setToggle}
                >
                    <div className="w-[12rem] p-6 rounded-lg bg-[#F9F1E7] to-bottom -left-1 absolute top-14 z-50 shadow-3xl">
                        <Form className="flex flex-col gap-2 font-semibold text-slate-500">
                            <FormCheck
                                className="flex gap-3"
                                label="Default"
                                checked={category.name === "Default"}
                                type="radio"
                                name="category"
                                value={0}
                                onChange={() => handleCategory("Default", {
                                    id: 0,
                                    name: "Default",
                                    image: "/"
                                }, "default")}
                            />
                            {
                                getCategory.map((data, i) => (
                                    <FormCheck
                                        key={i}
                                        id={`${data.id}`}
                                        checked={category.name === data.name}
                                        className="flex gap-3"
                                        label={`${data.name}`}
                                        type="radio"
                                        name="category"
                                        value={data.id}
                                        onChange={() => handleCategory(data.name, data, "category")}
                                    />
                                ))
                            }
                        </Form>
                    </div>
                </Overlay>
            }
        </div>
    )
}

export default CategoryBtn