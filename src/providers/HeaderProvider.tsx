import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from "react"

export interface IHeaderState {
  loading: boolean
  error: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<boolean>>
}

export const HeaderContext = createContext<IHeaderState>({} as IHeaderState)

export const HeaderProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const value = { loading, setLoading, error, setError }

  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
}
