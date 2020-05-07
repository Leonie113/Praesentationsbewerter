import { Component, ComponentInterface, Element, State } from "@stencil/core";

@Component({
  tag: "table-test",
  styleUrl: "table-test.css",
  shadow: false,
})
export class TabelleTest implements ComponentInterface {
  @Element() el: Element;
  @State() table: HTMLTableElement;
  @State() exampleData;

  @State() reglereins: string;
  @State() reglerzwei: string;
  @State() reglerdrei: string;
  @State() reglervier: string;
  @State() reglerfuenf: string;
  @State() reglersechs: string;
  @State() reglersieben: string;
  @State() regleracht: string;
  @State() reglerneun: string;
  @State() reglerzehn: string;
  @State() reglerelf: string;
  @State() reglerzwoelf: string;
  @State() reglerdreizehn: string;
  @State() reglervierzehn: string;

  @State() dozent: string;
  @State() gruppe: string;
  @State() matrikelnummereins: string;
  @State() matrikelnummerzwei: string;
  @State() matrikelnummerdrei: string;
  @State() matrikelnummervier: string;
  @State() matrikelnummerfuenf: string;
  @State() matrikelnummersechs: string;
  @State() matrikelnummersieben: string;
  @State() matrikelnummeracht: string;
  @State() projekt: string;
  @State() leistung: string;
  @State() veranstaltung: string;

  @State() anmerkungen: string;
  @State() guteaspekte: string;
  @State() verbesserung: string;

  @State() ergebnisTA: string;
  @State() ergebnisPR: string;
  @State() ergebnisHW: string;
  @State() ergebnisPAE: string;

  @State() punkte : string;
  @State() prozent : string;
  @State() note : string;
  
  componentDidLoad() {
    this.getTable();
    const json = this.tableToJson(this.table);
    console.log(json);
    this.toCSV(json);
  }
  
  getTable() {
    this.table = this.el.querySelector("#example-table") as HTMLTableElement;
    console.log(this.table);
  }


  tableToJson(table: HTMLTableElement) {
    var data = [];
    for (var i = 0; i < table.rows.length; i++) {
      var tableRow = table.rows[i];
      var rowData = [];
      for (var j = 0; j < tableRow.cells.length; j++) {
        rowData.push(tableRow.cells[j].innerHTML);
      }
      data.push(rowData);
    }
    console.log(data);
    return data;
  }
  toCSV(json: JSON[]){
  var json =    json = Object.values(json);
  console.log(json);
  var fields = Object.keys(json[0]);
  console.log(fields);
  var replacer = function(key, value) { console.log(key); return value === null ? '' : value } 
  var csv : any = json.map(function(row){
  return fields.map(function(fieldName){
    return JSON.stringify(row[fieldName], replacer)
  }).join(',')
  })
  csv.unshift(fields.join(',')) // add header column
  csv  = csv.join('\r\n');
  console.log(csv);
  localStorage.setItem('csvdatei', csv);
  }
  // toCSV(json: JSON[]) {
  //   json = Object.values(json);
  //   console.log(json);
  //   var csv = "";
  //   var keys = (json[0] && Object.keys(json[0])) || [];
  //   for (var line of json) {
  //     csv += keys.map((key) => line[key]).join(",") + "\n";
  //   }
  //   console.log(csv);
  //   localStorage.setItem('csvdatei', csv);
  //   return csv;
  // }

  componentWillLoad() {
    this.reglereins = localStorage.getItem("reglereins");
    this.reglerzwei = localStorage.getItem("reglerzwei");
    this.reglerdrei = localStorage.getItem("reglerdrei");
    this.reglervier = localStorage.getItem("reglervier");
    this.reglerfuenf = localStorage.getItem("reglerfuenf");
    this.reglersechs = localStorage.getItem("reglersechs");
    this.reglersieben = localStorage.getItem("reglersieben");
    this.regleracht = localStorage.getItem("regleracht");
    this.reglerneun = localStorage.getItem("reglerneun");
    this.reglerzehn = localStorage.getItem("reglerzehn");
    this.reglerelf = localStorage.getItem("reglerelf");
    this.reglerzwoelf = localStorage.getItem("reglerzwoelf");
    this.reglerdreizehn = localStorage.getItem("reglerdreizehn");
    this.reglervierzehn = localStorage.getItem("reglervierzehn");

    this.dozent = localStorage.getItem("dozent");
    this.gruppe = localStorage.getItem("gruppe");
    this.matrikelnummereins = localStorage.getItem("matrikelnummereins");
    this.matrikelnummerzwei = localStorage.getItem("matrikelnummerzwei");
    this.matrikelnummerdrei = localStorage.getItem("matrikelnummerdrei");
    this.matrikelnummervier = localStorage.getItem("matrikelnummervier");
    this.matrikelnummerfuenf = localStorage.getItem("matrikelnummerfuenf");
    this.matrikelnummersechs = localStorage.getItem("matrikelnummersechs");
    this.matrikelnummersieben = localStorage.getItem("matrikelnummersieben");
    this.matrikelnummeracht = localStorage.getItem("matrikelnummeracht");
    this.projekt = localStorage.getItem("projekt");
    this.leistung = localStorage.getItem("leistung");
    this.veranstaltung = localStorage.getItem("veranstaltung");

    this.anmerkungen = localStorage.getItem("anmerkung");
    this.guteaspekte = localStorage.getItem("guteAspekte");
    this.verbesserung = localStorage.getItem("verbesserung");

    this.ergebnisTA = localStorage.getItem("ergebnisTA");
    this.ergebnisPR = localStorage.getItem("ergebnisPR");
    this.ergebnisHW = localStorage.getItem("ergebnisHW");
    this.ergebnisPAE = localStorage.getItem("ergebnisPAE");

    this.punkte = localStorage.getItem("punkte");
    this.prozent = localStorage.getItem("prozent");
    this.note = localStorage.getItem("note");
  }

  render() {
    return (
        <table id="example-table">
          <thead>
            <tr>
            <th colSpan={4}> Auswertungstabelle des Praesentationsbewerters</th>    
            </tr>
          </thead>
            <tr>
            <th colSpan={3} >Daten zur Bewertung:</th>
            </tr>
          <tr>
            <td>Dozent:</td>
          </tr>
          <tr>
          <td>{this.dozent}</td>
          </tr>
          <tr>
            <td>Name des Studierenden/Gruppe:</td>
          </tr>
          <tr>
            <td>{this.gruppe}</td>
          </tr>
          <tr><td>Matrikelnummer(n):</td></tr>
          <tr><td>{this.matrikelnummereins}</td></tr>
          <tr><td>{this.matrikelnummerzwei}</td></tr>
          <tr><td>{this.matrikelnummerdrei}</td></tr>
          <tr><td>{this.matrikelnummervier}</td></tr>
          <tr><td>{this.matrikelnummerfuenf}</td></tr>
          <tr><td>{this.matrikelnummersechs}</td></tr>
          <tr><td>{this.matrikelnummersieben}</td></tr>
          <tr>
            <td>Lehrveranstaltung:</td>
          </tr>
          <tr><td>{this.veranstaltung}</td></tr>

          <tr><td></td></tr>

          <tr><td>Thematische Ausarbeitung: Gesamt Punktzahl: {this.ergebnisTA}/40P</td></tr>
          <tr><td>Kriterium:
              Fachliche Bearbeitung (unter Beruecksichtung des
              Schwierigkeitsgrads)</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglereins}/10</td></tr>

          <tr><td>Kriterium:
            Nutzung von Fachwissen</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglerzwei}/10</td></tr>

          <tr><td>Kriterium:
              Struktur</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglerdrei}/10</td></tr>

          <tr><td>Kriterium:
           Recherche</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglervier}/10</td></tr>

          <tr><td></td></tr>
                    
          <tr><td>Produkt: Gesamt Punktzahl: {this.ergebnisPR}/20P</td></tr>
          <tr><td>Kriterium:
          Umsetzbarkeit des Ergebnisses</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglerfuenf}/10</td></tr>

          <tr><td>Kriterium:
          Kreativitaet</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglersechs}/10</td></tr>

          <tr><td></td></tr>

          
          <tr><td>Herangehensweise: Gesamt Punktzahl: {this.ergebnisHW}/40P</td></tr>
          <tr><td>Kriterium:
          Methodik</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglersieben}/10</td></tr>

          <tr><td>Kriterium:
          Selbststaendigkeit, Eigeninitiative</td></tr>
          <tr><td>Erreichte Punktzahl: {this.regleracht}/10</td></tr>

          <tr><td>Kriterium:
          Kommunikation</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglerneun}/10</td></tr>

          <tr><td>Kriterium:
           Dokumentation</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglerzehn}/10</td></tr>

          <tr><td></td></tr>
          
          <tr><td>Praesentation: Gesamt Punktzahl: {this.ergebnisPAE}/40P</td></tr>
          <tr><td>Kriterium:
          Rhetorik</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglerelf}/10</td></tr>

          <tr><td>Kriterium:
          Ansprache</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglerzwoelf}/10</td></tr>

          <tr><td>Kriterium:
          Medien</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglerdreizehn}/10</td></tr>

          <tr><td>Kriterium:
          Diskussion</td></tr>
          <tr><td>Erreichte Punktzahl: {this.reglervierzehn}/10</td></tr>

          <tr><td></td></tr>

          <tr><td>Anmerkungen:</td></tr>
          <tr><td>{this.anmerkungen}</td></tr>  
          <tr><td>Gute Aspekte:</td></tr>
          <tr><td>{this.guteaspekte}</td></tr>
          <tr><td>Verbesserungsvorschlaege:</td></tr>
          <tr><td>{this.verbesserung}</td></tr>

          <tr><td></td></tr>
          <tr><td>Gesamt Punkte:</td></tr>
          <tr><td>{this.punkte}</td></tr>  
          <tr><td>Gesamt Prozent:</td></tr>
          <tr><td>{this.prozent}</td></tr>
          <tr><td>Note:</td></tr>
          <tr><td>{this.note}</td></tr>
        </table>

    );
  }
}
