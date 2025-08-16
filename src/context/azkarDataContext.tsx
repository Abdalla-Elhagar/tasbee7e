
import React, { createContext, useState } from 'react'

export const azkarDataContext = createContext<any>({
    sharedValue: "",
    setSharedValue: () => {}
})



export const AzkarDataContext = ({children}:{children:React.ReactNode}) => {

    const [sharedValue , setSharedValue] = useState("")

  return (
    <azkarDataContext.Provider value={{sharedValue , setSharedValue}}>
        {children}
    </azkarDataContext.Provider>
    
  )
}
