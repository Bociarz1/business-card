import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { language } from './language'
import { LanguageContextType } from './LanguageContextType'

type Type = {
  language: LanguageContextType
  toogle: boolean
  setToogle: Dispatch<SetStateAction<boolean>>
}

export const LanguageContext = createContext<Type>({
  language,
  toogle: true,
  setToogle: () => {},
})
export const useLanguageContext = () => useContext(LanguageContext)

type LanguageContextProviderType = {
  children: React.ReactNode
}

export function LanguageContextProvider({
  children,
}: LanguageContextProviderType) {
  const [toogle, setToogle] = useState<boolean>(true)

  return (
    <>
      <LanguageContext.Provider value={{
         language,
         toogle,
         setToogle
         }}>
        {children}
      </LanguageContext.Provider>
    </>
  )
}

export default LanguageContextProvider
