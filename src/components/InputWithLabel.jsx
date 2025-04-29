import React, { useState } from 'react'

const InputWithLabel = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm text-gray-900">
                {props.labelTxt}
            </label>
            <div className="mt-1">
                <input
                    id="first-name"
                    name="first-name"
                    type={props.type}
                    value={inputValue}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-[#F7F7F8] px-3 py-1 text-base text-gray-900 outline-1 -outline-offset-1 outline-none placeholder:text-gray-400 sm:text-sm/6"
                />
            </div>
        </div>
    )
}

export default InputWithLabel
