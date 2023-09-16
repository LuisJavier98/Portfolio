import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18next from 'i18next'
import I18NextHttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .init({
    partialBundledLanguages: true,
    resourses: {},
    lng: localStorage.getItem('language') ?? 'en',
    fallbackLng: localStorage.getItem('language') ?? 'en',
    interpolation: {
      escapeValue: false,
    },
    // debug: true
  })

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />


)
