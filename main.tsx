
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './Components/LayOut'
import { ColorChanger } from './Components/ColorChanger'
import { AddColor } from './Components/AddColor'
import { Login } from './AuthService/Login'
import { Logout } from './AuthService/Logout'

const router = createBrowserRouter(
createRoutesFromElements(
<Route path='' element={<Layout />}>
    <Route path='/' index element={<ColorChanger />} />
    <Route path='/addcolor' element={<AddColor />} />
    <Route path='/login' element={<Login />} />
    <Route path='/logout' element={<Logout />} />
</Route>
)
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)





