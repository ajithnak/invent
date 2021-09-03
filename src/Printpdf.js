import React  from 'react';
import jsPDF from 'jspdf';
import "jspdf-autotable";

function Printpdf(){
  

   const exportPDF =() =>{
      const unit ="pt";
      const size ="A4";
      const orientation ="portrait";
      const marginLeft= 40;
      const doc = new jsPDF(orientation,unit,size);

   doc.setFontSize(15);
   const title = "Invoice";
   const headers = [["Title","Price","Total"]];

   


   let content = {
     startY: 50,
     head: headers,
     
   };

   doc.text(title, marginLeft, 40);
   doc.autoTable(content);
   doc.save("invoice.pdf")
 
 }

  return (
    
    <div>
      <button type="button" class="btn btn-primary" onClick={exportPDF} >Print</button>
    </div>
    
  
  )
}

export default Printpdf;
