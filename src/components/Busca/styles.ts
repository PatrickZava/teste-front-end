import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 113px;
  display: flex;
  flex-direction: column;
`

export const TextoBuscaPersonagem = styled.h2`
  text-align: left;
  font: normal normal bold 32px/30px PT Sans Caption;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
  margin-bottom:16px; 

  @media screen and (max-width: 750px) {
    display: flex;
    justify-content:center; 
    align-items:center;
  }
`

export const TextoNomePersonagem = styled.h2`
  text-align: left;
  font: normal normal bold 16px/24px PT Sans Caption;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
  margin-bottom:8px;

  @media screen and (max-width: 750px) {
    display: flex;
    justify-content:center; 
    align-items:center;
  }
`

export const ConteudoBusca = styled.div`
  max-width: 295px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  opacity: 1;
  padding: 0 16px;
  margin-bottom: 40px;

  @media screen and (max-width: 750px) {
    max-width: 750px;
  }
`

export const InputBusca = styled.input`
  border: 0;
  text-align: left;
  font: italic normal normal 14px/19px PT Sans;
  letter-spacing: 0px;
  color: #8E8E8E;
  opacity: 1;
  outline: none;
  flex-grow: 1;
  
  &::placeholder {
    text-align: left;
    font: italic normal normal 14px/19px PT Sans;
    letter-spacing: 0px;
    color: #8E8E8E;
    opacity: 1;
   }
`

export const Img = styled.img`
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`

