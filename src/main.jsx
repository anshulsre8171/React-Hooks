import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TextProvider } from './context/textContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <TextProvider>
     <App />
    </TextProvider>
  </StrictMode>,
)
