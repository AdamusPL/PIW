import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "./css/index.css"
import "./css/browse.css"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthContextProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
</AuthContextProvider>);