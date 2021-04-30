import { useState, useEffect } from 'react';
import { AlertaMsg, CabecalhoGrid, CabecalhoModal, Container, ContainerAlerta, Comics, EventosGrid, GridModal, Img, ImgModal, ImgPersonagemGrid, ItemGridModal, ItemEventosGrid, ItemGrid, ItemSerieGrid, 
         ModalNomePersonagem, NomePersonagemGrid, PersonagemGrid, SeriesGrid, TextoCabecalhoEventos, TextoCabecalhoPersonagem, TextoCabecalhoSeries, TituloModal } from "./styles";
import { useBusca } from "../../context/Busca";
import ReactPaginate from 'react-paginate';
import "./styles.css";
import thor from '../../assets/thor.svg'
import Modal from 'react-modal'

interface Dados {
  id: number;
  name: string;
  series: {
    items:[
      {name: string}
    ]
  };
  events: {
    items:[
      {name: string}
    ]
  };
  thumbnail:{
    extension: string;
    path:string;
  }
};

interface DadosComics {
  id: number;
  title: string;
  thumbnail:{
    extension: string;
    path:string;
  }
};

interface IndexModal {
  index: number;
  dados: {
    id: number;
  }
}

const POR_PAGINA  = 10;

export function Grid() {
  const {personagemBuscado} = useBusca();
  const [dadosApi, setDadosApi] = useState<Dados[]>([]);
  const [dadosComics, setDadosComis] = useState<DadosComics[]>([]);
  const [indexModal, setIndexModal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  
  let currentPageData;

  function handleAbrirModal({index, dados } : IndexModal) {
    setIndexModal(index);
    
    setDadosComis([]) 
  
    fetch('http://gateway.marvel.com/v1/public/characters/'+dados.id+'/comics?apikey=86216368dd8347028c481539afee7e1d&hash=bd7d02709cae527e06a2c1f748a43712&ts=1619612565')
    .then(response => response.json())
    .then(data => {
      setModalAberto(true);
      setDadosComis(data.data.results);
    })
  }

  function handleFecharModal() {
    setModalAberto(false);
  }

  useEffect( () => {

    fetch('https://gateway.marvel.com/v1/public/characters?apikey=86216368dd8347028c481539afee7e1d&hash=bd7d02709cae527e06a2c1f748a43712&ts=1619612565&limit=50&'+(personagemBuscado ? '&name='+personagemBuscado : ''))
    .then(response => response.json())
    .then(data => {
      setDadosApi(data.data.results);
      setCurrentPage(0);
    })
  }, [personagemBuscado]);

  function handlePageClick( {selected}: { selected: any }) {
    setCurrentPage(selected);
  }

  const offset = currentPage * POR_PAGINA;

  const pageCount = Math.ceil(dadosApi.length / POR_PAGINA);

  return (
    <>
      <Container>
        <CabecalhoGrid>
          <TextoCabecalhoPersonagem>Personagem</TextoCabecalhoPersonagem>
          
          <TextoCabecalhoSeries>Séries</TextoCabecalhoSeries>
          <TextoCabecalhoEventos>Eventos</TextoCabecalhoEventos> 
        </CabecalhoGrid>

        <div>
          { dadosApi
          .slice(offset, offset + POR_PAGINA)
          .map( (dados, index) => {
            return (
                <ItemGrid key={dados.id} onClick={()=>handleAbrirModal({index, dados})}>

                  <PersonagemGrid>
                    <ImgPersonagemGrid src={dados.thumbnail.path + "/portrait_medium." + dados.thumbnail.extension} />
                    <NomePersonagemGrid >{dados.name}</NomePersonagemGrid>
                  </PersonagemGrid>

                  <SeriesGrid>
                    {dados.series.items.filter((item, idx) => idx < 3).map(dadosSerie => <ItemSerieGrid key={dadosSerie.name}>{dadosSerie.name}</ItemSerieGrid>  )}
                  </SeriesGrid>

                  <EventosGrid>
                    {dados.events.items.filter((item, idx) => idx < 3).map(dadosSerie => <ItemEventosGrid key={dadosSerie.name}>{dadosSerie.name}</ItemEventosGrid>  )}
                  </EventosGrid>

                </ItemGrid>
            )
          })}
        </div>

        <Modal isOpen={modalAberto} 
            onRequestClose={handleFecharModal} 
            overlayClassName="react-modal-overlay"
            className="react-modal-content" 
            ariaHideApp={false}>

            <CabecalhoModal>
              <ModalNomePersonagem>{dadosApi[currentPage > 0 ? indexModal + (currentPage*10) : indexModal]?.name}</ModalNomePersonagem>
              <Comics>( Comics )</Comics>
            </CabecalhoModal>

            <GridModal>
                  {dadosComics.length <= 0 && 
                    <ContainerAlerta>
                      <Img src={thor} alt="thor"/>
                      <AlertaMsg> Nenhuma informação encontrada...</AlertaMsg>
                    </ContainerAlerta> 
                  }
                
                  {dadosComics.filter((item, idx) => idx < 9).map(dadoComics => {
                    return (
                        <ItemGridModal key={dadoComics.thumbnail.path}>
                          <ImgModal src={dadoComics.thumbnail.path + "/portrait_medium." + dadoComics.thumbnail.extension} />
                          <TituloModal >{dadoComics.title}</TituloModal>
                        </ItemGridModal> 
                    )})
                  }              
            </GridModal>

        </Modal>

      </Container>

      <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"} 
          nextLinkClassName={"pagination__link"}
          activeClassName={"pagination__link--active"}
          disabledClassName={"pagination__link--disabled"}
        />     

        {currentPageData}
    </>

  )
}