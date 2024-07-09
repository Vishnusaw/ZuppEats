import React,{useId} from 'react'


const Input = React.forwardRef(function Input({
    label,
    type="text",
    className,...props
},ref){

    const id= useId();
    return(

        <div className="w-full">
            {label && <label  className="block mb-1 text-gray-600"  htmlFor={id}> {label} 
                </label>}

            <input  type={type} 
                className= {`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
                ref={ref} 
                {...props} 
                id={id} >
            </input>
        </div>
    )

})
export default Input;
