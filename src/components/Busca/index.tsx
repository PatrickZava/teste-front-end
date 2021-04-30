import search from '../../assets/search.svg'
import { Container, ConteudoBusca, Img, InputBusca, TextoBuscaPersonagem, TextoNomePersonagem } from "./styles";
import { useBusca } from '../../context/Busca'
import { useState } from 'react';

export function Busca() {
  const { setPersonagemBuscado } = useBusca();
  const [ inputText, setInputText ] = useState('');

  return (
    <Container>
      <TextoBuscaPersonagem>Busca de personagens</TextoBuscaPersonagem>
      <TextoNomePersonagem>Nome do personagem</TextoNomePersonagem>

      <ConteudoBusca> 
        <InputBusca placeholder='Search' 
        onChange={e => setInputText(e.target.value)} 
        onKeyPress={event => {
                if (event.key === 'Enter') {
                  setPersonagemBuscado(inputText)}
              }} />
        <Img src={search} alt="search" onClick={ () => setPersonagemBuscado(inputText) }/>
      </ConteudoBusca>                    

    </Container>
  )

}