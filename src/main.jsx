import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TextProvider } from './context/textContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TextProvider>
        <App />
      </TextProvider>
    </ThemeProvider>
  </StrictMode>,
)
