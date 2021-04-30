import styled from 'styled-components'

export const Container= styled.div`
  margin: 0 113px;
  margin-bottom: 24px;
`

export const CabecalhoGrid = styled.div`
    display: flex;
    margin-bottom: 9px;
    padding-left: 24px;
`

export const TextoCabecalhoPersonagem = styled.h2`
  text-align: left;
  font: normal normal normal 12px/16px PT Sans;
  letter-spacing: 0px;
  color: #8E8E8E;
  opacity: 1;
  flex-grow: 1;
`

export const TextoCabecalhoSeries = styled.h2`
  text-align: left;
  font: normal normal normal 12px/16px PT Sans;
  letter-spacing: 0px;
  color: #8E8E8E;
  opacity: 1;
  flex-grow: 1;
  @media screen and (max-width: 750px) {
    display: none !important;
  }
`

export const TextoCabecalhoEventos = styled.h2`
  text-align: left;
  font: normal normal normal 12px/16px PT Sans;
  letter-spacing: 0px;
  color: #8E8E8E;
  opacity: 1;
  flex-grow: 1;
  @media screen and (max-width: 750px) {
    display: none !important;
  }
`

export const ConteudoGrid = styled.div`
  display: flex;
`

export const ItemGrid = styled.div`
  height: 88px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000033;
  opacity: 1;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  margin-bottom: 8px;

  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.96);

  }
`

export const PersonagemGrid = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  flex-basis: 100%;
`

export const SeriesGrid = styled.div`
  margin-left: 24px;
  flex-basis: 100%;
  
  @media screen and (max-width: 750px) {
    display: none !important;
  }
`

export const EventosGrid = styled.div`
  flex-basis: 100%;

  @media screen and (max-width: 750px) {
    display: none !important;
  }
`

export const ImgPersonagemGrid = styled.img`
  margin-right:24px;
  width: 48px;
  height: 48px;
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
`

export const NomePersonagemGrid = styled.h2`
  text-align: left;
  font: normal normal bold 16px/22px PT Sans;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
`

export const ItemSerieGrid = styled.div`
  font: normal normal normal 14px/16px PT Sans;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
  line-height: 1.3;
`

export const ItemEventosGrid = styled.div`
  text-align: left;
  font: normal normal normal 14px/16px PT Sans;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
`

export const ModalNomePersonagem = styled.h2`
  text-align: left;
  font: normal normal bold 20px/26px PT Sans;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
  padding: 15px;
  background: #FFFFFF;
`

export const ImgModal = styled.img`
  margin-right:24px;
  width: 80px;
  height: 130px;
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  background: #FFF;
`

export const TituloModal =styled.h2`
  text-align: center;
  font: normal normal bold italic 14px/20px PT Sans;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
  background: #FFF;
  margin-right: 24px;
  margin-top: 7px;
`

export const ItemGridModal = styled.div`
  width: 300px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  background: #FFF;
`

export const GridModal = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  padding-top: 10px;
  display: flex;
  flex-grow: 1;
  flex-wrap : wrap;
  flex-direction: row;
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 2px;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 50px;
`

export const Comics = styled.h2`
  text-align: left;
  font: normal normal italic 18px/24px PT Sans;
  color: #555555;
  background: #FFFFFF;
`

export const CabecalhoModal = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #FFFFFF;
  color: #555555;
  opacity: 1;
  padding: 15px;
`

export const AlertaMsg= styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  font: normal normal italic 20px/26px PT Sans;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;
  margin-right: 50px;
  margin-top: 10px;
  margin-bottom: 40px;
  background: #FFF;
`
export const Img = styled.img`
  margin-right:24px;
  width: 80px;
  height: 80px;
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
`

export const ContainerAlerta = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  opacity: 1;
  padding: 5px; 
  margin-top: 5px; 
  margin-right: 50px;
`