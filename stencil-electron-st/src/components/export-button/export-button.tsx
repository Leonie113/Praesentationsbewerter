import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "export-button",
  styleUrl: "export-button.css",
  shadow: false,
})
export class ExportierButton {
  @Prop() button: string;
  @State() csvdatei;

    

cvsExportieren(){
  this.csvdatei = localStorage.getItem('csvdatei');
  console.log(this.csvdatei);
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(this.csvdatei);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'bewertung.csv';
  hiddenElement.click();
  }




// var hiddenElement = document.createElement('a');
// hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
// hiddenElement.target = '_blank';
// hiddenElement.download = 'bewertung.csv';
// hiddenElement.click();
// }
  render() {
    return (

        <button
          class="button-text"
          onClick={this.cvsExportieren}
        >
          {this.button}
        </button>
    );
  }
}
