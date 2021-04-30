import {createContext, useState, useContext} from "react";

const BuscaContext = createContext();

export default function BuscaProvider({ children }) {
  const [personagemBuscado, setPersonagemBuscado] = useState();

  return <BuscaContext.Provider 
    value={{personagemBuscado, setPersonagemBuscado}}> 
    { children }
    </BuscaContext.Provider>
}

export function useBusca() {
  const context = useContext(BuscaContext);
  const { personagemBuscado, setPersonagemBuscado } = context;
  return { personagemBuscado, setPersonagemBuscado };
}