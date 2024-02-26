import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Container } from "react-bootstrap"
import axios from "axios"
import Product from "../components/cards/products"
import MainHeader from "../components/header"
import Title from "../components/title/title"

const FavoritePage = () => {

    const favItem = useSelector((state) => state.favorite.data)

    // data fetch
    const [favorite, setFavorite] = useState([])
    const toTop = useScrollToTop()
    

    useEffect(() => {
        const fetchData = async () => {
            const promises = favItem.map(async (fav) => {
                const response = await axios.get(`https://fakestoreapi.com/products/${fav.id}`);
                return response.data;
            });
        
            const newData = await Promise.all(promises);
            setFavorite([...favorite, ...newData]);
        };
        

        fetchData();
    }, [])


    return (
        <section>
            <Container>
                <MainHeader>
                    <Title>
                        Favorite
                    </Title>
                    <MainHeader.Path>
                        Favorite
                    </MainHeader.Path>
                </MainHeader>
                <div className="w-full px-8 md:px-36 py-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-12">
                        {favItem.map(data => (
                            <Product data={data} key={data.id} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FavoritePage