import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'export-button',
  styleUrl: 'export-button.css',
  shadow: false
})
export class ExportierButton {
  @Prop() button: string = "Exportieren";
  @Element() element: HTMLElement;

  @State() datei;

  @State() reglereins : string;
  @State() reglerzwei : string;
  @State() reglerdrei : string;
  @State() reglervier : string;
  @State() reglerfuenf : string;
  @State() reglersechs : string;
  @State() reglersieben : string;
  @State() regleracht : string;
  @State() reglerneun : string;
  @State() reglerzehn : string;
  @State() reglerelf : string;
  @State() reglerzwoelf : string;
  @State() reglerdreizehn : string;
  @State() reglervierzehn : string;

  componentDidLoad() {
    console.log(this.element.querySelector<HTMLTableElement>('#example-table'));
    console.log(this.tableToJson(this.element.querySelector<HTMLTableElement>('#example-table')));
    this.reglereins = localStorage.getItem('reglereins');
    this.reglerzwei = localStorage.getItem('reglerzwei');
    this.reglerdrei = localStorage.getItem('reglerdrei');
    this.reglervier = localStorage.getItem('reglervier');
    this.reglerfuenf = localStorage.getItem('reglerfuenf');
    this.reglersechs = localStorage.getItem('reglersechs');
    this.reglersieben = localStorage.getItem('reglersieben');
    this.regleracht = localStorage.getItem('regleracht');
    this.reglerneun = localStorage.getItem('reglerneun');
    this.reglerzehn = localStorage.getItem('reglerzehn');
    this.reglerelf = localStorage.getItem('reglerelf');
    this.reglerzwoelf = localStorage.getItem('reglerzwoelf');
    this.reglerdreizehn = localStorage.getItem('reglerdreizehn');
    this.reglervierzehn = localStorage.getItem('reglervierzehn');
  }

  tableToJson(table: HTMLTableElement) {
    var data = []; // first row needs to be headers var headers = [];
    for (var i = 0; i < table.rows[0].cells.length; i++) {
      Headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
    }
    // go through cells
    for (var i = 1; i < table.rows.length; i++) {
      var tableRow = table.rows[i]; var rowData = {};
      for (var j = 0; j < tableRow.cells.length; j++) {
        rowData[Headers[j]] = tableRow.cells[j].innerHTML;
      } data.push(rowData);
    }
    console.log(data);
    this.datei = data;
    console.log(this.datei);
    return data;
  }
csv(event){
  console.log(this.datei);
  var json = this.datei;
  console.log(json);
var fields = Object.keys(json[0]);
var replacer = function(key:any, value) { return value === null ? '' : value } 
var csv = json.map(function(row){
  return fields.map(function(fieldName){
    return JSON.stringify(row[fieldName], replacer)
  }).join(';')
})
csv.unshift(fields.join(';')) // add header column
 csv = csv.join('\r\n');
console.log(csv)
var hiddenElement = document.createElement('a');
hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
hiddenElement.target = '_blank';
hiddenElement.download = 'bewertung.csv';
hiddenElement.click();
}
  render() {
    return (
      <div>
      <table id='example-table'>
        <thead>
          <tr>
            <th></th>
            <th >Thematische Ausarbeitung</th>
            <th>Price</th>
            <th>Tax</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Kriterium</th>
            <th>Punkte</th>
            <th>Price</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tr>
          <td>Fachliche Bearbeitung (unter Berücksichtung des Schwierigkeitsgrads)</td>
          <td>{this.reglereins}</td>
          <td>94</td>
          <td>250</td>
          <td>81</td>
        </tr>
        <tr>
          <td>Nutzung von Fachwissen</td>
          <td>{this.reglerzwei}</td>
          <td>94</td>
          <td>250</td>
          <td>81</td>
        </tr>
        <tr>
          <td>Struktur</td>
          <td>{this.reglerdrei}</td>
          <td>80</td>
          <td>950</td>
          <td>412</td>
        </tr>
        <tr>
          <td>Dokumentation</td>
          <td>{this.reglervier}</td>
          <td>67</td>
          <td>750</td>
          <td>941</td>
        </tr>

      </table>
    <button class="button-text" onClick={(event:UIEvent) => this.csv(event)}>{this.button}</button>
      </div>
    );
  }
}
