import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import '../App.css';

class Printpdf extends React.Component {

  constructor() {
    super();
    this.state = {
      people: [
        { title: "Title will be here ", price: "Price will be here " },
        
      ]
    }
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; 
    const orientation = "portrait"; 

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["TITLE", "PRICE"]];

    const data = this.state.people.map(e=> [e.title, e.price]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("invoice.pdf")
  }

  render() {
    return (
      <div>
        <button type="button" class="btn btn-primary" onClick={() => this.exportPDF()}>Print</button>
      </div>
    );
  }
}

export default Printpdf;