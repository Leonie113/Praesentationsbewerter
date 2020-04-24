import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-bewertung',
  styleUrl: 'app-bewertung.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Bewertung
        </p>
        <stencil-route-link url="/auswertung">
        <weiter-button></weiter-button>
        </stencil-route-link>
        <stencil-route-link url="/profile/stencil">
          <zurueck-button></zurueck-button>
        </stencil-route-link>
        <aufklapp-button></aufklapp-button>
          <regler-wertung></regler-wertung>
          <export-button></export-button>
          <anmerkungs-feld></anmerkungs-feld>
        
       
      </div>
    );
  }
}
