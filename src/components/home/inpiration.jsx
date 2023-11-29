import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

const Inpiration = () => {

    const slideImg = [
        {
            id: 1,
            src: "/assets/img/slide-1.png",
        },
        {
            id: 2,
            src: "/assets/img/slide-2.png"
        },
        {
            id: 3,
            src: "/assets/img/slide-3.png"
        },
    ]

    const [indexSlide, setIndexSlide] = useState(0)

    useEffect(() => {
        if(indexSlide < 0) {
            setIndexSlide(0)
        } else if (indexSlide === slideImg.length){
            setIndexSlide(slideImg.length - 1)
        }
    }, [indexSlide])

    return (
        <div className="md:py-12 px-8 md:px-24 w-full min-h-[70vh] bg-[#FCF8F3]">
            <Container>
                <Row className="flex flex-col md:flex-row w-full h-full items-center">
                    <div className="mw-1/3 min-h-[70vh] flex justify-center items-center">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl font-bold">50+ Beautiful rooms <br />inspiration</h1>
                            <p className="max-w-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident cumque laudantium maxime ?</p>
                            <button className="py-2 w-fit px-8 bg-primary text-white">Explore More</button>
                        </div>
                    </div>
                    <div className="md:w-[70%] h-[600px] pl-6 overflow-hidden relative">
                        <div className="flex gap-6">
                            {
                                slideImg.map((src, i) => (
                                    <img key={i} src={src.src}
                                        className={`${i === indexSlide ? "slide-active" : "slide"} transition-all duration-300 object-fill`}
                                        alt=""
                                        style={{ transform: `translateX(-${indexSlide * 100}%)` }}
                                    />
                                ))
                            }
                        </div>
                        <div
                            className="w-[50px] aspect-square absolute left-5 top-1/2 -translate-x-1/2 bg-white shadow-lg flex justify-center items-center rounded-full"
                            onClick={() => setIndexSlide(cur => cur - 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} id="angle-left-b">
                                <path fill="#B88E2F" d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                            </svg>
                        </div>
                        <div className="absolute w-[250px] flex justify-center items-end bottom-5 left-12 h-[120px]">
                            <div className="w-[220px] flex flex-col justify-center p-8 bottom-5 left-12 h-[120px] bg-white/80">
                                <span className="font-semibold">01 - Bed Room</span>
                                <span className="text-2xl font-bold">Inner Peace</span>
                            </div>
                            <div className="w-[50px] h-[50px] flex justify-center items-center bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width={35} viewBox="0 0 24 24" id="arrow-right">
                                    <path fill="#FFFFFF" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="w-[50px] aspect-square absolute md:right-5 -right-5 top-1/2 -translate-x-1/2 bg-white shadow-lg flex justify-center items-center rounded-full"
                            onClick={() => setIndexSlide(cur => cur + 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} id="angle-right-b">
                                <path fill="#B88E2F" d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path>
                            </svg>
                        </div>
                        <div className="flex gap-8 absolute bottom-5 right-[30%]">
                            {
                                [...Array(3)].map((a, i) => {
                                    if(i === indexSlide) {
                                        return <div key={i} className="w-[10px] outline outline-1 outline-primary outline-offset-4 aspect-square bg-primary rounded-full"></div>
                                    } else {
                                        return<div key={i} className="w-[10px] aspect-square bg-slate-400 rounded-full"></div>
                                    }
                                })
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Inpiration