import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { useHistory } from 'react-router-dom'
import { InputGroup, Menu as UikitMenu } from '@goosebumps/uikit'
import { ethers } from 'ethers'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import Select, { OptionProps } from 'components/Select/Select'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { setNetworkInfo } from 'state/home'
import { usePhishingBannerManager } from 'state/user/hooks'
import config from './config/config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'

const SearchItem = ({network, setNetwork}) => {
  const { t } = useTranslation();
  useEffect(() => {
    setNetwork({
      label: t("Ethereum"),
      value: "ethereum"
    })
  }, [t, setNetwork])
  return <>
    <Select
      options={[
        {
          label: t("Ethereum"),
          value: "ethereum"
        },
        {
          label: t("BSC"),
          value: "bsc"
        },
        {
          label: t("Polygon"),
          value: "polygon"
        }
      ]}
      header={{
        border: "1px solid #52555c",
        background: "transparent"
      }}
      listContainer={{
        border: "1px solid #52555c",
        borderTop: "none"
      }}
      defaultOptionIndex={0}
      onOptionChange={setNetwork}
    />
  </>
}

const Menu = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()
  const [showPhishingWarningBanner] = usePhishingBannerManager()

  const [ network, setNetwork ] = useState<OptionProps | null>(null)
  const [ searchKey, setSearchKey ] = useState('')

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const onSearchKeyChange = (e) => {
    setSearchKey(e.target.value);
    dispatch(setNetworkInfo({network, searchKey}))
    if(ethers.utils.isAddress(e.target.value) || !e.target.value) {
      handleSearch(e.target.value);
    }
  }

  const handleSearch = (address : string) => {
    console.log("handleSearch: network = ", network, "address = ", address)
    // const isToken = await Requester.getAsync(
    //   `${config.API_SERVER}api/Search/IsToken`,
    //   { address: searchInput.current.value, network: networkName }
    // );
    if(network === null) return;
    // Check here
    const isToken = false;
    if (isToken) {
      history.push(`/charts/${network?.value}/${address}`)
    } else if(address) {
      history.push(`/portfolio-tracker/${network?.value}/${address}`)    
    } else {
      history.push(`/portfolio-tracker`)
    }
  }

  useEffect(() => {
    dispatch(setNetworkInfo({network, searchKey}))
  }, [ network, searchKey, dispatch ])

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings />}
      searchItem={<SearchItem setNetwork={setNetwork} network={network}/>}
      searchKey={searchKey}
      setSearchKey={onSearchKeyChange}
      // banner={showPhishingWarningBanner && <PhishingWarningBanner />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={config(t)}
      subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      footerLinks={footerLinks(t)}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy CAKE')}
      {...props}
    />
  )
}

export default Menu
