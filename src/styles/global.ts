import {createGlobalStyle} from 'styled-components'

export const EstiloGlobal = createGlobalStyle`

 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background: #E5E5E5;
   -webkit-font-smoothing: antialiased;
 } 

 .react-modal-overlay {
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
 }

 .react-modal-content {
   max-width:100%;
   width: 1000px;
   position: relative;
   border-radius: 4px;
   
 }
`

