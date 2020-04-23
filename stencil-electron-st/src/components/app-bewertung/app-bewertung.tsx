import { Component } from '@stencil/core';

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
        <aufklapp-button></aufklapp-button>
          <regler-wertung></regler-wertung>
          <export-button></export-button>
          
        <stencil-route-link url='/profile/stencil'>
          <button>
            zurück
          </button>
        </stencil-route-link>
        <stencil-route-link url='/auswertung'>
          <button>
            weiter
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
