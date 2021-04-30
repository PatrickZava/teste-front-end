import { Cb, Container, Conteudo, ConteudoTexto, Img, NomeCandidato, Texto } from "./styles";
import logo from '../../assets/logo.svg'

interface Props {
  nomeCandidato: string
};

export function Cabecalho(props : Props) {

  return (
    <Container>
       <Img src={logo} alt="logo"/>
       
       <ConteudoTexto>
        
        <Conteudo>
          <NomeCandidato>{props.nomeCandidato}</NomeCandidato>
          <Texto>Teste de Front-end</Texto>
        </Conteudo>

        <Conteudo>
          <Cb>CB</Cb>
        </Conteudo>

      </ConteudoTexto>     

    </Container>
  )
}