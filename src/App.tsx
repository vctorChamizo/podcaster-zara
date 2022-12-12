import Home from "pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import { ROUTES } from "utils/constants/route.constants"

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  )
}

export default App
