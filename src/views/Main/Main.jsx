import React from 'react'
import Header from '../../components/Header/Header'
import { useTranslation } from 'react-i18next'

function Main() {
    const {t} = useTranslation()
  return (
    <div className='main'>
            <Header />
            <div className="container">
                <h1>{t('welcome')}</h1>
            </div>
    </div>
  )
}

export default Main