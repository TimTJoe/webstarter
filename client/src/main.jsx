import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Before document mount
function initUI() {
  console.log("App initialized")
}

if(document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initUI)
} else { 
  initUI()
}