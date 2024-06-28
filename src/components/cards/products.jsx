import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"
import { Link, useNavigate } from "react-router-dom"
import { Card } from "react-bootstrap"
import CopyToClipboard from "react-copy-to-clipboard"
import { addFavItem, removeFavItem } from "../../redux/slices/favSlice"
import { toUSDCurrency } from "../../utils/usdCurency"

const Product = ({ index, data }) => {

    const dispatch = useDispatch()
    const { id } = data
    const price = data.price
    const navigate = useNavigate()
    const fav = useSelector((state) => state.favorite.data)
    const existing = fav.find(item => item.id === data.id)

    const handleFav = (e) => {
        e.stopPropagation()
        if (existing) {
            dispatch(removeFavItem(data))
        } else {
            dispatch(addFavItem(data))
        }
    }

    return (
        <div
            onClick={() => navigate(`/product/${data.id}`)} className="relative overflow-hidden group z-0"
        >
            <Card className="shadow-lg">
                <Card.Img variant="top" src={data.images[0]} className="w-full object-contain bg-slate-400 aspect-square" />
                <Card.Body className="p-6 overflow-hidden flex flex-col bg-slate-100">
                    <Card.Title className="text-xl font-semibold truncate ...">{data.title}</Card.Title>
                    <Card.Text className="text-slate-500">{data.category.name}</Card.Text>
                    <Card.Text>{toUSDCurrency(data.price)}</Card.Text>
                </Card.Body>
            </Card>
            <Card className="p-6 z-10 transition-all top-0 duration-500 bg-black/30 opacity-0 absolute group-hover:opacity-100 left-0 w-full h-full flex items-center">
                <Card.Body className="text-white w-full flex justify-center items-center flex-col gap-6">
                    <button onClick={(e) => {
                        e.stopPropagation()
                        dispatch(addToCart({ id: data.id, product: data, qty: 1 }))
                    }} className="px-8 py-4 w-fit bg-[#FFFFFF] text-primary text-sm font-semibold">
                        Add To Cart
                    </button>
                    <div className="flex w-full justify-center z-50 gap-6">
                        <CopyToClipboard text="Ini copy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} id="share-alt">
                                <path fill="#FFFFFF" d="M18,14a4,4,0,0,0-3.08,1.48l-5.1-2.35a3.64,3.64,0,0,0,0-2.26l5.1-2.35A4,4,0,1,0,14,6a4.17,4.17,0,0,0,.07.71L8.79,9.14a4,4,0,1,0,0,5.72l5.28,2.43A4.17,4.17,0,0,0,14,18a4,4,0,1,0,4-4ZM18,4a2,2,0,1,1-2,2A2,2,0,0,1,18,4ZM6,14a2,2,0,1,1,2-2A2,2,0,0,1,6,14Zm12,6a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z"></path>
                            </svg>
                        </CopyToClipboard>
                        <button onClick={(e) => handleFav(e)}>
                            <svg fill={existing ? "#ff69b4" : "#ffffff"} width={25} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 230 230">
                                <path d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083C235.26,57.99,236.537,96.466,213.588,120.982z" />
                            </svg>
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product