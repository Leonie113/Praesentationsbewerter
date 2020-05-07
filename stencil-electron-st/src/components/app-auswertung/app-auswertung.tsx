import { Component, Prop, State, } from '@stencil/core';


@Component({
  tag: 'app-auswertung',
  styleUrl: 'app-auswertung.css',
})
export class AppAuswertung{
  @Prop() test: string;

  @State() datei;
  tabelle : HTMLTableElement;

  @State() ergebnisTA : string;
  @State() ergebnisPR : string;
  @State() ergebnisHW : string;
  @State() ergebnisPAE : string;
  @State() ergebnisPunkte : string;
  @State() ergebnisProzent : string;
  @State() prozent : number;
  @State() note : string;

  @State() werteins : number;
  @State() wertzwei : number;
  @State() wertdrei : number;
  @State() wertvier : number;
  @State() wertfuenf : number;
  @State() wertsechs : number;
  @State() wertsieben : number;
  @State() wertacht : number;
  @State() wertneun : number;
  @State() wertzehn : number;
  @State() wertelf : number;
  @State() wertzwoelf : number;
  @State() wertdreizehn : number;
  @State() wertvierzehn : number;

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


  componentWillLoad() {
    // const customTable: HTMLElement = <table-test></table-test>;
    // const tableEl = customTable.querySelector<HTMLTableElement>('table')
    // this.tableToJson(tableEl);
    // this.tabelle = 
    //               // <table>
    //               //   <thead>
    //               //     <tr>
    //               //     <td>hiii</td>
    //               //     <td>hallo</td>
    //               //     </tr>
    //               //   </thead>
    //               //   <tr>
    //               //     <td>hahaah</td>
    //               //     <td>guhug</td>
    //               //   </tr>
    //               // </table>
    // console.log(this.tabelle);

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

    this.werteins = Number(localStorage.getItem('reglereins'));
    this.wertzwei = Number(localStorage.getItem('reglerzwei'));
    this.wertdrei = Number(localStorage.getItem('reglerdrei'));
    this.wertvier = Number(localStorage.getItem('reglervier'));
    this.wertfuenf = Number(localStorage.getItem('reglerfuenf'));
    this.wertsechs = Number(localStorage.getItem('reglersechs'));
    this.wertsieben = Number(localStorage.getItem('reglersieben'));
    this.wertacht = Number(localStorage.getItem('regleracht'));
    this.wertneun = Number(localStorage.getItem('reglerneun'));
    this.wertzehn = Number(localStorage.getItem('reglerzehn'));
    this.wertelf = Number(localStorage.getItem('reglerelf'));
    this.wertzwoelf = Number(localStorage.getItem('reglerzwoelf'));
    this.wertdreizehn = Number(localStorage.getItem('reglerdreizehn'));
    this.wertvierzehn = Number(localStorage.getItem('reglervierzehn'));

    this.addiereGesamtPunkte();
    this.addiereGesamtProzent();
    this.berechneNote();
    }

  
  // tableToJson(table: HTMLTableElement) {
  //     var data = []; // first row needs to be headers var headers = [];
  //     console.log(data);
  //     for (var i = 0; i < table.rows[0].cells.length; i++) {
  //       Headers[i] = table.rows[0].cells[i].innerHTML
  //         .toLowerCase()
  //         .replace(/ /gi, "");
  //     }
  //     // go through cells
  //     for (var i = 1; i < table.rows.length; i++) {
  //       var tableRow = table.rows[i];
  //       var rowData = {};
  //       for (var j = 0; j < tableRow.cells.length; j++) {
  //         rowData[Headers[j]] = tableRow.cells[j].innerHTML;
  //       }
  //       data.push(rowData);
  //       console.log(rowData);
  //     }
  //     console.log(data);
  //     this.datei = data;
  //     console.log(this.datei);
  //     return data;
  //   }
  // csv(event){
  //   console.log(this.datei);
  //   console.log(event);
  //   var json = this.datei;
  //   console.log(json);
  // var fields = Object.keys(json[0]);
  // var replacer = function(key, value) { console.log(key); return value === null ? '' : value } 
  // var csv = json.map(function(row){
  //   return fields.map(function(fieldName){
  //     return JSON.stringify(row[fieldName], replacer)
  //   }).join(',')
  // })
  // csv.unshift(fields.join(',')) // add header column
  //  csv = csv.join('\r\n');
  // console.log(csv)
  // var hiddenElement = document.createElement('a');
  // hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  // hiddenElement.target = '_blank';
  // hiddenElement.download = 'bewertung.csv';
  // hiddenElement.click();
  // }

  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Deine Bewertung wird nun gespeichert");
    console.log(event);
  }
  todoListElement: any = document.querySelector('eingabe-felder');

  addiereThematischeAusarbeitung(){
    var x = (this.werteins + this.wertzwei + this.wertdrei + this.wertvier);
    console.log(x);
    this.ergebnisTA = x.toString()
    console.log(this.ergebnisTA);
    localStorage.setItem('ergebnisTA',this.ergebnisTA);
  }

  addiereProdukt(){
    var x = (this.wertfuenf + this.wertsechs);
    console.log(x);
    this.ergebnisPR = x.toString()
    console.log(this.ergebnisPR);
    localStorage.setItem('ergebnisPR',this.ergebnisPR);
  }

  addiereHerangehensweise(){
    var x = (this.wertsieben + this.wertacht + this.wertneun + this.wertzehn);
    console.log(x);
    this.ergebnisHW = x.toString()
    console.log(this.ergebnisHW);
    localStorage.setItem('ergebnisHW',this.ergebnisHW);
  }

  addierePraesentation(){
    var x = (this.wertelf + this.wertzwoelf + this.wertdreizehn + this.wertvierzehn);
    console.log(x);
    this.ergebnisPAE = x.toString()
    console.log(this.ergebnisPAE);
    localStorage.setItem('ergebnisPAE',this.ergebnisPAE);
  }

  addiereGesamtPunkte(){
    var a = Number(this.ergebnisTA);
    var b = Number(this.ergebnisPR);
    var c = Number(this.ergebnisPAE);
    var d = Number(this.ergebnisHW);
    var e = (a + b + c + d);
    console.log(e);
    this.ergebnisPunkte = e.toString();
    console.log(this.ergebnisPunkte);
  }

  addiereGesamtProzent(){
    var f = Number(this.ergebnisTA);
    var g = Number(this.ergebnisPR);
    var h = Number(this.ergebnisPAE);
    var i = Number(this.ergebnisHW);
    var j = (f + g + h + i);
    var k = (j*0.71428571);
    var l = Math.round(k)
    this.prozent = l;
    this.ergebnisProzent = l.toString();
    console.log(this.ergebnisProzent);
  }

  berechneNote(){
    var y = ((100-this.prozent)*0.05)+1
    var x = Math.round (y * 100) / 100;
    this.note = x.toString();
    console.log(this.note);
  }

  render() {
    return (
      <div class='app-home'>
                
        <headline-mittig text="Auswertung &amp; Anmerkungen"></headline-mittig>
        {this.addiereThematischeAusarbeitung()}
        {this.addiereProdukt()}
        {this.addiereHerangehensweise()}
        {this.addierePraesentation()}
        <div class="flex-container">
          <div id="linkeSeite" class="flex-item">
            
            <auswertung-button class="aufklappbuttons"
              ueberschrift="Thematische Ausarbeitung" 
              kriteriumeins="Fachliche Bearbeitung (unter Berücksichtung des Schwierigkeitsgrads)"
              kriteriumzwei="Nutzung von Fachwissen"
              kriteriumdrei="Struktur"
              kriteriumvier="Dokumentation"
              reglereins={this.reglereins}
              reglerzwei={this.reglerzwei}
              reglerdrei={this.reglerdrei}
              reglervier={this.reglervier}
              punkte = {this.ergebnisTA}
          ></auswertung-button >

            <auswertung-button-kurz class="aufklappbuttons"
              ueberschrift="Produkt"
              kriteriumeins="Umsetzbarkeit des Ergebnisses"
              kriteriumzwei="Kreativität"
              reglerfuenf={this.reglerfuenf}
              reglersechs={this.reglersechs}
              punkte={this.ergebnisPR}
            ></auswertung-button-kurz>

            <auswertung-button class="aufklappbuttons" 
              ueberschrift="Herangehensweise"
              kriteriumeins="Methodik"
              kriteriumzwei="Selbstständigkeit, Eigeninitiative"
              kriteriumdrei="Kommunikation"
              kriteriumvier="Dokumentation"
              reglereins={this.reglersieben}
              reglerzwei={this.regleracht}
              reglerdrei={this.reglerneun}
              reglervier={this.reglerzehn}
              punkte = {this.ergebnisHW}
            ></auswertung-button>

            <auswertung-button class="aufklappbuttons-last" 
              ueberschrift="Präsentation"
              kriteriumeins="Rhetorik"
              kriteriumzwei="Ansprache"
              kriteriumdrei="Medien"
              kriteriumvier="Diskussion"
              reglereins={this.reglerelf}
              reglerzwei={this.reglerzwoelf}
              reglerdrei={this.reglerdreizehn}
              reglervier={this.reglervierzehn}
              punkte = {this.ergebnisPAE}
    > </auswertung-button>
            <auswertung-daten
              Ueberschrift="Überblick   ▼" 
            ></auswertung-daten>

          </div>
          <div id="rechts" class="flex-item">
            <anmerkungs-feld></anmerkungs-feld>
            <div id="gesamt">
          <test-larissa
          punkte ={this.ergebnisPunkte}
          prozent ={this.ergebnisProzent}
          noteend ={this.note}>
          </test-larissa>
          <div id="auswertungs-buttons">

          <export-button button="Exportieren"></export-button>
          <bewertung-end></bewertung-end>
        </div>
          </div>


          </div>
        </div>
        <div>
          <stencil-route-link url="/bewertung">
          <zurueck-button></zurueck-button>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
