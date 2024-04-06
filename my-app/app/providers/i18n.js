"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../helpers/hooks";
import { fetchPublicLanguages, fetchTranslations } from "../helpers/backend";

const I18nContext = createContext({});

const I18nProvider = ({ children }) => {
    const [languages] = useFetch(fetchPublicLanguages)
    const [translations, setTranslations] = useState({})
    const [lang, setLang] = useState()
    const [isRtl, setIsRtl] = useState('ltr')
    useEffect(() => {
        const lang = localStorage.getItem('lang')
        if (!!lang) {
            setLang(lang)
            fetchTranslations({ _id: lang }).then(({ error, data }) => {
                if (!error) {
                    setTranslations(data?.translations)
                }
            })
        }
    }, [lang])

    const changeLanguage = (value) => {
        setLang(value)
        const selectedLang = languages.find(l => l._id === value)
        setIsRtl(selectedLang?.rtl ? 'rtl' : 'ltr')
        localStorage.setItem('lang', value)
    }

    useEffect(() => {
        if (languages?.length > 0) {
            languages?.forEach(lang => {
                if (!!lang?.default) {
                    setLang(lang?._id)
                    setIsRtl(lang?.rtl ? 'rtl' : 'ltr')
                }
            })
        }
    }, [languages])

    useEffect(() => {
        document.documentElement.dir = isRtl
    }, [isRtl])

    const t = (key) => translations?.[key] || key

    return (
        <I18nContext.Provider value={{ languages, lang, setLang, t, changeLanguage }}>
            {children}
        </I18nContext.Provider>
    )
}

export default I18nProvider
export const useI18n = () => useContext(I18nContext)