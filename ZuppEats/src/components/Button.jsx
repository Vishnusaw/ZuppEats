import React from 'react'

function Button({
    children,
    type="button",
    textColor="text-white",
    bgColor="bg-orange-500",
    className="",
    ...props
}) {
  return (
    <button  
        className={`w-full ${bgColor} ${textColor} ${className} py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 
         focus:ring-orange-500 focus:ring-opacity-50`} 
         {...props} >
        {children}
    </button>
  )
}

export default Button