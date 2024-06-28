const Button = (props) => {
    const { children } = props

    return (
        <>
            <button type="submit" className="text-xl text-white bg-indigo-500 py-2 px-8 rounded-md">{children}</button>
        </>
    )
}

export default Button