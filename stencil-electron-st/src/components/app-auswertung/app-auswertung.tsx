import { Component, Prop, State, } from '@stencil/core';


@Component({
  tag: 'app-auswertung',
  styleUrl: 'app-auswertung.css',
})
export class AppAuswertung{
  @Prop() test: string;
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
  @Prop() anmerkung : string;
  @Prop() guteAspekte : string;
  @Prop() verbesserung : string;


  componentWillLoad() {
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
    this.anmerkung = localStorage.getItem('anmerkung');
    this.guteAspekte = localStorage.getItem('guteAspekte');
    this.verbesserung = localStorage.getItem('verbesserung');
    }
  
  todoListElement: any = document.querySelector('eingabe-felder');
  render() {
    return (
      <div class='app-home'>
                
        <headline-mittig text="Auswertung &amp; Anmerkungen"></headline-mittig>
        <div class="flex-container">
          <div id="linkeSeite" class="flex-item">
            
            <auswertung-button class="aufklappbuttons"
              Ueberschrift="Thematische Ausarbeitung" 
              Kriterium1="Fachliche Bearbeitung (unter Berücksichtung des Schwierigkeitsgrads)"
              Kriterium2="Nutzung von Fachwissen"
              Kriterium3="Struktur"
              Kriterium4="Dokumentation"
              reglereins={this.reglereins}
              reglerzwei={this.reglerzwei}
              reglerdrei={this.reglerdrei}
              reglervier={this.reglervier}
          ></auswertung-button >

            <auswertung-button-kurz class="aufklappbuttons"
              Ueberschrift="Produkt"
              Kriterium1="Umsetzbarkeit des Ergebnisses"
              Kriterium2="Kreativität"
              reglerfuenf={this.reglerfuenf}
              reglersechs={this.reglersechs}
            ></auswertung-button-kurz>

            <auswertung-button class="aufklappbuttons" 
              Ueberschrift="Herangehensweise"
              Kriterium1="Methodik"
              Kriterium2="Selbstständigkeit, Eigeninitiative"
              Kriterium3="Kommunikation"
              Kriterium4="Dokumentation"
              reglereins={this.reglersieben}
              reglerzwei={this.regleracht}
              reglerdrei={this.reglerneun}
              reglervier={this.reglerzehn}
            ></auswertung-button>

            <auswertung-button class="aufklappbuttons-last" 
              Ueberschrift="Präsentation"
              Kriterium1="Rhetorik"
              Kriterium2="Ansprache"
              Kriterium3="Medien"
              Kriterium4="Diskussion"
              reglereins={this.reglerelf}
              reglerzwei={this.reglerzwoelf}
              reglerdrei={this.reglerdreizehn}
              reglervier={this.reglervierzehn}
            ></auswertung-button>

            <auswertung-daten
              Ueberschrift="Daten" 
            ></auswertung-daten>

          </div>
          <div id="rechts" class="flex-item">
            <anmerkungs-feld></anmerkungs-feld>
            
          </div>
        </div>
        <div>
          <export-button></export-button>
          <bewertung-end></bewertung-end>
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
