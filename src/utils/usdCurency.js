

export const toUSDCurrency = (data) => {
    return data.toLocaleString("en-US", {style:"currency", currency:"USD"})
}