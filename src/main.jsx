import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <GoogleOAuthProvider clientId="614702246979-ohus1at3q45i7gl5b8gcutrk3ji1lh5r.apps.googleusercontent.com"><App /></GoogleOAuthProvider></BrowserRouter> 
  </React.StrictMode>,
)