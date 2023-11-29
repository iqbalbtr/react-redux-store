const Input = (props) => {
    const {type, name, placeholder} = props
    
    return (
        <>
        <input type={type} name={name} placeholder={placeholder} required />
        </>
    )
}

export default Input