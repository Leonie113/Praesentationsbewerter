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
      // <div>
      //   <table id="example-table">
      //     <thead>
      //       <tr>
      //       <th colSpan={4}> Auswertungstabelle des Präsentationsbewerters</th>    
      //       </tr>
      //     </thead>
      //       <tr>
      //       <th colSpan={3} >Daten zur Bewertung:</th>
      //       </tr>
      //     <tr>
      //       <td>Dozent:</td>
      //       <td>{this.dozent}</td>
      //     </tr>
      //     <tr>
      //       <td>Name des Studierenden/Gruppe:</td>
      //       <td>{this.gruppe}</td>
      //     </tr>
      //     <tr>
      //     <td rowSpan={4}>Matrikelnummer(n):</td>
      //       <td>{this.matrikelnummereins}</td>
      //       <td>{this.matrikelnummerzwei}</td>
      //     </tr>
      //     <tr>
      //       <td>{this.matrikelnummerdrei}</td>
      //       <td>{this.matrikelnummervier}</td>
      //     </tr>
      //     <tr>
      //       <td>{this.matrikelnummerfuenf}</td>
      //       <td>{this.matrikelnummersechs}</td>
      //     </tr>
      //     <tr>
      //       <td>{this.matrikelnummersieben}</td>
      //       <td>{this.matrikelnummeracht}</td>
      //     </tr>
      //     <tr>
      //       <td>Lehrveranstaltung:</td>
      //       <td>{this.veranstaltung}</td>
      //     </tr>
      //     <tr>
      //       <td></td>
      //       <td>Kriterium:</td>
      //       <td>Erreichte Punktzahl:</td>
      //       <td>Mögliche Punktzahl:</td>
      //       <td>Gesamt Punktzahl (Kategorie):</td>
      //     </tr>
      //     <tr>
      //     <td rowSpan={4}>Thematische Ausarbeitung:</td>
      //       <td>
      //         Fachliche Bearbeitung (unter Berücksichtung des
      //         Schwierigkeitsgrads)
      //       </td>
      //       <td>{this.reglereins}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Nutzung von Fachwissen</td>
      //       <td>{this.reglerzwei}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Struktur</td>
      //       <td>{this.reglerdrei}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Dokumentation</td>
      //       <td>{this.reglervier}</td>
      //       <td>10</td>
      //       <td>{this.ergebnisTA}/40P</td>
      //     </tr>
      //     <tr>
      //     <td rowSpan={2}>Produkt:</td>
      //       <td>Umsetzbarkeit des Ergebnisses</td>
      //       <td>{this.reglerfuenf}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Kreativität</td>
      //       <td>{this.reglersechs}</td>
      //       <td>10</td>
      //       <td>{this.ergebnisPR}/20P</td>
      //     </tr>
      //     <tr>
      //     <td rowSpan={4}>Herangehensweise:</td>
      //       <td>Methodik</td>
      //       <td>{this.reglersieben}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Selbstständigkeit, Eigeninitiative</td>
      //       <td>{this.regleracht}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Kommunikation</td>
      //       <td>{this.reglerneun}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Dokumentation</td>
      //       <td>{this.reglerzehn}</td>
      //       <td>10</td>
      //       <td>{this.ergebnisHW}/40P</td>
      //     </tr>
      //     <tr>
      //     <td rowSpan={4}>Präsentation:</td>
      //       <td>Rhetorik</td>
      //       <td>{this.reglerelf}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Ansprache</td>
      //       <td>{this.reglerzwoelf}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Medien</td>
      //       <td>{this.reglerdreizehn}</td>
      //       <td>10</td>
      //       <td></td>
      //     </tr>
      //     <tr>
      //       <td>Diskussion</td>
      //       <td>{this.reglervierzehn}</td>
      //       <td>10</td>
      //       <td>{this.ergebnisPAE}/40P</td>
      //     </tr>
      //     <tr>
      //       <td>Anmerkungen:</td>
      //       <td>{this.anmerkungen}</td>
      //     </tr>
      //     <tr>
      //       <td>Gute Aspekte:</td>
      //       <td>{this.guteaspekte}</td>
      //     </tr>
      //     <tr>
      //       <td>Verbesserungsvorschläge:</td>
      //       <td>{this.verbesserung}</td>
      //     </tr>
      //   </table>
        <button
          class="button-text"
          onClick={this.cvsExportieren}
        >
          {this.button}
        </button>
    );
  }
}
