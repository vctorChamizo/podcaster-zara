import React, { PropsWithChildren } from "react"
import Header from "ui/Header/Header"
import { LayoutContainer } from "./Layout.styled"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}

export default Layout
