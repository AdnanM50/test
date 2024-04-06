"use client"
import { createContext, useContext } from "react";
import { useFetch } from "../helpers/hooks";
import { fetchSiteSettings } from "../helpers/backend";
const SiteContext = createContext(undefined)
export const useSite = () => useContext(SiteContext)

const SiteProvider = ({ children, site }) => {
    const [siteData] = useFetch(fetchSiteSettings)

    return (
        <SiteContext.Provider
            value={{
                ...site,
                siteData
            }}>
            {children}
        </SiteContext.Provider>
    )
}

export default SiteProvider