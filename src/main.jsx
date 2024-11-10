import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import store from './store/store.js';

import { HomePage, ProductDetailPage, CartPage, CheckoutPage, UserProfilePage, OrderHistoryPage, LoginPage, SignUpPage } from './pages';
import { AuthLayout, ProductList } from './components';
import ProfileDisplay from './pages/ProfileDisplay.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/",
        element: (
          <AuthLayout authentication>
            <ProductList />
          </AuthLayout>
        )
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: (
          <AuthLayout authentication>
            {" "}
            <CartPage />
          </AuthLayout>
        ),
      },
      {
        path: "/checkout",
        element: (
          <AuthLayout authentication>
            {" "}
            <CheckoutPage />
          </AuthLayout>
        ),
      },
      {
        path: "/ProfileDisplay/:slug",
        element: (
        <ProfileDisplay />
        ),
      },
    //   {
    //     path: "/add-profile",
    //     element: (
    //         <AuthLayout authentication>
    //             {" "}
    //             <UserProfilePage />
    //         </AuthLayout>
    //     ),
    // },
      {
        path: "/order-history",
        element: (
          <AuthLayout authentication>
            {" "}
            <OrderHistoryPage />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout  authentication={false}>
            <SignUpPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
