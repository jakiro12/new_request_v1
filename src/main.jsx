import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CreateNewProduct from './Routes/CreateProduct.jsx';
import FindRequiredProduct from './Routes/FindProduct.jsx';
import { QueryClientProvider, QueryClient } from 'react-query';
import ModifyRequiredProduct from './Routes/ModifyProductData.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<h3>A donde vas?</h3>
  },
  {
    path:"/create",
    element:<CreateNewProduct/>
  },
  {
    path:"/findproduct",
    element:<FindRequiredProduct/>
  },
  {
    path:"/modify",
    element:<ModifyRequiredProduct/>
  }
])
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
