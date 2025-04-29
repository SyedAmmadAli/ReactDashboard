import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className="bg-[#605BFF] text-white py-2 px-6 w-full rounded-lg cursor-pointer hover:bg-[#4c47cc]">{props.btnText}</button>
        </div>
    )
}

export default Button
