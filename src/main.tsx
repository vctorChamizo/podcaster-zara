import React from "react"
import ReactDOM from "react-dom/client"
import App from "App"
import GlobalStyles from "theme/global"
import Provider from "providers"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
