const Header = () => {
    return(
        <div className="min-h-[100vh] w-full flex justify-end items-center bg-slate-300 md:px-24 px-4 bg-[url(/assets/img/homepage-banner.png)]">
            <div className="md:w-1/2 h-1/2 bg-[#FFF3E3] flex flex-col gap-2 p-8">
                <span className="font-semibold">New Arrival</span>
                <h1 className="text-[#B88E2F] text-2xl md:text-5xl font-bold">Discover Our <br /> New Collection</h1>
                <p className="max-w-md mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae nemo, magni molestiae reprehenderit deleniti in?</p>
                <button className="bg-[#B88E2F] text-[10px] font-bold text-white mt-8 py-4 px-12 w-fit">BUY NOW</button>
            </div>
        </div>
    )
}

export default Header 