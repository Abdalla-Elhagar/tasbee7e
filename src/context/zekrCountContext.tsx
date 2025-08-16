


import React, { createContext, useState } from 'react'

export const zekrCountContext = createContext<any>({
    countContext: 0,
    setCountContext: () => {}
})



export const ZekrCountContext = ({children}:{children:React.ReactNode}) => {

    const [countContext , setCountContext] = useState("")

  return (
    <zekrCountContext.Provider value={{countContext , setCountContext}}>
        {children}
    </zekrCountContext.Provider>
    
  )
}
