
const Overlay = (props) => {
    const { toggle, setToggle, children } = props

    return (
        <>
            {
                toggle ? (
                    <div>
                        <div
                            className="fixed  w-full h-screen top-0 left-0 z-10"
                            onClick={() => setToggle(cur => !cur)}
                        ></div>
                        <div className="relative z-20">
                            {children}
                        </div>
                    </div>
                ) :
                null
        }
        </>
    )
}

export default Overlay