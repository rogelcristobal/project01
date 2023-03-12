import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ScrollPositionProvider } from './context/ScrollPosition.Context'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ScrollPositionProvider>
    <App />
    </ScrollPositionProvider>
  // </React.StrictMode>,
)
