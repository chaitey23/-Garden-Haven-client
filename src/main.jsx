import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Context/AuthProvider'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes'
import { ToastContainer } from 'react-toastify'
import ThemeProvider from './Context/ThemeContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
 <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
 </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)

