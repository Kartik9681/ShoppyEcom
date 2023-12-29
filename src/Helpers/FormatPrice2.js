import React from 'react'

const FormatPrice2 = ({price}) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximunFractionDigits: 2,
    }).format(price/10);
}

export default FormatPrice2
