import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import { useTranslation } from 'react-i18next';
import '../../i18n'

function Header() {


    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header>
            <div className="header-top">
                <span>+998 99 999 99 99</span>
                <span>+998 99 999 99 99</span>
                <div className="language-btn">
                    <button onClick={() => handleLanguageChange('uz')}>Uzbek</button>
                    <button onClick={() => handleLanguageChange('ru')}>Русский</button>
                </div>
            </div>
            <Navbar />
        </header>
    )
}

export default Header