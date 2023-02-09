import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productAndCartLoader } from './Loaders/ProductsAndCartLoader';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Shpping from './components/Shipping/Shpping';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: productAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: "/shop",
          loader: productAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: "/orders",
          loader: productAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: "/inventory",
          element: <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        },
        {
          path: "/shipping",
          element: <PrivateRoute>
            <Shpping></Shpping>
          </PrivateRoute>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/registration",
          element: <Registration></Registration>
        },
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
