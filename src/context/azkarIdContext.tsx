
import React, { createContext, useState } from 'react'

export const azkarIdContext = createContext<any>({
    id: 0,
    setId: () => {}
})



export const AzkarIdContext = ({children}:{children:React.ReactNode}) => {

    const [id , setId] = useState("")

  return (
    <azkarIdContext.Provider value={{id , setId}}>
        {children}
    </azkarIdContext.Provider>
    
  )
}
