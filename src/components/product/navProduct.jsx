import { useEffect, useState } from "react"
import { Container, Form, FormCheck, Stack, } from "react-bootstrap"
import { getAllCategory } from "../../services/auth.product"

const NavProduct = ({filterProduct, category, setCategory}) => {

    
    const [limit, setLimit] = useState()

    useEffect(() => {
        filterProduct(category)
    }, [category])

    return (
        <nav>
            <Container>
                <Stack className="md:px-24 px-4 w-full py-4 bg-[#F9F1E7]">
                    <div className="w-full flex-col md:flex-row gap-6 flex justify-between items-center">
                        <div className="flex justify-center items-center gap-6">
                            <CategoryBtn
                                setCategory={setCategory}
                                category={category}
                            />
                            <span className=" w-[1px] py-4 bg-black"></span>
                            <span>Showing of 1-{limit} of 20 result</span>
                        </div>
                        <div className="flex gap-6 items-center">
                            <span>Show</span>
                            <input onChange={(e) => setLimit(e.target.value)} type="number" value={limit} className="p-1 px-2 text-md max-w-[40px]" />
                            <span>Sort By</span>
                            <Form.Select aria-label="Default select example">
                                <option>default</option>
                                <option value="">Urutan terkecil</option>
                                <option value="">Urutan terkecil</option>
                            </Form.Select>
                        </div>
                    </div>
                </Stack>
            </Container>
        </nav>
    )
}

const CategoryBtn = ({ setCategory, category }) => {

    const [getCategory, setGetCategory] = useState([])
    const [toggle, setToggle] = useState(false)

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
            <svg onClick={() => setToggle(cur => !cur)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} id="sliders-v-alt">
                <path d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z"></path>
            </svg>
            {toggle && <div className="w-[12rem] p-6 rounded-lg bg-[#F9F1E7] to-bottom -left-1 absolute top-14 z-50 shadow-3xl">
                <Form className="flex flex-col gap-2 font-semibold text-slate-500">
                    <FormCheck className="flex gap-3" onChange={() => setCategory("default")} label="Default" checked={category === "default"} type="radio" name="category" value="default" />
                    {
                        getCategory.map((category, i) => (
                            <FormCheck id={`${category}`} className="flex gap-3" label={`${category}`} onChange={(e) => setCategory(e.target.value)} type="radio" name="category" value={category} />
                        ))
                    }
                </Form>
            </div>}
        </div>
    )
}

export default NavProduct