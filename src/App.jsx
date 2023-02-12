import { Outlet } from "react-router-dom"
import { Menu } from "./component/menu/Menu"

function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

export default App
