import { Component, Prop, State, } from '@stencil/core';


@Component({
  tag: 'app-tabelle',
  styleUrl: 'app-tabelle.css',
})
export class AppTabelle{
  @Prop() test: string;

  @State() datei;
  tabelle : HTMLTableElement;

  @State() dozent : string;
  @State() gruppe : string;
  @State() matrikelnummereins : string;
  @State() matrikelnummerzwei : string;
  @State() matrikelnummerdrei : string;
  @State() matrikelnummervier : string;
  @State() matrikelnummerfuenf : string;
  @State() matrikelnummersechs : string;
  @State() matrikelnummersieben : string;
  @State() matrikelnummeracht : string;
  @State() veranstaltung : string;

  @State() ergebnisTA : string;
  @State() ergebnisPR : string;
  @State() ergebnisHW : string;
  @State() ergebnisPAE : string;
 
  @State() prozent : string;
  @State() note : string;
  @State() punkte : string;

  @State() anmerkung : string;
  @State() gut : string;
  @State() verbs : string;

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
    this.dozent = localStorage.getItem('dozent');
    this.gruppe =  localStorage.getItem('gruppe');
    this.matrikelnummereins =  localStorage.getItem('matrikelnummereins');
    this.matrikelnummerzwei =  localStorage.getItem('matrikelnummerzwei');
    this.matrikelnummerdrei =  localStorage.getItem('matrikelnummerdrei');
    this.matrikelnummervier =  localStorage.getItem('matrikelnummervier');
    this.matrikelnummerfuenf =  localStorage.getItem('matrikelnummerfuenf');
    this.matrikelnummersechs =  localStorage.getItem('matrikelnummersechs');
    this.matrikelnummersieben =  localStorage.getItem('matrikelnummersieben');
    this.matrikelnummeracht =  localStorage.getItem('matrikelnummeracht');
    this.veranstaltung =  localStorage.getItem('veranstaltung');

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

    this.ergebnisTA = localStorage.getItem('ergebnisTA');
    this.ergebnisPR = localStorage.getItem('ergebnisPR');
    this.ergebnisHW = localStorage.getItem('ergebnisHW');
    this.ergebnisPAE = localStorage.getItem('ergebnisPAE');

    this.verbs = localStorage.getItem('verbesserung');
    this.anmerkung = localStorage.getItem('anmerkung');
    this.gut = localStorage.getItem('guteAspekte');

    this.note = localStorage.getItem('note');
    this.prozent = localStorage.getItem('prozent');
    this.punkte = localStorage.getItem('punkte');
    }
 

  render() {
    return (
      <div class='app-home'>
                
        <headline-mittig text="Ergebnis-Tabelle"></headline-mittig>
        <div>
          <table id="tabelle-end">
            <thead>
              <tr>
                <td colSpan={8} >
                  Daten:
                </td>
              </tr>
            </thead>
            <tr>
              <td class="fett-end">Dozent:</td>
              <td>{this.dozent}</td>
              <td class="fett-end">Gruppe / Name:</td>
              <td>{this.gruppe}</td>
              <td colSpan={2} class="fett-end">Lehrveranstaltung:</td>
              <td colSpan={2} >{this.veranstaltung}</td>
            </tr>
            <tr>
            <td class="fett-end">1. Matrikelnummer:</td>
            <td>{this.matrikelnummereins}</td>
            <td class="fett-end">2. Matrikelnummer:</td>
            <td>{this.matrikelnummerzwei}</td>
            <td class="fett-end">3. Matrikelnummer:</td>
            <td>{this.matrikelnummerdrei}</td>
            <td class="fett-end">4. Matrikelnummer:</td>
            <td>{this.matrikelnummervier}</td>
            </tr>
            <tr>
            <td class="fett-end">5. Matrikelnummer:</td>
            <td>{this.matrikelnummerfuenf}</td>
            <td class="fett-end">6. Matrikelnummer:</td>
            <td>{this.matrikelnummersechs}</td>
            <td class="fett-end">7. Matrikelnummer:</td>
            <td>{this.matrikelnummersieben}</td>
            <td class="fett-end">8. Matrikelnummer:</td>
            <td>{this.matrikelnummeracht}</td>
            </tr>


            <tr>
              <td colSpan={8} id="td-weg">
                .
              </td>
            </tr>
            <thead>
              <tr>
                <td colSpan={8} >
                  Bewertung:
                </td>
              </tr>
            </thead>

            <tr>
              <td colSpan={4}class="fett-end">
                Kategorie:
              </td>
              <td colSpan={2} class="fett-end">
                Kriterium:
              </td>
              <td class="fett-end">
                erreichte Punktzahl:
              </td>
              <td class="fett-end">
                Gesamt Punktzahl Kategorie:
              </td>
            </tr>

            
            <tr>
              <td colSpan={4} rowSpan={4} class="fett-end">
              Thematische Ausarbeitung
              </td>
              <td colSpan={2}>
              Fachliche Bearbeitung (unter Berücksichtung des Schwierigkeitsgrads)
              </td>
              <td>
              {this.reglereins}/10
              </td>
              <td rowSpan={4} class="mach-zentral">
              {this.ergebnisTA}/40
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Nutzung von Fachwissen
              </td>
              <td>
                {this.reglerzwei}/10
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Struktur
              </td>
              <td>
              {this.reglerdrei}/10
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Recherche
              </td>
              <td>
              {this.reglervier}/10
              </td>
            </tr>


            <tr>
              <td colSpan={4} rowSpan={2} class="fett-end">
              Produkt
              </td>
              <td colSpan={2}>
              Umsetzbarkeit des Ergebnisses
              </td>
              <td>
              {this.reglerfuenf}/10
              </td>
              <td rowSpan={2} class="mach-zentral">
              {this.ergebnisPR}/20
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Kreativität
              </td>
              <td>
                {this.reglersechs}/10
              </td>
            </tr>
            

            <tr>
              <td colSpan={4} rowSpan={4} class="fett-end">
              Herangehensweise
              </td>
              <td colSpan={2}>
              Methodik
              </td>
              <td>
              {this.reglersieben}/10
              </td>
              <td rowSpan={4} class="mach-zentral">
              {this.ergebnisHW}/40
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Selbstständigkeit, Eigeninitiative
              </td>
              <td>
                {this.regleracht}/10
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Kommunikation
              </td>
              <td>
              {this.reglerneun}/10
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Dokumentation
              </td>
              <td>
              {this.reglerzehn}/10
              </td>
            </tr>


            <tr>
              <td colSpan={4} rowSpan={4} class="fett-end">
              Präsentation
              </td>
              <td colSpan={2}>
              Rhetorik
              </td>
              <td>
              {this.reglerelf}/10
              </td>
              <td rowSpan={4} class="mach-zentral">
              {this.ergebnisPAE}/40
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Ansprache
              </td>
              <td>
                {this.reglerzwoelf}/10
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Medien
              </td>
              <td>
              {this.reglerdreizehn}/10
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
              Diskussion
              </td>
              <td>
              {this.reglervierzehn}/10
              </td>
            </tr>

            <tr>
              <td colSpan={8} id="td-weg">
                 .
              </td>
            </tr>


            <tr>
              <td class="fett-end">
                Anmerkungen:
              </td>
              <td colSpan={8}>
              {this.anmerkung}
              </td>
            </tr>

            <tr>
              <td class="fett-end">
                Gute Aspekte:
              </td>
              <td colSpan={8}>
              {this.gut}
              </td>
            </tr>

            <tr>
              <td class="fett-end">
                Verbesserungen:
              </td>
              <td colSpan={8}>
              {this.verbs}
              </td>
            </tr>

            <tr>
              <td colSpan={3} id="td-weg"></td>
              <td class="fett-end">
                Gesamtpunktzahl:
              </td>
              <td>
                {this.punkte}/140
              </td>
              <td class="fett-end">
                Gesamtprozent:
              </td>
              <td>
                {this.prozent}/100%
              </td>
              <td  class="fett-end">
                Note: {this.note}
              </td>
            </tr>

          </table>
        </div>
        <div>


              <div class="button-end">
                <div id="export">
                <export-button button="Exportieren"></export-button>
                </div>
                <bewertung-end></bewertung-end>
              </div>
            </div>


        <div id="last-button">
          <stencil-route-link url="/auswertung">
          <zurueck-button></zurueck-button>
          </stencil-route-link>
        </div>
        <table-test></table-test>
      </div>
    );
  }
}
