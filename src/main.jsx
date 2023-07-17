import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Pemerintahan, Galeri, Kontak, Berita } from './pages';
import { Artikel1, Artikel2, Artikel3, Artikel4, Artikel5, Artikel6, Artikel7, Artikel8, Artikel9, Profilpadukuhan } from './artikel/index.js';

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
  {
    path: "/profil-padukuhan",
    element: <Profilpadukuhan />,
  },
  {
    path: "/peranakan-kambing-ettawa",
    element: <Artikel1 />,
  },
  {
    path: "/pembuatan-sabun-cuci-piring-dari-minyak-jelantah",
    element: <Artikel2 />,
  },
  {
    path: "/penyerahan-bibit-dan-pakan-lele",
    element: <Artikel3 />,
  },
  {
    path: "/gotong-royong-persiapan-hajatan",
    element: <Artikel4 />,
  },
  {
    path: "/kegiatan-mengajar-dan-edukasi-menabung",
    element: <Artikel5 />,
  },
  {
    path: "/sosialisasi-umkm-dan-literasi-digital",
    element: <Artikel6 />,
  },
  {
    path: "/penerapan-gaya-hidup-sehat",
    element: <Artikel7 />,
  },
  {
    path: "/penyediaan-perlengkapan-ibadah-dan-alat-kebersihan",
    element: <Artikel8 />,
  },
  {
    path: "/taman-pendidikan-alquran",
    element: <Artikel9 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
