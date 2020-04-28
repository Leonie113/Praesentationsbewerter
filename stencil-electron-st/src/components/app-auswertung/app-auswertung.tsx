import { Component, Prop, } from '@stencil/core';


@Component({
  tag: 'app-auswertung',
  styleUrl: 'app-auswertung.css',
})
export class AppAuswertung{
  @Prop() test: string;
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Deine Bewertung wird nun gespeichert");
    console.log(event);
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
          ></auswertung-button >

            <auswertung-button-kurz class="aufklappbuttons"
              Ueberschrift="Produkt"
              Kriterium1="Umsetzbarkeit des Ergebnisses"
              Kriterium2="Kreativität"
            ></auswertung-button-kurz>

            <auswertung-button class="aufklappbuttons" 
              Ueberschrift="Herangehensweise"
              Kriterium1="Methodik"
              Kriterium2="Selbstständigkeit, Eigeninitiative"
              Kriterium3="Kommunikation"
              Kriterium4="Dokumentation"
            ></auswertung-button>

            <auswertung-button class="aufklappbuttons-last" 
              Ueberschrift="Präsentation"
              Kriterium1="Rhetorik"
              Kriterium2="Ansprache"
              Kriterium3="Medien"
              Kriterium4="Diskussion"
            ></auswertung-button>

            <auswertung-daten
              Ueberschrift="Daten" 
            ></auswertung-daten>

          </div>
          <div id="rechts" class="flex-item">
            <anmerkungs-feld name="Anmerkungen"></anmerkungs-feld>
            <anmerkungs-feld name="Das war gut"></anmerkungs-feld>
            <anmerkungs-feld name="Verbesserungsvorschläge"></anmerkungs-feld>
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
