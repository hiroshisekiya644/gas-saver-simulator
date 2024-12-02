import React from 'react'
import ReactDOM from 'react-dom/client'
import './pages/index.css'
import GasSaverSimulator from './components/GasSaverSimulator';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GasSaverSimulator />
  </React.StrictMode>,
)
