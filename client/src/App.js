import React, { useState } from 'react'

import { I18nProvider, LOCALES } from 'i18n'
import routes from 'routes';
import { ButtonText, InnerButton, NavbarContainer, SwitchLang } from 'pages/home/homeStyle';
import { useDispatch } from 'react-redux';
import SiloamLogo from 'assets/siloam-logo.png'
import { replace } from 'connected-react-router';


function App() {

  const [locale, setLocale] = useState(LOCALES.INDONESIA)
  const dispatch = useDispatch()
  
  return (
    <I18nProvider locale={locale}>
      <NavbarContainer>
        <img
          onClick={() => {
            dispatch(replace('/'))
          }}
          alt="siloam-logo"
          src={SiloamLogo}
        />
        <SwitchLang>
          <InnerButton>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5312 5.00002H4.99999C5.22915 3.58336 5.59374 2.43753 6.09374 1.56253C6.59373 0.68753 7.14582 0.250031 7.74998 0.250031C8.35415 0.250031 8.90623 0.68753 9.40623 1.56253C9.90623 2.43753 10.2812 3.58336 10.5312 5.00002ZM4.74999 8.00001C4.74999 7.33335 4.78124 6.66668 4.84374 6.00002H10.6562C10.7187 6.66668 10.75 7.33335 10.75 8.00001C10.75 8.66668 10.7187 9.33334 10.6562 10H4.84374C4.78124 9.33334 4.74999 8.66668 4.74999 8.00001ZM11.5312 5.00002H14.9062C14.4479 3.93752 13.7864 3.01565 12.9218 2.2344C12.0573 1.45315 11.0729 0.895862 9.96873 0.56253C10.6979 1.60419 11.2187 3.08336 11.5312 5.00002ZM5.53124 0.56253C4.78124 1.60419 4.26041 3.08336 3.96874 5.00002H0.593749C1.05208 3.93752 1.71354 3.01565 2.57812 2.2344C3.4427 1.45315 4.42707 0.895862 5.53124 0.56253ZM15.5 8.00001C15.5 7.33335 15.4062 6.66668 15.2187 6.00002H11.6562C11.7187 6.68752 11.75 7.35418 11.75 8.00001C11.75 8.64584 11.7187 9.31251 11.6562 10H15.2187C15.4062 9.33334 15.5 8.66668 15.5 8.00001ZM3.74999 8.00001C3.74999 8.62501 3.78124 9.29168 3.84374 10H0.281249C0.0937498 9.31251 0 8.64584 0 8.00001C0 7.35418 0.0937498 6.68752 0.281249 6.00002H3.84374C3.78124 6.68752 3.74999 7.35418 3.74999 8.00001ZM10.5 11H4.99999C5.22915 12.4167 5.59374 13.5625 6.09374 14.4375C6.59373 15.3125 7.14582 15.75 7.74998 15.75C8.35415 15.75 8.90623 15.3125 9.40623 14.4375C9.90623 13.5625 10.2708 12.4167 10.5 11ZM9.96873 15.4375C10.7187 14.3958 11.2396 12.9167 11.5312 11H14.9062C14.4479 12.0625 13.7864 12.9844 12.9218 13.7656C12.0573 14.5469 11.0729 15.1042 9.96873 15.4375ZM3.96874 11H0.593749C1.05208 12.0625 1.71354 12.9844 2.57812 13.7656C3.4427 14.5469 4.42707 15.1042 5.53124 15.4375C4.80207 14.3958 4.28124 12.9167 3.96874 11Z" fill="#6C7E8B"></path></svg>
            <ButtonText>
              <select
                style={{
                  border: '0px',
                  outline: '0px',
                  backgroundColor: 'rgb(239, 238, 238)'
                }}
                id="language"
                onChange={(e) => setLocale(e.target.value)}
              >
                <option value={LOCALES.INDONESIA}>Indonesia</option>
                <option value={LOCALES.ENGLISH}>English</option>
              </select>
            </ButtonText>
          </InnerButton>
        </SwitchLang>
      </NavbarContainer>
      {routes()}
    </I18nProvider>
  )
}

export default App;