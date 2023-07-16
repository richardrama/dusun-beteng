import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Pemerintahan, Galeri, Kontak, Berita } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/struktur-pemerintahan",
    element: <Pemerintahan />,
  },
  {
    path: "/artikel-berita",
    element: <Berita />,
  },
  {
    path: "/galeri-kegiatan",
    element: <Galeri />,
  },
  {
    path: "/kontak-warga",
    element: <Kontak />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
