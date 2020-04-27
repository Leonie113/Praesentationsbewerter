import { Component, h } from '@stencil/core';
//import { AufklappButton } from '../aufklapp-button/aufklapp-button';

@Component({
  tag: 'app-bewertung',
  styleUrl: 'app-bewertung.css',
  shadow: true
})

export class AppHome {

  render() {
    return (
      <div class='app-bewertung'>
        <header-leonie class="header-leonie"></header-leonie>
        <h2 class='title'>
          Bewertung - Projektvortrag
        </h2>
        <aufklapp-button class="aufklappbuttons"
          Ueberschrift="Thematische Ausarbeitung" 
          Kriterium1="Fachliche Bearbeitung (unter Berücksichtung des Schwierigkeitsgrads)"
          Kriterium2="Nutzung von Fachwissen"
          Kriterium3="Struktur"
          Kriterium4="Dokumentation"
        ></aufklapp-button>

        <aufklapp-button-kurz class="aufklappbuttons"
        Ueberschrift="Produkt"
        Kriterium1="Umsetzbarkeit des Ergebnisses"
        Kriterium2="Kreativität"
        >

        </aufklapp-button-kurz>

        <aufklapp-button class="aufklappbuttons" 
          Ueberschrift="Herangehensweise"
          Kriterium1="Methodik"
          Kriterium2="Selbstständigkeit, Eigeninitiative"
          Kriterium3="Kommunikation"
          Kriterium4="Dokumentation"
        ></aufklapp-button>

        <aufklapp-button class="aufklappbuttons-last" 
          Ueberschrift="Präsentation"
          Kriterium1="Rhetorik"
          Kriterium2="Ansprache"
          Kriterium3="Medien"
          Kriterium4="Diskussion"
        ></aufklapp-button>
        <footer-leonie class="footer-leonie"></footer-leonie>
      </div>
    );
  }
}

