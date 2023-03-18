import logo from './logo.svg';
import './App.css';
import MainTable from './components/table/MainTable';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import Services from './components/services/Services';
import Pages from './components/Pages';
import EditProducts from './components/products/EditProducts';

function App() {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pages />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:productId", element: <ProductDetails /> },
        { path: "/products/editProduct", element: <EditProducts /> },
        { path: "/services", element: <Services /> },
      ],
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />  
    </div>

    
  );
}

export default App;
