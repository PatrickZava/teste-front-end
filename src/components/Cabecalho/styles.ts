import styled from 'styled-components';

export const Container = styled.header`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const Conteudo = styled.div`
  max-width: 1366px;
  padding: 0 16px; 
  display: flex;
  align-items: center;
  background-color: #FFF;
  justify-content: flex-start;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0 5px; 
  }
`

export const NomeCandidato = styled.h2`
  color: #555555;
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  size: 14px;
  font: normal normal bold 14px/20px PT Sans Caption;
  margin-right: 5px;
  
`

export const Texto = styled.h2`
  text-align: left;
  font: normal normal normal 14px/20px PT Sans Caption;
  letter-spacing: 0px;
  color: #555555;
  margin-right: 16px;  
`

export const Cb = styled.h2`
  text-align: left;
  font: normal normal bold 15px/10px PT Sans Caption;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  padding: 10px;
  margin-right: 24px;
`

export const Img = styled.img`
  width: 96px;
  height: 24px; 
  opacity: 1;
  margin-left: 24px;
`

export const ConteudoTexto = styled.div`
  padding: 0 16px; 
  display: flex;
  align-items: center;
  background-color: #FFF;
  justify-content: flex-start;
`