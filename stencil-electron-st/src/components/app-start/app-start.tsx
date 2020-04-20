import { Component } from '@stencil/core';

@Component({
  tag: 'app-start',
  styleUrl: 'app-start.css',
  shadow: true
})
export class AppStart {

  render() {
    return (
      <div class='app-start'>
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
