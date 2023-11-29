const Title = (props) => {

    const {children} = props
    return (
        <>
        <h1 className="md:text-4xl text-2xl font-bold text-center">
            {children}
        </h1>
        </>
    )
}

export default Title