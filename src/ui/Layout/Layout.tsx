import { HeaderContext } from "providers/HeaderProvider"
import React, { PropsWithChildren, useContext } from "react"
import Header from "ui/Header/Header"
import { LayoutContainer } from "./Layout.styled"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { loading, error } = useContext(HeaderContext)

  return (
    <LayoutContainer>
      <Header loading={loading} error={error} />
      {children}
    </LayoutContainer>
  )
}

export default Layout
