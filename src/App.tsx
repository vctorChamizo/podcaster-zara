import NotFound from "pages/404/404"
import Episode from "pages/Episode/Episode"
import Home from "pages/Home/Home"
import Podcast from "pages/Podcast/Podcast"
import { Route, Routes } from "react-router-dom"
import { ROUTES } from "utils/constants/route.constants"

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PODCAST} element={<Podcast />} />
      <Route path={ROUTES.EPISODE} element={<Episode />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
