import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../../container/Banner/BannerHeader/Banner';
import './Main.css'

function Main() {
    const { t } = useTranslation()

    return (
        <div className='main'>
            <main className='container'>
                <div className="main-banner">
                    <Banner />
                </div>
                <div className="container">
                    <h1>{t('welcome')}</h1>
                </div>
            </main>
        </div>
    )
}

export default Main