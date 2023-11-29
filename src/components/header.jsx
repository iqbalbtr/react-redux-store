import { Container, Stack } from "react-bootstrap"

const MainHeader = ({ children }) => {

    return (
        <section>
            <Container>
                <Stack className="w-full min-h-[40vh] flex flex-col gap-6 bg-[url(/assets/img/product-banner.png)] items-center justify-center">
                    {children}
                </Stack>
            </Container>
        </section>
    )
}

const Path = ({ children }) => {
    return (
        <div className="flex gap-1">
            <span>Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right" width={25} >
                <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
            </svg>
            {children}
        </div>
    )
}

MainHeader.Path = Path

export default MainHeader