import { memo } from "react"

export const FormInput = ({ name, value, setValue, isError }) => {
    return (
    <input
            name={name}
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            style={{ border: `1px solid ${isError ? 'red' : 'black'}`}}
            />
    )
}

export default memo(FormInput)