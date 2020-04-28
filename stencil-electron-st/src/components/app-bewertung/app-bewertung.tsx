import { Component } from '@stencil/core';
//import { AufklappButton } from '../aufklapp-button/aufklapp-button';

@Component({
  tag: 'app-bewertung',
  styleUrl: 'app-bewertung.css',
  shadow: true
})

export class AppBewertung {

  render() {
    return (
      <div class='app-bewertung'>
        
        <headline-mittig text="Bewertung"></headline-mittig>
        <kategorie1-button class="aufklappbuttons"
          Ueberschrift="Thematische Ausarbeitung" 
          Kriterium1="Fachliche Bearbeitung (unter Berücksichtung des Schwierigkeitsgrads)"
          Kriterium2="Nutzung von Fachwissen"
          Kriterium3="Struktur"
          Kriterium4="Dokumentation"
        ></kategorie1-button>

        <kategorie2-button class="aufklappbuttons"
        Ueberschrift="Produkt"
        Kriterium1="Umsetzbarkeit des Ergebnisses"
        Kriterium2="Kreativität"
        ></kategorie2-button>

        <kategorie3-button class="aufklappbuttons" 
          Ueberschrift="Herangehensweise"
          Kriterium1="Methodik"
          Kriterium2="Selbstständigkeit, Eigeninitiative"
          Kriterium3="Kommunikation"
          Kriterium4="Dokumentation"
        ></kategorie3-button>

        <kategorie4-button class="aufklappbuttons-last" 
          Ueberschrift="Präsentation"
          Kriterium1="Rhetorik"
          Kriterium2="Ansprache"
          Kriterium3="Medien"
          Kriterium4="Diskussion"
        ></kategorie4-button>
        
        <stencil-route-link url="/profile/stencil">
          <zurueck-button></zurueck-button>
          </stencil-route-link>
          
          <stencil-route-link url='/auswertung'>
          <weiter-button></weiter-button>
          </stencil-route-link> 

      </div>
    );
  }
}