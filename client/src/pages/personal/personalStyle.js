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
export const PersonalFormContainer = styled.div`
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

export const FormContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    flex: 0 0 auto;
    padding-left: 100px;
    padding-right: 100px;
    overflow: unset;
  `

export const TitleContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    margin-bottom: 48px;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    flex: 0 0 auto;
  `
export const MainTitle = styled.span`
    align-self: flex-start;
    font-size: 70px;
    line-height: normal;
    text-align: left;
    color: rgb(35, 36, 108);
  `

export const TitleForm = styled.span`
    align-self: flex-start;
    font-size: 32px;
    line-height: normal;
    color: rgb(108, 126, 139);
  `

export const ButtonContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 100%;
    margin-top: 36px;
    min-width: 0px;
    min-height: 0px;
    flex-direction: column;
    padding-left: 100px;
    padding-right: 100px;
  `
