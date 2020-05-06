import { Component, Element, Prop, State } from "@stencil/core";

@Component({
  tag: "export-button",
  styleUrl: "export-button.css",
  shadow: false,
})
export class ExportierButton {
  @Prop() button: string = "Exportieren";
  @Element() element: HTMLElement;
  @State() datei;

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

  componentDidLoad() {
    console.log(this.element.querySelector<HTMLTableElement>("#example-table"));
    console.log(
      this.tableToJson(
        this.element.querySelector<HTMLTableElement>("#example-table")
      )
    );
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
  }

  tableToJson(table: HTMLTableElement) {
    var data = []; // first row needs to be headers var headers = [];
    for (var i = 0; i < table.rows[0].cells.length; i++) {
      Headers[i] = table.rows[0].cells[i].innerHTML
        .toLowerCase()
        .replace(/ /gi, "");
    }
    // go through cells
    for (var i = 1; i < table.rows.length; i++) {
      var tableRow = table.rows[i];
      var rowData = {};
      for (var j = 0; j < tableRow.cells.length; j++) {
        rowData[Headers[j]] = tableRow.cells[j].innerHTML;
      }
      data.push(rowData);
    }
    console.log(data);
    this.datei = data;
    console.log(this.datei);
    return data;
  }
csv(event){
  console.log(this.datei);
  console.log(event);
  var json = this.datei;
  console.log(json);
var fields = Object.keys(json[0]);
var replacer = function(key, value) { console.log(key); return value === null ? '' : value } 
var csv = json.map(function(row){
  return fields.map(function(fieldName){
    return JSON.stringify(row[fieldName], replacer)
  }).join(',')
})
csv.unshift(fields.join(',')) // add header column
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
        <table id="example-table">
          <thead>
            <tr>
            <th colSpan={4}> Auswertungstabelle des Präsentationsbewerters</th>    
            </tr>
          </thead>
            <tr>
            <th colSpan={3} >Daten zur Bewertung:</th>
            </tr>
          <tr>
            <td>Dozent:</td>
            <td>{this.dozent}</td>
          </tr>
          <tr>
            <td>Name des Studierenden/Gruppe:</td>
            <td>{this.gruppe}</td>
          </tr>
          <tr>
          <td rowSpan={4}>Matrikelnummer(n):</td>
            <td>{this.matrikelnummereins}</td>
            <td>{this.matrikelnummerzwei}</td>
          </tr>
          <tr>
            <td>{this.matrikelnummerdrei}</td>
            <td>{this.matrikelnummervier}</td>
          </tr>
          <tr>
            <td>{this.matrikelnummerfuenf}</td>
            <td>{this.matrikelnummersechs}</td>
          </tr>
          <tr>
            <td>{this.matrikelnummersieben}</td>
            <td>{this.matrikelnummeracht}</td>
          </tr>
          <tr>
            <td>Lehrveranstaltung:</td>
            <td>{this.veranstaltung}</td>
          </tr>
          <tr>
            <td></td>
            <td>Kriterium:</td>
            <td>Erreichte Punktzahl:</td>
            <td>Mögliche Punktzahl:</td>
            <td>Gesamt Punktzahl (Kategorie):</td>
          </tr>
          <tr>
          <td rowSpan={4}>Thematische Ausarbeitung:</td>
            <td>
              Fachliche Bearbeitung (unter Berücksichtung des
              Schwierigkeitsgrads)
            </td>
            <td>{this.reglereins}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Nutzung von Fachwissen</td>
            <td>{this.reglerzwei}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Struktur</td>
            <td>{this.reglerdrei}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Dokumentation</td>
            <td>{this.reglervier}</td>
            <td>10</td>
            <td>{this.ergebnisTA}/40P</td>
          </tr>
          <tr>
          <td rowSpan={2}>Produkt:</td>
            <td>Umsetzbarkeit des Ergebnisses</td>
            <td>{this.reglerfuenf}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Kreativität</td>
            <td>{this.reglersechs}</td>
            <td>10</td>
            <td>{this.ergebnisPR}/20P</td>
          </tr>
          <tr>
          <td rowSpan={4}>Herangehensweise:</td>
            <td>Methodik</td>
            <td>{this.reglersieben}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Selbstständigkeit, Eigeninitiative</td>
            <td>{this.regleracht}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Kommunikation</td>
            <td>{this.reglerneun}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Dokumentation</td>
            <td>{this.reglerzehn}</td>
            <td>10</td>
            <td>{this.ergebnisHW}/40P</td>
          </tr>
          <tr>
          <td rowSpan={4}>Präsentation:</td>
            <td>Rhetorik</td>
            <td>{this.reglerelf}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Ansprache</td>
            <td>{this.reglerzwoelf}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Medien</td>
            <td>{this.reglerdreizehn}</td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Diskussion</td>
            <td>{this.reglervierzehn}</td>
            <td>10</td>
            <td>{this.ergebnisPAE}/40P</td>
          </tr>
          <tr>
            <td>Anmerkungen:</td>
            <td>{this.anmerkungen}</td>
          </tr>
          <tr>
            <td>Gute Aspekte:</td>
            <td>{this.guteaspekte}</td>
          </tr>
          <tr>
            <td>Verbesserungsvorschläge:</td>
            <td>{this.verbesserung}</td>
          </tr>
        </table>
        <button
          class="button-text"
          onClick={(event: UIEvent) => this.csv(event)}
        >
          {this.button}
        </button>
      </div>
    );
  }
}
