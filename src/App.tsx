import React from "react";
import { PDFDownloadLink ,PDFViewer } from "@react-pdf/renderer";

import "./App.css";
import Pdf from "../src/componet/Pdf";

function App() {
  return (
    <>

    <PDFDownloadLink document={<Pdf/>} fileName="factura.pdf">
      {
        (loading,url,error,blop)=>   loading ? <button>Descagar</button> : <button>Loading...</button>
      }
    
    </PDFDownloadLink><br/>
    <PDFViewer width={750} height={500}>
      <Pdf/>
    </PDFViewer>
    
    
    </>
  );
}

export default App;
