import { memo } from "react"

export const FormInput = ({ name, value, setValue, isError, placeholder }) => {
    return (
    <input
            name={name}
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            style={{ border: `1px solid ${isError ? 'red' : 'black'}`}}
            placeholder={placeholder}
            />
    )
}

export default memo(FormInput)