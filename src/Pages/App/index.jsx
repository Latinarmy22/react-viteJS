import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShoppingCartProvider } from '../../Context'

import NavBar from '../../Components/Navbar'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ]);
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
          <AppRoutes/>
          <NavBar></NavBar>
        </BrowserRouter>
    </ShoppingCartProvider>
)
}

export default App
