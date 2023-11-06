import React, { createContext, useState } from 'react'
export const ModalContext = createContext();

export function ModalContextProvider({children}){
    const [isVisible,setIsVisible] = useState(false)
    const [selected,setSelected] = useState()

  return (
    <ModalContext.Provider value={{isVisible,setIsVisible,selected,setSelected}}>
        {children}
    </ModalContext.Provider>
  )
}

