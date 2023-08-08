import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../layouts/Home/Home'
import Login from '../Component/Login/Login'
import SignUp from '../Component/SignUp/SignUp'
import FullCommunity from '../Component/FullCommunity/FullCommunity'
import MyCommunity from '../Component/MyCommunity/MyCommunity'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [{
      path: '/',
      element: <Home></Home>,
    },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/fullcommunity',
    element: <FullCommunity></FullCommunity>
  },
  {
    path: '/mycommunity',
    element: <MyCommunity></MyCommunity>
  }
]
  },
])
