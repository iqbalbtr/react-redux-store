const Input = (props) => {
    const { type, name, placeholder, children } = props

    return (
        <div className="flex flex-col gap-3">
            <label htmlFor={name}>{children}</label>
            <input className="p-3 bg-transparent outline-none border border-slate-500 rounded-md" type={type} name={name} placeholder={placeholder} required />
        </div>
    )
}

export default Input