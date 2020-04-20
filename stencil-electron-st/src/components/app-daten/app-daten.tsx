import { Component } from '@stencil/core';

@Component({
  tag: 'app-daten',
  styleUrl: 'app-daten.css',
  shadow: true
})
export class AppDaten {

  render() {
    return (
      <div class='app-daten'>
        <p>
          Willkommen zum Präsentationsbewerter
        </p>

        <stencil-route-link url='/daten/stencil'>
          <button>
            starten
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
