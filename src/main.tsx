// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Router from './routes'

createRoot(document.getElementById('root')!).render(
  <>
    <Router />
  </>
)
