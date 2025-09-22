import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className='w-full h-dvh bg-slate-400 flex justify-start items-center flex-col'>
    <App />
  </div>,
)
