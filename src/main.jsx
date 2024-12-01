import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import Router from './router/Router';
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,


)

