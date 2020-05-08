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
          Ueberschrift="Thematische Ausarbeitung   ▼" 
          Kriterium1="Fachliche Bearbeitung:"
          KriteriumDetail1="allgemeine Zielerreichung, Effektivität in Bezug auf die Anforderungen unter Berücksichtigung der Schwierigkeit"
          Kriterium2="Nutzung von Fachwissen:"
          KriteriumDetail2 = "Fachliches Terminologie"
          Kriterium3="Struktur:"
          KriteriumDetail3 = "roter Faden"
          Kriterium4="Recherche:"
          KriteriumDetail4="inhaltliche Breite und Tiefe, wissenschaftliches Niveau, Berücksichtigung von on- und offline-Quellen und technischen Dokumenten"
        ></kategorie1-button>

        <kategorie2-button class="aufklappbuttons"
        Ueberschrift="Produkt   ▼"
        Kriterium1="Umsetzbarkeit des Ergebnisses:"
        KriteriumDetail1="Ergebnis als Produkt für Außenwelt, Transferierbarkeit oder Veröffentlichung"
        Kriterium2="Kreativität:"
        KriteriumDetail2 = "Finden ungewöhnlicher Lösungen, Vielfalt in den gestalterischen und/oder inhaltlichen Ansätzen"
        ></kategorie2-button>

        <kategorie3-button class="aufklappbuttons" 
          Ueberschrift="Herangehensweise   ▼"
          Kriterium1="Methodik:"
          KriteriumDetail1 ="Verwenden von Werkzeugen und Tools, Phasenplanung, inhaltliche Segmentierung, koordiniertes und systematisches Vorgehen"
          Kriterium2="Selbstständigkeit, Eigeninitiative:"
          KriteriumDetail2="Inanspruchnahme von Unterstützung durch den Dozenten, Treffen eigener Entscheidungen"
          Kriterium3="Kommunikation:"
          KriteriumDetail3 = "Kontakt mit dem Kunden, Vor- und Nachbereitung von Meetings, Mailkontakt"
          Kriterium4="Dokumentation:"
          KriteriumDetail4="Vollständigkeit Dokumentation und Artefakte, Sorgfalt in der Erstellung und Gestaltung, Nutzbarkeit"
        ></kategorie3-button>

        <kategorie4-button class="aufklappbuttons-last" 
          Ueberschrift="Präsentation  ▼"
          Kriterium1="Rhetorik:"
          KriteriumDetail1="Vortragsverhalten"
          Kriterium2="Ansprache:"
          KriteriumDetail2="Verständliche, zielgruppenadäquate Darstellung"
          Kriterium3="Medien:"
          KriteriumDetail3="Medieneinsatz, Gestaltung und Darstellung"
          Kriterium4="Diskussion:"
          KriteriumDetail4="Themenkompetenz, Fachliches Terminologie"
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