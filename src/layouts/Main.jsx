import { Outlet } from "react-router-dom"
import Navbar from "../Component/Shared/Nabvar/Navbar"
import TravelFooter from "../Component/TravelFooter/TravelFooter"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <TravelFooter></TravelFooter>
    </div>
  )
}

export default Main
