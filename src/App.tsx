import { Busca } from './components/Busca';
import { Cabecalho } from './components/Cabecalho';
import { Grid } from './components/Grid';
import { EstiloGlobal } from './styles/global';
import BuscaProvider from './context/Busca'

export function App() {

  return (
    <BuscaProvider>
      <EstiloGlobal/>

      <Cabecalho nomeCandidato='Patrick Hernandez Zava'/>  
      <Busca/>
      <Grid/>
    </BuscaProvider>
  );
}

