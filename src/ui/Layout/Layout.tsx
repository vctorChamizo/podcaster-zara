import { PodcastContext } from "providers/PodcastProvider"
import React, { PropsWithChildren, useContext } from "react"
import Header from "ui/Header/Header"
import { LayoutContainer } from "./Layout.styled"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { loading } = useContext(PodcastContext)

  return (
    <LayoutContainer>
      <Header loading={loading} />
      {children}
    </LayoutContainer>
  )
}

export default Layout
