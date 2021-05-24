import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    background-color: rgb(239, 238, 238);
    color: rgb(68, 68, 68);
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
  `

export const NavbarContainer = styled.header`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(239, 238, 238);
    color: rgb(68, 68, 68);
    min-width: 0px;
    min-height: 0px;
    flex-direction: row;
    height: 100px;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 12px 48px;
  `

export const SwitchLang = styled.button`
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
    text-decoration: none;
    margin: 0px;
    background: transparent;
    overflow: visible;
    text-transform: none;
    border: none;
    border-radius: 18px;
    line-height: 24px;
    padding: 8px 12px;
    color: rgb(68, 68, 68);
    text-align: center;
    transition-property: color, background-color, border-color, box-shadow;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
    height: 48px;
    font-size: 16px;
    font-weight: 700;
  `

export const InnerButton = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    -webkit-box-align: center;
    align-items: center;
    min-width: 0px;
    min-height: 0px;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
  `

export const ButtonText = styled.span`
    margin-left: 8px;
    font-size: 16px;
    line-height: normal;
    color: rgb(35, 36, 108);
    font-weight: 700;
  `

export const HomeContentContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    flex: 0 0 auto;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding-top: 32px;
    padding-bottom: 32px;
    overflow: unset;
  `

export const HomeContent = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    overflow: unset;
  `
  export const HomeButtonContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    margin-top: 36px;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    flex: 0 0 auto;
    padding-left: 100px;
    padding-right: 100px;
  `

  export const HomeButtonStart = styled.button`
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
    text-decoration: none;
    margin: 0px;
    background: rgb(254, 207, 0);
    overflow: visible;
    text-transform: none;
    border: none;
    padding: 4px 22px;
    line-height: 24px;
    color: rgb(35, 36, 108);
    border-radius: 4px;
    text-align: center;
    transition-property: color, background-color, border-color, box-shadow;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
    height: 48px;
    font-size: 16px;
    font-weight: 700;
    width: 270px;
  `

export const InnerHomeContent = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0px;
    min-height: 0px;
    flex-direction: row-reverse;
    padding-left: 100px;
    padding-right: 100px;
  `

export const HomeImageContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    -webkit-box-align: center;
    align-items: center;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    width: 40%;
    flex: 0 0 auto;
    -webkit-box-pack: start;
    justify-content: flex-start;
  `

export const HomeHeaderContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    margin-bottom: 24px;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    flex: 0 0 auto;
  `

export const HomeHeader = styled.span`
    align-self: flex-start;
    font-size: 32px;
    line-height: normal;
    text-align: left;
    color: rgb(35, 36, 108);
  `

export const HomeTextContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    width: 60%;
    flex: 0 0 auto;
  `

export const HomeTextParagraph = styled.p`
    font-family: Helvetica;
    font-size: 16px;
    color: #6c7e8b;
    display: block;
    line-height: 1.5;
  `

export const HomeTextListRules = styled.ul`
    font-family: Helvetica;
    font-size: 16px;
    color: #6C7E8B;
  `

export const HomeTextListHospital = styled.ol`
  font-family: Helvetica;
  font-size: 16px;
  color: #6C7E8B;
`