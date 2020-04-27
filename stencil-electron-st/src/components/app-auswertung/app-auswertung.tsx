import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-auswertung',
  styleUrl: 'app-auswertung.css',
  shadow: true
})
export class AppHome {
  @Prop() test: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Deine Bewertung wird nun gespeichert");
    console.log(event);
  }

  render() {
    return (
      <div class='app-home'>
        <h2>Auswertung</h2>
        <div class="flex-container">
          <div id="links" class="flex-item">
            <aufklapp-button-kurz>hallo</aufklapp-button-kurz>
            <aufklapp-button-kurz>hallo</aufklapp-button-kurz>
            <aufklapp-button-kurz>hallo</aufklapp-button-kurz>
            <aufklapp-button-kurz>hallo</aufklapp-button-kurz>
          </div>
          <div id="rechts" class="flex-item">
            <anmerkungs-feld name="Anmerkungen"></anmerkungs-feld>
            <anmerkungs-feld name="Das war gut"></anmerkungs-feld>
            <anmerkungs-feld name="Verbesserungsvorschläge"></anmerkungs-feld>
          </div>
        </div>
        <button id="abschließen"  onClick={ (event: UIEvent) => this.handleClick(event)}>Bewertung speichern</button>
        <export-button></export-button>
        
        <stencil-route-link url='/bewertung'>
          <button>
            zurück
          </button>
        </stencil-route-link>
        <stencil-route-link url='/'>
          <button>
            home
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
